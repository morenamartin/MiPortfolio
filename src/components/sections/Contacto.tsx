"use client"
import { Github, Linkedin, MailIcon, MapPin, PhoneIcon } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation';

const Contacto = () => {
    const { t } = useTranslation();
    return (
        <section className="relative h-screen overflow-hidden bg-white dark:bg-black section">
            {/* Texto de fondo */}
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-[12rem] font-bold bg-gradient-to-t from-black/10 dark:from-white/10 via-black/5 dark:via-white/5 to-transparent bg-clip-text text-transparent select-none">
                    {t('contacto.title')}
                </h1>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 flex flex-col h-full">
                {/* Sección superior */}
                <div className="flex items-center flex-1 py-12">
                    <div className="w-full">
                        <div className="space-y-8">
                            <div>
                                <h2 className="flex items-center gap-4 mb-6 text-5xl font-bold text-black dark:text-white">
                                    {t('contacto.title')}
                                    <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black dark:text-white">
                                        <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M7 7h10v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </h2>
                                <p className="font-mono text-lg leading-relaxed text-gray-600 dark:text-gray-300">
{t('contacto.description')} <br />
{t('contacto.description2')} <br />
{t('contacto.description3')}
                                </p>
                            </div>


                            {/* Redes sociales */}
                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/morena-mart\u00edn-979756308" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 transition-all border rounded-lg cursor-pointer bg-gradient-to-t from-black/10 dark:from-white/10 to-transparent border-black/20 dark:border-white/20 hover:from-black/20 dark:hover:from-white/20 hover:border-black/40 dark:hover:border-white/40">
                                    <Linkedin size={20} strokeWidth={1.5} className="text-black dark:text-white" />
                                </a>
                                <a href="https://github.com/morenamartin" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 transition-all border rounded-lg cursor-pointer bg-gradient-to-t from-black/10 dark:from-white/10 to-transparent border-black/20 dark:border-white/20 hover:from-black/20 dark:hover:from-white/20 hover:border-black/40 dark:hover:border-white/40">
                                    <Github size={20} strokeWidth={1.5} className="text-black dark:text-white" />
                                </a>
                            </div>
                        </div>


                    </div>
                </div>

                {/* Tarjetas de contacto en la parte inferior */}
                <div className="pb-12">
                    <div className="w-[80vw] grid grid-cols-3 gap-8">
                        {/* Email */}
                        <a href="https://mail.google.com/mail/?view=cm&to=martinmorena269@gmail.com&su=Contacto%20desde%20Portfolio&body=Hola%20Morena,%20me%20gustar\u00eda%20contactarte." target="_blank" rel="noopener noreferrer" className="p-6 transition-all border cursor-pointer bg-gradient-to-t from-black/10 dark:from-white/10 to-transparent border-black/20 dark:border-white/20 rounded-xl hover:from-black/20 dark:hover:from-white/20 hover:border-black/40 dark:hover:border-white/40">
                            <div className="flex items-center justify-center w-12 h-12 mb-4 border rounded-lg bg-gradient-to-t from-black/15 dark:from-white/15 to-transparent border-black/30 dark:border-white/30">
                                <MailIcon size={24} strokeWidth={1.5} className="text-black dark:text-white" />
                            </div>
                            <h4 className="mb-1 font-semibold text-black dark:text-white">{t('contacto.emailTitle')}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">martinmorena269@gmail.com</p>
                        </a>

                        {/* Llamada */}
                        <a href="https://wa.me/5491140864329" target="_blank" rel="noopener noreferrer" className="p-6 transition-all border cursor-pointer bg-gradient-to-t from-black/10 dark:from-white/10 to-transparent border-black/20 dark:border-white/20 rounded-xl hover:from-black/20 dark:hover:from-white/20 hover:border-black/40 dark:hover:border-white/40">
                            <div className="flex items-center justify-center w-12 h-12 mb-4 border rounded-lg bg-gradient-to-t from-black/15 dark:from-white/15 to-transparent border-black/30 dark:border-white/30">
                                <PhoneIcon size={24} strokeWidth={1.5} className="text-black dark:text-white" />
                            </div>
                            <h4 className="mb-1 font-semibold text-black dark:text-white">{t('contacto.phoneTitle')}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">(+54) 11 40864329</p>
                        </a>

                        {/* Ubicación */}
                        <div className="p-6 transition-all border cursor-pointer bg-gradient-to-t from-black/10 dark:from-white/10 to-transparent border-black/20 dark:border-white/20 rounded-xl hover:from-black/20 dark:hover:from-white/20 hover:border-black/40 dark:hover:border-white/40">
                            <div className="flex items-center justify-center w-12 h-12 mb-4 border rounded-lg bg-gradient-to-t from-black/15 dark:from-white/15 to-transparent border-black/30 dark:border-white/30">
                                <MapPin size={24} strokeWidth={1.5} className="text-black dark:text-white" />
                            </div>
                            <h4 className="mb-1 font-semibold text-black dark:text-white">{t('contacto.locationTitle')}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{t('contacto.location')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contacto