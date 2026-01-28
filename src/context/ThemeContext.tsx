'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('dark'); // Por defecto oscuro
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Cargar tema guardado o usar dark por defecto
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Si no hay tema guardado, usar dark por defecto
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Guardar tema y aplicar clase al HTML
    localStorage.setItem('portfolio-theme', theme);
    
    // Limpiar clases anteriores
    document.documentElement.classList.remove('light', 'dark');
    
    // Aplicar la clase del tema actual
    document.documentElement.classList.add(theme);
    
    console.log('Tema aplicado:', theme); // Para debug
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};