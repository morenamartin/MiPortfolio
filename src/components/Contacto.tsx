import { Github, Linkedin, Mail, Phone } from "lucide-react"

const Contacto = ({ id }: { id: string }) => {
    return (
        <div id={id} className="px-4 pb-20 lg:px-40 mt-36">
            <div className="flex flex-col items-center">
                <h1 className="mb-2 text-4xl font-bold text-gray-700">Contacto</h1>
                <div className="w-20 h-1 bg-violet-600"></div>
            </div>
            <h2 className="mt-8 text-xl text-center text-gray-600 lg:px-40">¿Tienes un proyecto en mente? Me encantaría conocer más sobre tu idea y cómo puedo ayudarte a hacerla realidad.</h2>

            <div className="gap-20 mt-12 md:grid md:grid-cols-2">
                <div>
                    <h5 className="mb-4 text-2xl font-bold">Hablemos</h5>
                    <span className="text-xl font-medium text-gray-500">Estoy disponible para proyectos freelance y oportunidades laborales. No dudes en contactarme.</span>
                    
                    <div className="grid grid-rows-3 gap-8 mt-12">

                        <div className="flex flex-row gap-4">
                            <div className="bg-[#9333ea] rounded-xl w-12 h-12 flex items-center justify-center text-white">
                                <Mail />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-semibold">Email</span>
                                <a 
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=martinmorena269@gmail.com&su=Contacto&body=Hola%2C%20quiero%20consultarte..." target="_blank" rel="noopener noreferrer"
                                className="w-fit text-lg text-gray-700 hover:text-[#9333ea]">
                                    martinmorena269@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="bg-[#8b5cf6] rounded-xl w-12 h-12 flex items-center justify-center text-white">
                                <Phone />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-semibold">Teléfono</span>
                                <a 
                                href="https://wa.me/5491140864329" target="_blank" rel="noopener noreferrer"
                                className="w-fit text-lg text-gray-700 hover:text-[#8b5cf6]">
                                    11 4086-4329
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="bg-[#6366f1] rounded-xl w-12 h-12 flex items-center justify-center text-white">
                                <Mail />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-semibold">Ubicación</span>
                                <p className="text-lg text-gray-700 w-fit ">
                                    Buenos Aires, Argentina
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <h5 className="mt-16 mb-4 text-2xl font-bold md:mt-0">Seguime</h5>
                    <span className="text-lg font-medium text-gray-500">Encuéntrame en LinkedIn para networking profesional y en GitHub para ver mis trabajos y repositorios.</span>
                    <div className="flex flex-row gap-6 mt-12">
                        <a href="https://github.com/morenamartin" target="_blank" rel="noopener noreferrer" className="bg-[#1e293b] rounded-xl w-12 h-12 flex items-center justify-center text-white">
                            <Github />
                        </a>
                        <a href="https://www.linkedin.com/in/morena-mart%C3%ADn-979756308/" target="_blank" rel="noopener noreferrer" className="bg-[#9333ea] rounded-xl w-12 h-12 flex items-center justify-center text-white">
                            <Linkedin />
                        </a>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Contacto