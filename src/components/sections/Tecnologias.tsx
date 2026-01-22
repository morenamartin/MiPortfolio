"use client";
import { useState, useEffect, useRef } from "react";
import ColorfulIcon from "../ColorFulIcon";

const Tecnologias = () => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const widthIcon = "w-24 h-24";

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
    { name: "blender", displayName: "Blender", years: 4 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            console.log('Usuario llegó a la sección de Tecnologías');
            setHasAnimated(true);
            
            // Orden diagonal: superior izquierda a inferior derecha
            // Grid de 6 columnas, 18 iconos total (3 filas)
            const diagonalOrder = [
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
  }, [hasAnimated]);

  return (
    <div ref={sectionRef} className="py-12 bg-black">
        <div className="grid grid-cols-6 w-full gap-12">
          {technologies.map((tech, index) => (
            <ColorfulIcon
              key={tech.name}
              name={tech.name}
              displayName={tech.displayName}
              years={tech.years}
              className={widthIcon}
              forceActive={activeIndices.includes(index)}
            />
          ))}
        </div>
    </div>
  );
};

export default Tecnologias;