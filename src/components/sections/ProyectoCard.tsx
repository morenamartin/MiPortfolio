'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

interface ProyectoCardProps {
    proyecto: {
        id: number;
        nombre: string;
        descripcion: string[];
        miRol: string;
        tecnologias: string[];
        imagen: string;
        linkProyecto: string;
        linkCodigo: string;
    };
    index: number;
}

const ProyectoCard = ({ proyecto, index }: ProyectoCardProps) => {
    const { t } = useTranslation();
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const isEven = index % 2 === 0;
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div 
            ref={containerRef}
            className="flex items-center justify-center w-full min-h-screen px-6 py-24 bg-white dark:bg-black md:px-12 md:py-28"
        >
            <div className={`w-full max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start`}>
                    
                    {/* COLUMNA 1: INFORMACIÓN */}
                    <div className={`flex flex-col gap-8 ${!isEven ? 'md:order-2' : ''}`}>
                        {/* Número y línea decorativa */}
                        <div 
                            className={`flex items-center gap-4 overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
                            style={{
                                transitionDelay: isVisible ? '0.2s' : '0s',
                            }}>
                            <span className="text-6xl font-light leading-none text-gray-400 dark:text-gray-600 md:text-7xl">
                                0{index + 1}
                            </span>
                            <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                        </div>

                        {/* Título y rol */}
                        <div className={`space-y-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
                            style={{
                                transitionDelay: isVisible ? '0.3s' : '0s',
                            }}>
                            <h2 className="text-4xl font-bold leading-tight text-black dark:text-white transition-colors duration-300 md:text-5xl hover:text-purple-600 dark:hover:text-purple-400">
                                {proyecto.nombre}
                            </h2>
                            <p className="text-sm font-medium text-purple-600 dark:text-purple-400 md:text-base">
                                {proyecto.miRol}
                            </p>
                        </div>

                        {/* Descripción */}
                        <div className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
                            style={{
                                transitionDelay: isVisible ? '0.4s' : '0s',
                            }}>
                            {proyecto.descripcion.map((parrafo, idx) => (
                                <p 
                                    key={idx} 
                                    className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 transition-opacity duration-300 md:text-base opacity-90 hover:opacity-100"
                                >
                                    {parrafo}
                                </p>
                            ))}
                        </div>

                        {/* Stack de tecnologías */}
                        <div className={`space-y-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
                            style={{
                                transitionDelay: isVisible ? '0.5s' : '0s',
                            }}>
                            <p className="text-xs font-semibold tracking-widest text-gray-500 dark:text-gray-500 uppercase">{t('proyectos.stackTitle')}</p>
                            <div className="flex flex-wrap gap-2">
                                {proyecto.tecnologias.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 text-xs bg-gradient-to-r from-black/10 dark:from-white/10 to-transparent border border-black/30 dark:border-white/30 rounded-md text-gray-700 dark:text-gray-300 hover:border-black/60 dark:hover:border-white/60 hover:bg-black/20 dark:hover:bg-white/20 transition-all duration-300 whitespace-nowrap"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* COLUMNA 2: IMAGEN + BOTONES */}
                    <div className={`flex flex-col gap-6 pt-8 md:pt-12 ${!isEven ? 'md:order-1' : ''}`}>
                        {/* Imagen */}
                        <div 
                            className={`relative w-full h-64 md:h-96 overflow-hidden rounded-xl transition-all duration-700 ${isHovered ? 'scale-105' : 'scale-100'} group ${isVisible ? 'animate-scale-in' : ''}`}
                            style={{
                                animationDelay: isVisible ? '0.1s' : '0s',
                            }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}>
                            <Image
                                src={proyecto.imagen}
                                alt={proyecto.nombre}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                            <div className={`absolute inset-0 bg-black/40 transition-opacity duration-700 group-hover:bg-black/0`}></div>
                            <div className={`absolute inset-0 bg-gradient-to-br from-white/0 via-transparent to-purple-700/0 transition-opacity duration-700 ${isHovered ? 'opacity-20' : 'opacity-0'}`}></div>
                        </div>

                        {/* Botones debajo de la imagen */}
                        <div className={`flex flex-wrap gap-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                            style={{
                                transitionDelay: isVisible ? '0.6s' : '0s',
                            }}>
                            {proyecto.linkProyecto ? (
                                <a
                                    href={proyecto.linkProyecto}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2.5 text-sm font-medium text-white dark:text-black bg-gradient-to-r from-black dark:from-white to-gray-800 dark:to-gray-100 rounded-lg hover:from-gray-800 dark:hover:from-gray-100 hover:to-gray-700 dark:hover:to-gray-200 transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-gray-500/20 hover:shadow-black/20 dark:hover:shadow-white/20 hover:-translate-y-0.5"
                                >
                                    <span>{t('proyectos.visitProject')}</span>
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                            ) : (
                                <button disabled className="px-6 py-2.5 text-sm font-medium text-gray-500 bg-gray-300 dark:bg-gray-800 rounded-lg cursor-not-allowed opacity-50">
                                    {t('proyectos.privateProject')}
                                </button>
                            )}
                            {proyecto.linkCodigo && (
                                <a
                                    href={proyecto.linkCodigo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2.5 text-sm font-medium text-black dark:text-white border border-black/50 dark:border-white-500/50 rounded-lg hover:bg-purple-500/10 hover:border-purple-600 dark:hover:border-purple-400 transition-all duration-300 flex items-center gap-2 group hover:-translate-y-0.5"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <span>{t('proyectos.viewCode')}</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProyectoCard;