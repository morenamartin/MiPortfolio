'use client';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    console.log('Toggle clicked. Tema actual:', theme); // Para debug
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className="flex items-center justify-center w-10 h-10 transition-all duration-300 hover:scale-105"
      aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-600" />
      )}
    </button>
  );
};

export default ThemeToggle;