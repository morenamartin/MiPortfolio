"use client";
import { useRef, useState } from 'react';
import TimelineItem from './TimelineItem';
import { useTranslation } from '@/hooks/useTranslation';

const EducacionExperiencia = () => {
    const { t } = useTranslation();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Crear experiencias usando traducciones
    const experienciasEducacion = [
        {
            id: 1,
            titulo: t('educacionExperiencia.item1.titulo'),
            fecha: t('educacionExperiencia.item1.fecha'),
            lugar: t('educacionExperiencia.item1.lugar'),
            descripcion: t('educacionExperiencia.item1.descripcion'),
            tecnologias: ["/icons/tinkercad.svg"]
        },
        {
            id: 2,
            titulo: t('educacionExperiencia.item2.titulo'),
            fecha: t('educacionExperiencia.item2.fecha'),
            lugar: t('educacionExperiencia.item2.lugar'),
            descripcion: t('educacionExperiencia.item2.descripcion'),
            tecnologias: ["/icons/canva.svg"]
        },
        {
            id: 3,
            titulo: t('educacionExperiencia.item3.titulo'),
            fecha: t('educacionExperiencia.item3.fecha'),
            lugar: t('educacionExperiencia.item3.lugar'),
            descripcion: t('educacionExperiencia.item3.descripcion'),
            tecnologias: ["/icons/blender.svg"]
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
            ]
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
            ]
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
            ]
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
        <div className="grid grid-cols-[1fr_2fr] items-center gap-8 p-8 text-white">
            <div>
                <p className="text-xl">
                    particulas y lineas
                </p>
            </div>


            <div className="flex relative">
                {/* Timeline line */}
                <div className="w-[1px] h-[80vh] bg-violet-400/30 flex-shrink-0"></div>
                
                {/* Botón arriba */}
                <button
                    onClick={handleScrollUp}
                    disabled={currentIndex === 0}
                    className="absolute top-2 left-1/2 -translate-x-1/2 z-10 w-10 h-10 bg-violet-500/50 hover:bg-violet-500 disabled:bg-gray-600/30 disabled:opacity-50 backdrop-blur-sm rounded-full flex items-center justify-center transition-all shadow-lg"
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
                        />
                    ))}
                </div>

                {/* Botón abajo */}
                <button
                    onClick={handleScrollDown}
                    disabled={currentIndex === experienciasEducacion.length - 1}
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 w-10 h-10 bg-violet-500/50 hover:bg-violet-500 disabled:bg-gray-600/30 disabled:opacity-50 backdrop-blur-sm rounded-full flex items-center justify-center transition-all shadow-lg"
                    aria-label="Siguiente experiencia"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default EducacionExperiencia;