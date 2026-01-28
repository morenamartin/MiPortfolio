"use client";
import { useState, useEffect, useRef } from "react";
import ColorfulIcon from "../ColorFulIcon";
import { useTranslation } from '@/hooks/useTranslation';

const Tecnologias = () => {
  const { t } = useTranslation();
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Evitar hydration mismatch - inicializar con valor por defecto
  const [widthIcon, setWidthIcon] = useState("w-24 h-24");
  const [isClient, setIsClient] = useState(false);

  // Detectar cambios de tamaño de pantalla
  useEffect(() => {
    setIsClient(true);
    
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setWidthIcon(mobile ? "w-20 h-20" : "w-24 h-24");
    };

    handleResize(); // Ejecutar al montar
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Datos de las tecnologías con años de experiencia
  const technologies = [
    { name: "react", displayName: "React", years: 1 },
    { name: "html5", displayName: "HTML5", years: 4 },
    { name: "css3", displayName: "CSS3", years: 4 },
    { name: "javascript", displayName: "JavaScript", years: 4 },
    { name: "expressjs", displayName: "Express.js", years: 1 },
    { name: "postgresql", displayName: "PostgreSQL", years: 1 },
    { name: "mongodb", displayName: "MongoDB", years: 1 },
    { name: "typescript", displayName: "TypeScript", years: 1 },
    { name: "nestjs", displayName: "NestJS", years: 1 },
    { name: "nextjs-icon", displayName: "Next.js", years: 1 },
    { name: "tailwindcss", displayName: "Tailwind CSS", years: 1 },
    { name: "vscode", displayName: "VS Code", years: 4 },
    { name: "figma", displayName: "Figma", years: 3 },
    { name: "github", displayName: "GitHub", years: 4 },
    { name: "insomnia", displayName: "Insomnia", years: 1 },
    { name: "postman", displayName: "Postman", years: 1 },
    { name: "git", displayName: "Git", years: 4 },
    { name: "blender", displayName: "Blender", years: 4 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            console.log('Usuario llegó a la sección de Tecnologías');
            setHasAnimated(true);
            
            // Orden diagonal adaptativo según el dispositivo
            const diagonalOrder = isMobile ? 
              // Grid de 3 columnas para móvil (6 filas)
              [
                0,           // diagonal 0
                1, 3,        // diagonal 1  
                2, 4, 6,     // diagonal 2
                5, 7, 9,     // diagonal 3
                8, 10, 12,   // diagonal 4
                11, 13, 15,  // diagonal 5
                14, 16,      // diagonal 6
                17           // diagonal 7
              ] :
              // Grid de 6 columnas para desktop (3 filas)
              [
                0,           // diagonal 0
                1, 6,        // diagonal 1
                2, 7, 12,    // diagonal 2
                3, 8, 13,    // diagonal 3
                4, 9, 14,    // diagonal 4
                5, 10, 15,   // diagonal 5
                11, 16,      // diagonal 6
                17           // diagonal 7
              ];
            
            // Activar el efecto de ola después de 1 segundo
            const timer = setTimeout(() => {
              console.log('Iniciando animación de ola diagonal');
              let step = 0;
              const interval = setInterval(() => {
                const iconIndex = diagonalOrder[step];
                console.log('Activando icono:', iconIndex);
                setActiveIndices(prev => [...prev, iconIndex]);
                step++;
                if (step >= diagonalOrder.length) {
                  clearInterval(interval);
                  console.log('Animación completada');
                  setTimeout(() => {
                    console.log('Desactivando en ola desde la misma esquina');
                    // Desactivar en el mismo orden diagonal (superior izquierda a inferior derecha)
                    let deactivateStep = 0;
                    const deactivateInterval = setInterval(() => {
                      const iconIndex = diagonalOrder[deactivateStep];
                      setActiveIndices(prev => prev.filter(i => i !== iconIndex));
                      deactivateStep++;
                      if (deactivateStep >= diagonalOrder.length) {
                        clearInterval(deactivateInterval);
                      }
                    }, 70);
                  }, 1400);
                }
              }, 70);
            }, 1000);
          }
        });
      },
      { threshold: 0.3 } // Se activa cuando el 30% de la sección es visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated, isMobile]); // Agregar isMobile como dependencia

  return (
    <div ref={sectionRef} className="py-8 bg-white md:py-12 dark:bg-black">
        <div className={`grid w-full gap-6 md:gap-12 px-4 md:px-0 ${
          isMobile ? 'grid-cols-3' : 'grid-cols-6'
        }`}>
          {technologies.map((tech, index) => (
            <ColorfulIcon
              key={tech.name}
              name={tech.name}
              displayName={tech.displayName}
              years={tech.years}
              className={widthIcon}
              forceActive={activeIndices.includes(index)}
              yearText={t('tecnologias.year')}
              yearsText={t('tecnologias.years')}
              experienceText={t('tecnologias.experience')}
            />
          ))}
        </div>
    </div>
  );
};

export default Tecnologias;