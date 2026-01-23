"use client"
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
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
        console.log('Intentando navegar a:', targetId);
        const section = document.querySelector(targetId);
        
        if (!section) {
            console.log('No se encontró la sección:', targetId);
            return;
        }

        console.log('Sección encontrada:', section);
        
        // Scroll simple y directo
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 100; // 100px de offset

        console.log('Scrolling to position:', offsetPosition);

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
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
                    className="px-2 py-2 font-bold text-white hover:text-gray-200 drop-shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                    }}
                >
                    {link.label}
                </a>
            ))}
            </div>

            {/* Selector de idioma y menú móvil */}
            <div className="flex items-center gap-4 absolute right-4">
                <LanguageToggle />
                
                {/* Botón de menú hamburguesa */}
                <button
                    className="flex items-center justify-center md:hidden focus:outline-none"
                    onClick={() => setMenu((prev) => !prev)}
                    aria-label="Abrir menú"
                >
                    <Menu className="transition-colors w-7 h-7 text-violet-700 hover:text-violet-900" />
                </button>
            </div>
            {/* Menú móvil */}
            {menu && (
                <div className="fixed inset-0 z-50 bg-black/40 md:hidden" onClick={() => setMenu(false)}>
                    <nav
                        className="absolute flex flex-col w-48 gap-2 px-6 py-4 text-center bg-white shadow-xl right-4 top-16 rounded-xl animate-slide-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="block px-4 py-2 font-semibold transition-all duration-300 rounded-lg text-violet-700 hover:bg-violet-100 hover:text-violet-900 hover:scale-105 cursor-pointer"
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