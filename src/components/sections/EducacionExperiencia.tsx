"use client";
import { useRef, useState, useEffect } from 'react';
import TimelineItem from './TimelineItem';
import { useTranslation } from '@/hooks/useTranslation';


const EducacionExperiencia = () => {
    const { t } = useTranslation();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Detectar tamaño de pantalla
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Crear experiencias usando traducciones
    const experienciasEducacion = [
        {
            id: 1,
            titulo: t('educacionExperiencia.item1.titulo'),
            fecha: t('educacionExperiencia.item1.fecha'),
            lugar: t('educacionExperiencia.item1.lugar'),
            descripcion: t('educacionExperiencia.item1.descripcion'),
            tecnologias: ["/icons/tinkercad.svg"],
            tipo: "educacion"
        },
        {
            id: 2,
            titulo: t('educacionExperiencia.item2.titulo'),
            fecha: t('educacionExperiencia.item2.fecha'),
            lugar: t('educacionExperiencia.item2.lugar'),
            descripcion: t('educacionExperiencia.item2.descripcion'),
            tecnologias: ["/icons/canva.svg"],
            tipo: "educacion"
        },
        {
            id: 3,
            titulo: t('educacionExperiencia.item3.titulo'),
            fecha: t('educacionExperiencia.item3.fecha'),
            lugar: t('educacionExperiencia.item3.lugar'),
            descripcion: t('educacionExperiencia.item3.descripcion'),
            tecnologias: ["/icons/blender.svg"],
            tipo: "educacion"
        },
        {
            id: 4,
            titulo: t('educacionExperiencia.item4.titulo'),
            fecha: t('educacionExperiencia.item4.fecha'),
            lugar: t('educacionExperiencia.item4.lugar'),
            descripcion: t('educacionExperiencia.item4.descripcion'),
            tecnologias: [
                "/icons/html5.svg",
                "/icons/css3.svg",
                "/icons/javascript.svg",
                "/icons/github.svg",
                "/icons/git.svg"
            ],
            tipo: "educacion"
        },
        {
            id: 5,
            titulo: t('educacionExperiencia.item5.titulo'),
            fecha: t('educacionExperiencia.item5.fecha'),
            lugar: t('educacionExperiencia.item5.lugar'),
            descripcion: t('educacionExperiencia.item5.descripcion'),
            tecnologias: [
                "/icons/html5.svg",
                "/icons/css3.svg",
                "/icons/javascript.svg",
                "/icons/react.svg",
                "/icons/typescript.svg",
                "/icons/nestjs.svg",
                "/icons/nextjs-icon.svg",
                "/icons/postgresql.svg",
                "/icons/github.svg",
                "/icons/git.svg",
                "/icons/tailwindcss.svg",
                "/icons/mongodb.svg"
            ],
            tipo: "educacion"
        },
        {
            id: 6,
            titulo: t('educacionExperiencia.item6.titulo'),
            fecha: t('educacionExperiencia.item6.fecha'),
            lugar: t('educacionExperiencia.item6.lugar'),
            descripcion: t('educacionExperiencia.item6.descripcion'),
            tecnologias: [
                "/icons/react.svg",
                "/icons/typescript.svg",
                "/icons/nestjs.svg",
                "/icons/nextjs-icon.svg",
                "/icons/postgresql.svg",
                "/icons/github.svg",
                "/icons/git.svg",
                "/icons/tailwindcss.svg",
                "/icons/supabase.svg"
            ],
            tipo: "experiencia"
        }
    ];

    const scrollToIndex = (index: number) => {
        if (!scrollContainerRef.current) return;
        
        const container = scrollContainerRef.current;
        const targetScroll = index * container.clientHeight;
        const startScroll = container.scrollTop;
        const distance = targetScroll - startScroll;
        const duration = 900; // 0.9 segundos
        let startTime: number | null = null;

        const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out cúbico - comienza rápido y desacelera suavemente
            const eased = 1 - Math.pow(1 - progress, 3);

            container.scrollTop = startScroll + distance * eased;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCurrentIndex(index);
            }
        };

        requestAnimationFrame(animate);
    };

    const handleScrollUp = () => {
        if (currentIndex > 0) {
            scrollToIndex(currentIndex - 1);
        }
    };

    const handleScrollDown = () => {
        if (currentIndex < experienciasEducacion.length - 1) {
            scrollToIndex(currentIndex + 1);
        }
    };

    const handleScroll = () => {
        if (!scrollContainerRef.current) return;
        const index = Math.round(scrollContainerRef.current.scrollTop / scrollContainerRef.current.clientHeight);
        setCurrentIndex(index);
    };

    return (
        <div className="flex items-center justify-center w-full h-full">
            {isMobile ? (
                // Layout para móvil - cada experiencia ocupa toda la pantalla
                <div className="relative flex w-full h-screen">
                    {/* Timeline line - más sutil en móvil */}
                    <div className="w-[2px] h-full bg-violet-400/30 flex-shrink-0 ml-4 absolute left-0"></div>
                    

                    {/* Scroll container */}
                    <div 
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="w-full h-screen overflow-y-scroll duration-300 snap-y snap-mandatory scroll-smooth"
                        style={{ 
                            scrollbarWidth: 'none',
                            WebkitOverflowScrolling: 'touch'
                        }}
                    >
                        {experienciasEducacion.map((experiencia) => (
                            <TimelineItem 
                                key={experiencia.id}
                                titulo={experiencia.titulo}
                                fecha={experiencia.fecha}
                                lugar={experiencia.lugar}
                                descripcion={experiencia.descripcion}
                                tecnologias={experiencia.tecnologias}
                                isMobile={true}
                            />
                        ))}
                    </div>

                    {/* Indicador de progreso */}
                    <div className="absolute z-20 flex space-x-2 transform -translate-x-1/2 bottom-20 left-1/2">
                        {experienciasEducacion.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex 
                                        ? 'bg-violet-400 scale-125' 
                                        : 'bg-gray-400/50'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                // Layout para desktop - dos columnas como antes
                <div className="grid grid-cols-[1fr_3fr] items-center gap-8 p-8 text-white w-full h-full">
                    <div></div>
                    <div className="relative flex">
                        {/* Timeline line */}
                        <div className="w-[1px] h-[80vh] bg-violet-400/30 flex-shrink-0"></div>
                        
                        {/* Botón arriba */}
                        <button
                            onClick={handleScrollUp}
                            disabled={currentIndex === 0}
                            className="absolute z-10 flex items-center justify-center w-10 h-10 transition-all -translate-x-1/2 rounded-full shadow-lg top-2 left-1/2 bg-violet-500/50 hover:bg-violet-500 disabled:bg-gray-600/30 disabled:opacity-50 backdrop-blur-sm"
                            aria-label="Anterior experiencia"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>

                        {/* Scroll container */}
                        <div 
                            ref={scrollContainerRef}
                            onScroll={handleScroll}
                            className="h-[80vh] overflow-y-scroll snap-y snap-mandatory flex-1 duration-300 scroll-smooth"
                            style={{ 
                                scrollbarWidth: 'thin',
                                scrollbarColor: '#a78bfa transparent'
                            }}
                        >
                            {experienciasEducacion.map((experiencia) => (
                                <TimelineItem 
                                    key={experiencia.id}
                                    titulo={experiencia.titulo}
                                    fecha={experiencia.fecha}
                                    lugar={experiencia.lugar}
                                    descripcion={experiencia.descripcion}
                                    tecnologias={experiencia.tecnologias}
                                    isMobile={false}
                                />
                            ))}
                        </div>

                        {/* Botón abajo */}
                        <button
                            onClick={handleScrollDown}
                            disabled={currentIndex === experienciasEducacion.length - 1}
                            className="absolute z-10 flex items-center justify-center w-10 h-10 transition-all -translate-x-1/2 rounded-full shadow-lg bottom-2 left-1/2 bg-violet-500/50 hover:bg-violet-500 disabled:bg-gray-600/30 disabled:opacity-50 backdrop-blur-sm"
                            aria-label="Siguiente experiencia"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EducacionExperiencia;