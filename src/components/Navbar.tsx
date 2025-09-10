"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#tecnologias", label: "Tecnologías" },
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

    return(
        <div className={`flex flex-row items-center z-50 w-[100%] bg-white px-28 h-16 fixed ${scrolled && "drop-shadow-lg"}`}>
            <div className="flex flex-row gap-8 m-auto text-sm">
               {links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    className="px-2 py-2 font-bold text-gray-600 hover:text-gray-900"
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