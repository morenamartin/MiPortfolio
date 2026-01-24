"use client"
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "@/hooks/useTranslation";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { t } = useTranslation();

const links = [
  { href: "#inicio", label: t('navbar.inicio') },
  { href: "#sobre-mi", label: t('navbar.sobreMi') },
  { href: "#habilidades", label: t('navbar.softSkills') },
  { href: "#tecnologias", label: t('navbar.tecnologias') },
  { href: "#educacion-experiencia", label: t('navbar.educacionExperiencia') },
  { href: "#proyectos", label: t('navbar.proyectos') },
  { href: "#contacto", label: t('navbar.contacto') },
];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); 
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [menu, setMenu] = useState(false)

    // Función para scroll suave mejorado
    const scrollToSection = (targetId: string) => {
        const container = document.querySelector('.container') as HTMLElement;
        if (!container) return;

        const targetSectionId = targetId.replace('#', '');
        const targetElement = document.getElementById(targetSectionId);
        
        if (!targetElement) return;

        // Obtener la posición del elemento relativa al container
        const containerRect = container.getBoundingClientRect();
        const targetRect = targetElement.getBoundingClientRect();
        const scrollTop = container.scrollTop;
        
        const targetPosition = scrollTop + (targetRect.top - containerRect.top);
        
        container.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    };

    return(
        <div className={`flex flex-row justify-center items-center z-40 w-full bg-transparent h-16 fixed px-4 ${scrolled && "drop-shadow-lg"}`}>
            
            {/* Navegación central */}
            <div className={`hidden gap-8 text-sm md:flex md:flex-row`}>
               {links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    className="px-2 py-2 font-bold text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-200 drop-shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                    }}
                >
                    {link.label}
                </a>
            ))}
            </div>

            {/* Selector de idioma y tema */}
            <div className="absolute flex items-center gap-2 right-4">
                <LanguageToggle />
                <ThemeToggle />
                
                {/* Botón de menú hamburguesa */}
                <button
                    className="flex items-center justify-center md:hidden focus:outline-none"
                    onClick={() => setMenu((prev) => !prev)}
                    aria-label="Abrir menú"
                >
                    <Menu className="text-purple-600 transition-colors w-7 h-7 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200" />
                </button>
            </div>
            {/* Menú móvil */}
            {menu && (
                <div className="fixed inset-0 z-50 bg-black/40 md:hidden" onClick={() => setMenu(false)}>
                    <nav
                        className="absolute flex flex-col w-48 gap-2 px-6 py-4 text-center bg-white shadow-xl dark:bg-gray-800 right-4 top-16 rounded-xl animate-slide-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="block px-4 py-2 font-semibold text-purple-600 transition-all duration-300 rounded-lg cursor-pointer dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-gray-700 hover:text-purple-800 dark:hover:text-purple-200 hover:scale-105"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setMenu(false);
                                    // Pequeño delay para que se cierre el menú antes del scroll
                                    setTimeout(() => {
                                        scrollToSection(link.href);
                                    }, 100);
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
            <style jsx>{`
                @keyframes slide-in {
                    from {
                        opacity: 0;
                        transform: translateY(-20px) scale(0.98);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                .animate-slide-in {
                    animation: slide-in 0.25s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                /* Efecto de highlight para las secciones */
                :global(.section-highlight) {
                    animation: section-glow 1s ease-out;
                }
                
                @keyframes section-glow {
                    0% {
                        box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
                    }
                    50% {
                        box-shadow: 0 0 40px rgba(147, 51, 234, 0.5);
                    }
                    100% {
                        box-shadow: 0 0 0px rgba(147, 51, 234, 0);
                    }
                }
            `}</style>
        </div>
    )
}

export default Navbar