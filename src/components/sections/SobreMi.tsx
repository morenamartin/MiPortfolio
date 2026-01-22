"use client"
import { Code } from "lucide-react";
import { useState, useEffect } from "react";

const SobreMi = () => {
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
    const imageTranslateY = -(scrollProgress * 180); // Sube hasta 250px
    const textOpacity = scrollProgress; // De 0 a 1
    const textTranslateY = 100 - (scrollProgress * 260); // De 100px a 0

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
                className="absolute grid items-center grid-cols-2 gap-8 px-16 text-white top-96"
                style={{
                    opacity: textOpacity,
                    transform: `translateY(${textTranslateY}px)`,
                    transition: 'opacity 0.9s ease-out, transform 0.9s ease-out'
                }}
            >
                <div className="px-6">
                    <p className="text-base leading-relaxed text-left">
                       Full Stack Web Developer con foco en frontend y experiencia práctica en proyectos reales y pasantías intensivas. Formada en Henry, con base sólida en desarrollo web moderno y metodologías ágiles. 
                    </p>
                    <br />
                    <p className="text-base leading-relaxed text-left">
                       Trabajo con React, TypeScript, Next.js y Tailwind CSS, integrando APIs REST y colaborando con backends en Node.js, Express y bases de datos SQL. Tengo experiencia en resolución de bugs, mejoras de funcionalidades y desarrollo de interfaces enfocadas en la usabilidad y la mantenibilidad del código.
                    </p>
                    <br />
                    <p className="text-base leading-relaxed text-left">
                        Uso IA como apoyo al desarrollo, validando las soluciones con criterio técnico.Me destaco por mi organización, aprendizaje continuo, comunicación efectiva y adaptación a entornos dinámicos, buscando seguir creciendo en equipos donde pueda aportar valor y profundizar mis habilidades técnicas.
                    </p>
                </div>
                
                <div className="px-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-violet-600">
                            <Code width={22} height={22}></Code>
                        </div>
                        <span className="text-lg font-semibold">Desarrollo Full Stack</span>
                    </div>
                    <p className="text-base leading-relaxed text-left">
                       Experiencia en desarrollo de aplicaciones web completas, trabajando tanto en frontend como en backend. Construyo soluciones funcionales y escalables integrando interfaces, lógica de negocio, APIs y bases de datos.
                    </p>
                    <br />
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-violet-600">
                            <Code width={22} height={22}></Code>
                        </div>
                        <span className="text-lg font-semibold">Arquitectura y Resolución de Problemas</span>
                    </div>
                    <p className="text-base leading-relaxed text-left">
                       Enfoque en entender el problema completo, proponer soluciones claras y mantener un código ordenado, mantenible y alineado a buenas prácticas.
                    </p>
                    <br />
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-violet-600">
                            <Code width={22} height={22}></Code>
                        </div>
                        <span className="text-lg font-semibold">Aprendizaje Continuo</span>
                    </div>
                    <p className="text-base leading-relaxed text-left">
                       Siempre explorando nuevas tecnologías, herramientas y metodologías para mantenerme al día con las últimas tendencias del desarrollo web y mejorar la calidad de las soluciones que construyo.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SobreMi;