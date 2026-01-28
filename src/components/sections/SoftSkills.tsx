"use client"
import { useState, useEffect } from "react";
import { useTranslation } from '@/hooks/useTranslation';
import { useTheme } from '@/context/ThemeContext';

const SoftSkills = () => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const [phase, setPhase] = useState<'inicial' | 'expansion' | 'rectangulos'>('inicial');
    const [hasStarted, setHasStarted] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [particles, setParticles] = useState<{id: number, x: number, y: number, size: number}[]>([]);
    const [innerParticles, setInnerParticles] = useState<{[key: number]: {id: number, x: number, y: number, size: number}[]}>({});
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    useEffect(() => {
        const section = document.getElementById('habilidades');
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasStarted) {
                        setHasStarted(true);
                        startSequence();
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        const section = document.getElementById('habilidades');
        if (!section) return;

        let particleId = 0;
        const handleMouseMove = (e: MouseEvent) => {
            const rect = section.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Crear partículas con pequeña variación aleatoria
            const particleCount = 3;
            for (let i = 0; i < particleCount; i++) {
                const offsetX = (Math.random() - 0.5) * 10; // Variación aleatoria pequeña
                const offsetY = (Math.random() - 0.5) * 10;
                
                setTimeout(() => {
                    const newParticle = { 
                        id: particleId++, 
                        x: x + offsetX, 
                        y: y + offsetY,
                        size: 3 + Math.random() * 4 // Tamaño aleatorio 3-7px
                    };
                    setParticles(prev => [...prev, newParticle]);
                    
                    // Eliminar partícula después de 0.8 segundos
                    setTimeout(() => {
                        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
                    }, 800);
                }, i * 50); // Delay entre cada partícula (50ms)
            }
        };

        section.addEventListener('mousemove', handleMouseMove);
        return () => section.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const startSequence = async () => {
        // Mostrar título
        setShowTitle(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Ocultar título
        setShowTitle(false);
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Expansión hacia posiciones finales
        setPhase('expansion');
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Transformar a rectángulos
        setPhase('rectangulos');
    };

    const handleSkillHover = (index: number) => {
        if (phase !== 'rectangulos') return;
        
        // Generar partículas dentro del rectángulo
        const newParticles: {id: number, x: number, y: number, size: number}[] = [];
        const particleCount = 15;
        for (let i = 0; i < particleCount; i++) {
            const x = 10 + Math.random() * 80; // 10%-90% (padding de 10%)
            const y = 20 + Math.random() * 60; // 20%-80% (padding de 20%)
            newParticles.push({
                id: Date.now() + i,
                x,
                y,
                size: 2 + Math.random() * 3
            });
        }
        
        setInnerParticles(prev => ({
            ...prev,
            [index]: newParticles
        }));
        
        // Limpiar partículas después de 0.8s
        setTimeout(() => {
            setInnerParticles(prev => {
                const updated = { ...prev };
                delete updated[index];
                return updated;
            });
        }, 800);
    };

    const skills = [
        { left: 35, top: 25, label: t<string>('softSkills.teamwork') },
        { left: 65, top: 25, label: t<string>('softSkills.communication') },
        { left: 25, top: 50, label: t<string>('softSkills.timeManagement') },
        { left: 50, top: 50, label: t<string>('softSkills.resultOriented') },
        { left: 75, top: 50, label: t<string>('softSkills.adaptability') },
        { left: 35, top: 75, label: t<string>('softSkills.organization') },
        { left: 65, top: 75, label: t<string>('softSkills.continuousLearning') }
    ];

    const getItemStyle = (index: number): React.CSSProperties => {
        const skill = skills[index];

        if (phase === 'inicial') {
            // Todos pequeños en el centro
            return {
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%) scale(0)',
                opacity: 0,
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                transition: 'none'
            };
        } else if (phase === 'expansion') {
            // Se expanden y mueven a posiciones finales
            if (isMobile) {
                // En móvil, mantenerlos en el centro durante la expansión
                return {
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%) scale(1)',
                    opacity: 1,
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    transitionProperty: 'all',
                    transitionDuration: '1.2s',
                    transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transitionDelay: `${index * 0.1}s`
                };
            } else {
                return {
                    left: `${skill.left}%`,
                    top: `${skill.top}%`,
                    transform: 'translate(-50%, -50%) scale(1)',
                    opacity: 1,
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    transitionProperty: 'all',
                    transitionDuration: '1.2s',
                    transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transitionDelay: `${index * 0.1}s`
                };
            }
        } else {
            // Se transforman en rectángulos con delay escalonado
            if (isMobile) {
                // En móvil, disposición en columna ocupando todo el ancho
                const topPosition = 15 + (index * 10); // Espaciado vertical más compacto
                return {
                    left: '50%',
                    top: `${topPosition}%`,
                    transform: 'translate(-50%, -50%) scale(1)',
                    opacity: 1,
                    width: '85%',
                    height: '50px',
                    borderRadius: '25px',
                    transitionProperty: 'all',
                    transitionDuration: '0.8s',
                    transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
                    transitionDelay: `${index * 0.08}s`
                };
            } else {
                return {
                    left: `${skill.left}%`,
                    top: `${skill.top}%`,
                    transform: 'translate(-50%, -50%) scale(1)',
                    opacity: 1,
                    width: '200px',
                    height: '80px',
                    borderRadius: '40px',
                    transitionProperty: 'all',
                    transitionDuration: '0.8s',
                    transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
                    transitionDelay: `${index * 0.08}s`
                };
            }
        }
    };
         
    return (
        <section className="relative flex items-center justify-center bg-white dark:bg-black section">
            {/* Partículas del mouse */}
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className="particle"
                    style={{
                        position: 'absolute',
                        left: `${particle.x}px`,
                        top: `${particle.y}px`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        borderRadius: '50%',
                        backgroundColor: theme === 'dark' ? 'white' : 'black',
                        boxShadow: theme === 'dark' ? '0 0 10px rgba(255, 255, 255, 0.8)' : '0 0 10px rgba(0, 0, 0, 0.8)',
                        pointerEvents: 'none',
                        animation: 'particleFade 0.8s ease-out forwards'
                    }}
                />
            ))}

            {/* Título animado */}
            {showTitle && (
                <h2 
                    className={` ${isMobile ? 'text-center' : ''} absolute font-mono font-bold text-black dark:text-white`}
                    style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: 'none',
                        zIndex: 10,
                        animation: 'titleScale 2s ease-in-out forwards'
                    }}
                >
                    {t('softSkills.title')}
                </h2>
            )}

            {skills.map((skill, index) => (
                <div 
                    key={index}
                    className="absolute flex items-center justify-center overflow-hidden border-2 border-black dark:border-white"
                    style={getItemStyle(index)}
                    onMouseEnter={() => handleSkillHover(index)}
                >
                    {/* Partículas internas */}
                    {innerParticles[index]?.map(particle => (
                        <div
                            key={particle.id}
                            style={{
                                position: 'absolute',
                                left: `${particle.x}%`,
                                top: `${particle.y}%`,
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                                borderRadius: '50%',
                                backgroundColor: theme === 'dark' ? 'white' : 'black',
                                boxShadow: theme === 'dark' ? '0 0 8px rgba(255, 255, 255, 0.8)' : '0 0 8px rgba(0, 0, 0, 0.8)',
                                pointerEvents: 'none',
                                animation: 'particleFade 2.5s ease-out forwards'
                            }}
                        />
                    ))}
                    
                    {phase === 'rectangulos' && (
                        <span 
                            className={`${isMobile ? 'px-2 text-xs' : 'px-4'} font-mono font-semibold text-center text-black dark:text-white`}
                            style={{
                                animation: `fadeInSlide 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                                animationDelay: `${0.6 + index * 0.08}s`,
                                opacity: 0,
                                transform: 'scale(0.8)',
                                userSelect: 'none',
                                cursor: 'default'
                            }}
                        >
                            {skill.label}
                        </span>
                    )}
                </div>
            ))}
            <style jsx>{`
                @keyframes particleFade {
                    0% {
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(1);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(-50%, -50%) scale(0.2);
                    }
                }
                
                @keyframes titleScale {
                    0% {
                        opacity: 0;
                        transform: translate(-50%, -50%) scale(0.8);
                    }
                    50% {
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(1.1);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(-50%, -50%) scale(1);
                    }
                }
                
                @keyframes fadeInSlide {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            `}</style>
        </section>
    );
};

export default SoftSkills;