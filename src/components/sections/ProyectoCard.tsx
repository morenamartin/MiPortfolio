import Image from 'next/image';
import { Proyecto } from '@/helpers/proyectos';

interface ProyectoCardProps {
    proyecto: Proyecto;
    reversed?: boolean;
}

const ProyectoCard = ({ proyecto, reversed = false }: ProyectoCardProps) => {
    return (
        <div className="w-full h-screen relative">
            {/* Imagen - solo en el área visible */}
            <div className={`absolute top-0 ${reversed ? 'left-0' : 'right-0'} w-[50%] h-full`}>
                <Image
                    src={proyecto.imagen}
                    alt={proyecto.nombre}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Contenedor de información - absolute - 65% horizontal, 100% vertical */}
            <div className={`absolute top-0 ${reversed ? 'right-0' : 'left-0'} w-[65%] h-full bg-black flex items-center ${reversed ? 'justify-end pr-10' : 'justify-start pl-4 pr-16'} py-8`}
                 style={{
                     clipPath: reversed 
                         ? 'polygon(0% 0%, 100% 0%, 100% 100%, 15% 100%)' // Inclinado en lado izquierdo
                         : 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)'   // Inclinado en lado derecho
                 }}>
                <div className="w-full max-w-2xl flex flex-col gap-3 text-start">
                    {/* Título */}
                    <h2 className={`text-2xl font-bold ${reversed ? 'text-right' : 'text-left'} text-white`}>
                        {proyecto.nombre}
                    </h2>

                    {/* Descripción */}
                    <div className="space-y-4 mb-2">
                        {proyecto.descripcion.map((parrafo, index) => (
                            <p key={index} className={`${reversed ? 'text-right' : 'text-left'} text-gray-300 text-base leading-relaxed`}>
                                {parrafo}
                            </p>
                        ))}
                    </div>

                    {/* Tecnologías */}
                    <div>
                        <h3 className={`text-xl ${reversed ? 'text-right' : 'text-left'} font-semibold text-white mb-4`}>Tecnologías</h3>
                        <div className={`flex flex-wrap gap-3 ${reversed ? 'justify-end' : 'justify-start'}`}>
                            {proyecto.tecnologias.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-1 bg-transparent border border-white rounded-full text-white text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Botones */}
                    <div className={`flex gap-4 mt-6 ${reversed ? 'justify-end' : 'justify-start'}`}>
                        {proyecto.linkProyecto ? (
                            <a
                                href={proyecto.linkProyecto}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Ver Proyecto
                            </a>
                        ) : (
                            <button
                                disabled
                                className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-gray-400 rounded-lg font-medium cursor-not-allowed opacity-50"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Ver Proyecto
                            </button>
                        )}
                        
                        {proyecto.linkCodigo ? (
                            <a
                                href={proyecto.linkCodigo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-black text-white rounded-lg font-medium transition-all duration-300"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Ver Código
                            </a>
                        ) : (
                            <button
                                disabled
                                className="flex items-center gap-2 px-6 py-3 bg-transparent border border-gray-600 text-gray-400 rounded-lg font-medium cursor-not-allowed opacity-50"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Ver Código
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProyectoCard;
