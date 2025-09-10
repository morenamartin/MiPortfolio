"use client"
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
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

    const [menu, setMenu] = useState(false)

    return(
        <div className={`flex flex-row justify-center items-center z-40 w-screen bg-white h-16 fixed ${scrolled && "drop-shadow-lg"}`}>
            <button className="flex justify-end w-full pr-4 md:hidden" onClick={() =>  setMenu((prev) => !prev)}>
                <Menu className={`md:hidden`}/>
            </button>
            {menu && 
                <div className="fixed flex flex-col px-4 text-center bg-violet-300 right-3 top-12 md:hidden ">
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
            </div>}
            <div className={`hidden gap-8 m-auto text-sm md:flex md:flex-row`}>
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