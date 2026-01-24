"use client"
import { Code } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from '@/hooks/useTranslation';

const SobreMi = () => {
    const { t } = useTranslation();
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = (e: Event) => {
            const customEvent = e as CustomEvent;
            setScrollProgress(customEvent.detail.progress);
        };

        // Buscar la section padre
        const section = document.querySelector('section[data-has-subscroll="true"]#sobre-mi');
        if (!section) return;

        section.addEventListener('sectionScroll', handleScroll);
        return () => section.removeEventListener('sectionScroll', handleScroll);
    }, []);

    // Agregar estilos de animación
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
            document.head.removeChild(style);
        };
    }, []);

    // Calcular transformaciones basadas en el progreso (0 = inicial, 1 = completamente scrolleado)
    const imageScale = 1 - (scrollProgress * 0.6); // De 1 a 0.5
    const imageTranslateY = -(scrollProgress * 210); // Sube hasta 250px
    const textOpacity = scrollProgress; // De 0 a 1
    const textTranslateY = 100 - (scrollProgress * 280); // De 100px a 0

    return (
        <div className="relative flex flex-col items-center justify-center w-full h-full px-20">
            <div 
                className="transition-transform rounded-full shadow-lg w-80 h-80"
                style={{
                    transform: `translateY(${imageTranslateY}px) scale(${imageScale})`,
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
                    style={{
                        imageRendering: 'auto',
                        WebkitFontSmoothing: 'antialiased'
                    }}
                />
            </div>
            
            <div 
                className="absolute grid items-center grid-cols-2 gap-8 px-16 text-black dark:text-white top-96"
                style={{
                    opacity: textOpacity,
                    transform: `translateY(${textTranslateY}px)`,
                    transition: 'opacity 0.9s ease-out, transform 0.9s ease-out'
                }}
            >
                <div className="px-6">
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
                
                <div className="px-6">
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