"use client"
import { Code } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from '@/hooks/useTranslation';

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

const SobreMi = () => {
    const { t } = useTranslation();
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const rafRef = useRef<number | null>(null);

    // detectar mobile/responsive
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // --- desktop: escuchar evento 'sectionScroll' solo si NO es móvil (mantener comportamiento actual) ---
    useEffect(() => {
        if (isMobile) return;
        const handleScroll = (e: Event) => {
            const customEvent = e as CustomEvent;
            setScrollProgress(customEvent.detail.progress);
        };

        // Buscar la section padre
        const section = document.querySelector('section[data-has-subscroll="true"]#sobre-mi');
        if (!section) return;

        section.addEventListener('sectionScroll', handleScroll);
        return () => section.removeEventListener('sectionScroll', handleScroll);
    }, [isMobile]);

    // --- mobile: calcular progreso nativo y animaciones ---
    useEffect(() => {
        if (!isMobile) return;
        const el = sectionRef.current;
        if (!el) return;

        const calcProgress = () => {
            const rect = el.getBoundingClientRect();
            const vh = window.innerHeight || 1;
            // total rango para animar: viewport + parte de la sección (permitir espacio)
            const total = vh + rect.height * 0.6;
            const scrolled = vh - rect.top;
            const p = clamp(scrolled / total, 0, 1);
            setScrollProgress(p);
        };

        const onScroll = () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(calcProgress);
        };

        // inicializar
        calcProgress();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [isMobile]);

    // estilos/keyframes compartidos (mantener efecto visual)
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse-glow {
                0%, 100% {
                    box-shadow: 
                        0 0 20px rgba(139, 92, 246, 0.6),
                        0 0 40px rgba(139, 92, 246, 0.4),
                        0 0 60px rgba(139, 92, 246, 0.3),
                        0 0 80px rgba(139, 92, 246, 0.2);
                }
                50% {
                    box-shadow: 
                        0 0 30px rgba(139, 92, 246, 0.8),
                        0 0 60px rgba(139, 92, 246, 0.6),
                        0 0 90px rgba(139, 92, 246, 0.4),
                        0 0 120px rgba(139, 92, 246, 0.3);
                }
            }
        `;
        document.head.appendChild(style);
        return () => {
            if (style.parentNode) {
                style.parentNode.removeChild(style);
            }
        };
    }, []);

    // transformaciones (valores pensados para que no salgan de la sección)
    // Para mobile: imagen comienza debajo (aparece), luego sube y se achica.
    const imageScale = 1 - (scrollProgress * 0.5); // reduce hasta ~0.5
    // imageTranslateY ahora parte en +120px (baja) y termina en -100px (sube), asegurando padding-top suficiente en la sección
    const imageTranslateY = Math.round(120 - scrollProgress * 220);
    // texto aparece luego de que la imagen se movió un poco
    const textOpacity = clamp((scrollProgress - 0.25) / 0.75, 0, 1);
    const textTranslateY = 60 - (scrollProgress * 140);

    // RENDER: móvil y desktop (desktop mantiene layout/posicionamiento previo)
    if (isMobile) {
        // mobile layout: sección más alta para evitar solapamientos y que la animación quepa
        return (
            <div ref={sectionRef} id="sobre-mi" className="relative flex flex-col items-center w-full px-4 py-8 min-h-[140vh] pt-[140px] bg-transparent">
                <div 
                    className="w-48 h-48 transition-transform rounded-full shadow-lg sm:w-60 sm:h-60"
                    style={{
                        transform: `translateY(${imageTranslateY}px) scale(${imageScale})`,
                        transition: 'transform 0.18s linear',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        willChange: 'transform',
                        boxShadow: `
                            0 0 20px rgba(139, 92, 246, 0.6),
                            0 0 40px rgba(139, 92, 246, 0.4),
                            0 0 60px rgba(139, 92, 246, 0.3)
                        `,
                        animation: 'pulse-glow 2s ease-in-out infinite'
                    }}
                >
                    <img 
                        src="/foto-perfil.jpeg" 
                        alt="Sobre mí" 
                        className="object-cover w-full h-full rounded-full"
                        style={{ imageRendering: 'auto', WebkitFontSmoothing: 'antialiased' }}
                    />
                </div>

                <div 
                    className="w-full max-w-xl px-2 mt-8"
                    style={{
                        opacity: textOpacity,
                        transform: `translateY(${textTranslateY}px)`,
                        transition: 'opacity 0.25s linear, transform 0.25s linear'
                    }}
                >
                    <p className="mb-4 text-base leading-relaxed text-left">
                        {t('sobreMi.paragraph1')}
                    </p>
                    <p className="mb-4 text-base leading-relaxed text-left">
                        {t('sobreMi.paragraph2')}
                    </p>
                    <p className="mb-4 text-base leading-relaxed text-left">
                        {t('sobreMi.paragraph3')}
                    </p>

                    <div className="grid grid-cols-1 gap-4 mt-4">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-purple-600 rounded-lg dark:bg-purple-500">
                                <Code width={20} height={20} className="text-white" />
                            </div>
                            <div>
                                <div className="text-lg font-semibold text-black dark:text-white">{t('sobreMi.skill1Title')}</div>
                                <p className="text-sm text-gray-700 dark:text-gray-300">{t('sobreMi.skill1Description')}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-purple-600 rounded-lg dark:bg-purple-500">
                                <Code width={20} height={20} className="text-white" />
                            </div>
                            <div>
                                <div className="text-lg font-semibold text-black dark:text-white">{t('sobreMi.skill2Title')}</div>
                                <p className="text-sm text-gray-700 dark:text-gray-300">{t('sobreMi.skill2Description')}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-purple-600 rounded-lg dark:bg-purple-500">
                                <Code width={20} height={20} className="text-white" />
                            </div>
                            <div>
                                <div className="text-lg font-semibold text-black dark:text-white">{t('sobreMi.skill3Title')}</div>
                                <p className="text-sm text-gray-700 dark:text-gray-300">{t('sobreMi.skill3Description')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // desktop: mantener interfaz anterior (overlay, animación mediante evento sectionScroll)
    return (
        <div className="relative flex flex-col items-center justify-center w-full h-full px-4 sm:px-8 md:px-12 lg:px-20">
            <div 
                className="transition-transform rounded-full shadow-lg w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80"
                style={{
                    transform: `translateY(${-(scrollProgress * 190)}px) scale(${1 - (scrollProgress * 0.5)})`,
                    transition: 'transform 0.9s ease-out',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    willChange: 'transform',
                    boxShadow: `
                        0 0 20px rgba(139, 92, 246, 0.6),
                        0 0 40px rgba(139, 92, 246, 0.4),
                        0 0 60px rgba(139, 92, 246, 0.3),
                        0 0 80px rgba(139, 92, 246, 0.2)
                    `,
                    animation: 'pulse-glow 2s ease-in-out infinite'
                }}
            >
                <img 
                    src="/foto-perfil.jpeg" 
                    alt="Sobre mí" 
                    className="object-cover w-full h-full rounded-full"
                    style={{ imageRendering: 'auto', WebkitFontSmoothing: 'antialiased' }}
                />
            </div>
            
            <div 
                className="absolute grid w-full max-w-full grid-cols-1 gap-4 text-black md:grid-cols-2 md:gap-8 sm:px-8 md:px-16 dark:text-white top-72 sm:top-80 md:top-96"
                style={{
                    opacity: scrollProgress,
                    transform: `translateY(${80 - (scrollProgress * 220)}px)`,
                    transition: 'opacity 0.9s ease-out, transform 0.9s ease-out'
                }}
            >
                <div className="px-2">
                    <p className="text-base leading-relaxed text-left">
                       {t('sobreMi.paragraph1')}
                    </p>
                    <br />
                    <p className="text-base leading-relaxed text-left">
                       {t('sobreMi.paragraph2')}
                    </p>
                    <br />
                    <p className="text-base leading-relaxed text-left">
                        {t('sobreMi.paragraph3')}
                    </p>
                </div>
                
                <div className="px-2">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-purple-600 rounded-lg dark:bg-purple-500">
                            <Code width={22} height={22} className="text-white"></Code>
                        </div>
                        <span className="text-lg font-semibold text-black dark:text-white">{t('sobreMi.skill1Title')}</span>
                    </div>
                    <p className="text-base leading-relaxed text-left">
                       {t('sobreMi.skill1Description')}
                    </p>
                    <br />
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-purple-600 rounded-lg dark:bg-purple-500">
                            <Code width={22} height={22} className="text-white"></Code>
                        </div>
                        <span className="text-lg font-semibold text-black dark:text-white">{t('sobreMi.skill2Title')}</span>
                    </div>
                    <p className="text-base leading-relaxed text-left">
                       {t('sobreMi.skill2Description')}
                    </p>
                    <br />
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-purple-600 rounded-lg dark:bg-purple-500">
                            <Code width={22} height={22} className="text-white"></Code>
                        </div>
                        <span className="text-lg font-semibold text-black dark:text-white">{t('sobreMi.skill3Title')}</span>
                    </div>
                    <p className="text-base leading-relaxed text-left">
                       {t('sobreMi.skill3Description')}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SobreMi;