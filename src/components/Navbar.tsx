"use client"
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#habilidades", label: "Soft Skills" },
  { href: "#tecnologias", label: "Tecnologías" },
  { href: "#educacion-experiencia", label: "Educación y Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); 
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [menu, setMenu] = useState(false)

    return(
        <div className={`flex flex-row justify-center items-center z-40 w-full bg-transparent h-16 fixed ${scrolled && "drop-shadow-lg"}`}>
            {/* Botón de menú hamburguesa */}
            <button
                className="flex items-center justify-end w-full pr-4 md:hidden focus:outline-none"
                onClick={() => setMenu((prev) => !prev)}
                aria-label="Abrir menú"
            >
                <Menu className="transition-colors w-7 h-7 text-violet-700 hover:text-violet-900 md:hidden" />
            </button>
            {/* Menú móvil */}
            {menu && (
                <div className="fixed inset-0 z-50 bg-black/40 md:hidden" onClick={() => setMenu(false)}>
                    <nav
                        className="absolute flex flex-col w-40 gap-2 px-6 py-4 text-center bg-white shadow-xl right-4 top-16 rounded-xl animate-slide-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="block px-4 py-2 font-semibold transition-colors rounded-lg text-violet-700 hover:bg-violet-100 hover:text-violet-900"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setMenu(false);
                                    const section = document.querySelector(link.href);
                                    if (section) {
                                        const yOffset = -90;
                                        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                        window.scrollTo({ top: y, behavior: "smooth" });
                                    }
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
            `}</style>
            <div className={`hidden gap-8 m-auto text-sm md:flex md:flex-row`}>
               {links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    className="px-2 py-2 font-bold text-white hover:text-gray-200 drop-shadow-lg"
                    onClick={(e) => {
                        e.preventDefault();
                        const section = document.querySelector(link.href);
                        if (section) {
                        const yOffset = -90; 
                        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                        }
                    }}
                >
                    {link.label}
                </a>
            ))}
            </div>
        </div>
    )
}

export default Navbar