import { Github, Linkedin, MailIcon, MapPin, PhoneIcon } from "lucide-react"

const Contacto = () => {
    return (
        <section className="h-screen bg-black relative overflow-hidden section">
            {/* Texto de fondo */}
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-[12rem] font-bold bg-gradient-to-t from-white/20 via-white/10 to-transparent bg-clip-text text-transparent select-none">
                    Contact Me
                </h1>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 h-full flex flex-col">
                {/* Sección superior */}
                <div className="flex-1 flex items-center py-12">
                    <div className="w-full">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-5xl font-bold text-white mb-6 flex items-center gap-4">
                                    Hablemos
                                    <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                        <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M7 7h10v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </h2>
                                <p className="text-gray-300 text-lg leading-relaxed">
¿Tienes un proyecto en mente? <br />
Me encantaría conocer más sobre tu idea y cómo puedo ayudarte a hacerla realidad. <br />
Estoy disponible para proyectos freelance y oportunidades laborales. No dudes en contactarme.
                                </p>
                            </div>


                            {/* Redes sociales */}
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-gradient-to-t from-white/10 to-transparent border border-white/20 rounded-lg flex items-center justify-center hover:from-white/20 hover:border-white/40 transition-all cursor-pointer">
                                    <Linkedin size={20} strokeWidth={1.5} className="text-white" />
                                </div>
                                <div className="w-12 h-12 bg-gradient-to-t from-white/10 to-transparent border border-white/20 rounded-lg flex items-center justify-center hover:from-white/20 hover:border-white/40 transition-all cursor-pointer">
                                    <Github size={20} strokeWidth={1.5} className="text-white" />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                {/* Tarjetas de contacto en la parte inferior */}
                <div className="pb-12">
                    <div className="w-[80vw] grid grid-cols-3 gap-8">
                        {/* Email */}
                        <div className="bg-gradient-to-t from-white/10 to-transparent border border-white/20 rounded-xl p-6 hover:from-white/20 hover:border-white/40 transition-all cursor-pointer">
                            <div className="w-12 h-12 bg-gradient-to-t from-white/15 to-transparent border border-white/30 rounded-lg flex items-center justify-center mb-4">
                                <MailIcon size={24} strokeWidth={1.5} className="text-white" />
                            </div>
                            <h4 className="text-white font-semibold mb-1">Envíame un email</h4>
                            <p className="text-gray-300 text-sm">martinmorena269@gmail.com</p>
                        </div>

                        {/* Llamada */}
                        <div className="bg-gradient-to-t from-white/10 to-transparent border border-white/20 rounded-xl p-6 hover:from-white/20 hover:border-white/40 transition-all cursor-pointer">
                            <div className="w-12 h-12 bg-gradient-to-t from-white/15 to-transparent border border-white/30 rounded-lg flex items-center justify-center mb-4">
                                <PhoneIcon size={24} strokeWidth={1.5} className="text-white" />
                            </div>
                            <h4 className="text-white font-semibold mb-1">Llamame o escribime</h4>
                            <p className="text-gray-300 text-sm">(+54) 11 40864329</p>
                        </div>

                        {/* Ubicación */}
                        <div className="bg-gradient-to-t from-white/10 to-transparent border border-white/20 rounded-xl p-6 hover:from-white/20 hover:border-white/40 transition-all cursor-pointer">
                            <div className="w-12 h-12 bg-gradient-to-t from-white/15 to-transparent border border-white/30 rounded-lg flex items-center justify-center mb-4">
                                <MapPin size={24} strokeWidth={1.5} className="text-white" />
                            </div>
                            <h4 className="text-white font-semibold mb-1">Mi Locación</h4>
                            <p className="text-gray-300 text-sm">Buenos Aires, Argentina</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contacto