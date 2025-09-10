"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    const links = [
        { href: "/quienes-somos", label: "Inicio" },
        { href: "/contacto", label: "Sobre mí" },
        { href: "/asd", label: "Habilidades" },
        { href: "/prsdfeguntas", label: "Proyectos" },
        { href: "/preguntadfs", label: "Contacto" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); 
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <div className={`flex flex-row items-center z-30 w-[100%] bg-white px-28 h-16 fixed ${scrolled && "drop-shadow-lg"}`}>
            <div className="flex flex-row gap-8 text-sm m-auto">
               {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="px-2 py-2 font-bold text-gray-600 hover:text-gray-900"
                    >
                    {link.label}
                </Link>
            ))}
            </div>
        </div>
    )
}

export default Navbar