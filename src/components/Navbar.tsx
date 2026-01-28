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
    { href: "#inicio", label: t<string>('navbar.inicio') },
    { href: "#sobre-mi", label: t<string>('navbar.sobreMi') },
    { href: "#habilidades", label: t<string>('navbar.softSkills') },
    { href: "#tecnologias", label: t<string>('navbar.tecnologias') },
    { href: "#educacion-experiencia", label: t<string>('navbar.educacionExperiencia') },
    { href: "#proyectos", label: t<string>('navbar.proyectos') },
    { href: "#contacto", label: t<string>('navbar.contacto') },
];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); 
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [menu, setMenu] = useState(false)
    const [menuClosing, setMenuClosing] = useState(false)

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
                    className="px-2 py-2 font-bold text-black transition-all duration-300 cursor-pointer dark:text-white hover:text-gray-600 dark:hover:text-gray-200 drop-shadow-lg hover:scale-105"
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
                    className="flex items-center justify-center p-2 transition-all duration-300 rounded-lg md:hidden focus:outline-none hover:scale-110"
                    onClick={() => {
                        if (menu) {
                            setMenuClosing(true);
                            setTimeout(() => {
                                setMenu(false);
                                setMenuClosing(false);
                            }, 250);
                        } else {
                            setMenu(true);
                        }
                    }}
                    aria-label="Abrir menú"
                >
                    <Menu className={`w-6 h-6 text-black dark:text-white transition-all duration-300 hover:text-gray-600 dark:hover:text-gray-300 ${menu ? 'rotate-90' : 'rotate-0'}`} />
                </button>
            </div>
            {/* Menú móvil */}
            {menu && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden" onClick={() => {
                    setMenuClosing(true);
                    setTimeout(() => {
                        setMenu(false);
                        setMenuClosing(false);
                    }, 250);
                }}>
                    <nav
                        className={`fixed top-0 right-0 h-full w-[65%] flex flex-col bg-white/95 dark:bg-neutral-900/95 backdrop-blur-lg shadow-2xl border-l border-gray-200 dark:border-neutral-700 ${menuClosing ? 'animate-slide-out' : 'animate-slide-in'}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Botón de cierre */}
                        <div className="flex justify-end p-4">
                            <button
                                onClick={() => {
                                    setMenuClosing(true);
                                    setTimeout(() => {
                                        setMenu(false);
                                        setMenuClosing(false);
                                    }, 250);
                                }}
                                className="p-2 text-gray-500 transition-all duration-200 rounded-lg hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Lista de navegación */}
                        <div className="flex-1 px-6 space-y-1 overflow-y-auto">
                            {links.map((link, index) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="flex items-center justify-between px-4 py-3 font-medium text-gray-700 transition-all duration-300 rounded-lg cursor-pointer dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white group"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setMenuClosing(true);
                                        setTimeout(() => {
                                            setMenu(false);
                                            setMenuClosing(false);
                                            scrollToSection(link.href);
                                        }, 250);
                                    }}
                                >
                                    <span>{link.label}</span>
                                    <svg className="w-4 h-4 text-gray-400 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </nav>
                </div>
            )}
            <style jsx>{`
                @keyframes slide-in {
                    from {
                        transform: translateX(100%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }
                @keyframes slide-out {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(100%);
                    }
                }
                .animate-slide-in {
                    animation: slide-in 0.25s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .animate-slide-out {
                    animation: slide-out 0.25s cubic-bezier(0.4, 0, 0.2, 1);
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