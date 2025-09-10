import { Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import fotoPerfil from "@/assets/yo.png"


const Inicio = () => {
    return (
        <div className="flex justify-center py-20 ">
            <div className="grid grid-cols-2 justify-between w-[95%] pt-20 px-32">
                <div className="flex flex-col gap-4">
                    <h1 className="text-6xl font-bold"><span className="text-gray-800">Hola, soy</span> <br/>
                        <span className="text-violet-600">Desarrolladora <br/>
                        Full Stack</span></h1>
                    <p className="text-gray-500 font-semibold text-xl">Especializada en crear experiencias web modernas y funcionales. Apasionada por el código limpio, el diseño intuitivo y las nuevas tecnologías.</p>
                    
                    <div className="mt-6 flex flex-row gap-4">
                        <button className="bg-violet-600 hover:bg-violet-800 px-7 py-3 rounded-lg text-white font-semibold">Ver Proyectos</button>
                        <button className="border-[1px] border-gray-300 hover:border-gray-500 px-7 py-3 rounded-lg text-gray-800 font-semibold">Contactar</button>

                        <button className="text-gray-600 hover:text-violet-800 flex flex-row items-center"> 
                            <Download className="h-5 w-10"/> 
                            <span>Descargar CV</span>
                        </button>

                    </div>

                    <div className="flex flex-row gap-5 mt-4 text-gray-600">
                        <a href="https://www.linkedin.com/in/morena-mart%C3%ADn-979756308/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                        <a href="https://github.com/morenamartin" target="_blank" rel="noopener noreferrer"><Github /></a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=martinmorena269@gmail.com&su=Consulta&body=Hola,%20quería%20consultarte%20sobre..." target="_blank" rel="noopener noreferrer"><Mail /></a>
                    </div>
                </div>
                
                <div className="justify-items-end pt-10">
                    <div className="relative h-80 w-80 rounded-full flex items-center justify-center overflow-hidden border-4 border-violet-600">
                        <Image src={fotoPerfil} alt="profilePicture"/>
                    </div>
                    <div className="absolute top-48 right-40 w-20 h-20 flex items-center text-sm font-bold text-white justify-center rounded-full bg-green-500">
                        Disponible
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio