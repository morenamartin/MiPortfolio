"use client"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import fotoPerfil from "@/assets/yo.png"
import { useEffect, useState } from "react";


const Inicio = ({ id }: { id: string }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); 
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <div id={id} className="flex justify-center pt-9 md:pt-20 h-fit md:h-[800px]">      
            <div className="grid grid-rows-2 justify-center md:grid-cols-2 md:justify-between h-fit w-[95%] pt-20 lg:px-32">
                
                <div className="flex flex-col w-[100%] h-fit gap-4">
                    <h1 className="text-5xl font-bold md:text-6xl"><span className="text-gray-800">Hola, soy</span> <br/>
                        <span className="text-violet-600">Desarrolladora <br/>
                        Full Stack</span></h1>
                    <p className="text-xl font-semibold text-gray-500">Especializada en crear experiencias web modernas y funcionales. Apasionada por el código limpio, el diseño intuitivo y las nuevas tecnologías.</p>
                    
                    <div className="flex flex-col gap-4 mt-6 lg:flex-row">
                        <a href="#proyectos" 
                        onClick={(e) => {
                            e.preventDefault();
                            const section = document.querySelector("#proyectos");
                            if (section) {
                            const yOffset = -90; 
                            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                            window.scrollTo({ top: y, behavior: "smooth" });
                            }
                        }}
                        className="py-3 font-semibold text-white rounded-lg bg-violet-600 hover:bg-violet-800 px-7">Ver Proyectos</a>
                        <a href="#contacto" 
                         onClick={(e) => {
                            e.preventDefault();
                            const section = document.querySelector("#contacto");
                            if (section) {
                            const yOffset = -90; 
                            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                            window.scrollTo({ top: y, behavior: "smooth" });
                            }
                        }}
                        className="border-[1px] border-gray-300 hover:border-gray-500 px-7 py-3 rounded-lg text-gray-800 font-semibold">Contactar</a>

                        <button className="flex flex-row items-center justify-center text-gray-600 hover:text-violet-800"> 
                            <Download className="w-10 h-5"/> 
                            <a 
                                href="/MorenaMartin-CV-Frontend.pdf" 
                                download 
                            >Descargar CV</a>
                        </button>

                    </div>

                    <div className="flex flex-row gap-5 mt-4 text-gray-600">
                        <a href="https://www.linkedin.com/in/morena-mart%C3%ADn-979756308/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                        <a href="https://github.com/morenamartin" target="_blank" rel="noopener noreferrer"><Github /></a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=martinmorena269@gmail.com&su=Consulta&body=Hola,%20quería%20consultarte%20sobre..." target="_blank" rel="noopener noreferrer"><Mail /></a>
                    </div>
                </div>
                
                <div className="flex justify-center pt-10 h-fit md:justify-end">
                    <div className="relative flex items-center justify-center overflow-hidden border-4 rounded-full h-80 w-80 border-violet-600">
                        <Image src={fotoPerfil} alt="profilePicture"/>
                    </div>
                    <div className="absolute flex items-center justify-center w-20 h-20 text-sm font-bold text-white bg-green-500 rounded-full right-8 md:top-48 md:right-6 lg:right-40">
                        Disponible
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio