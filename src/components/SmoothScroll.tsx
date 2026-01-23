"use client"
import { useEffect, useRef, useState } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [sectionScrollProgress, setSectionScrollProgress] = useState<{[key: number]: number}>({});
  const [lastSection, setLastSection] = useState(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll('.section');
    const sectionHeight = window.innerHeight;

    const handleWheel = (e: WheelEvent) => {
      if (isAnimating) {
        e.preventDefault();
        return;
      }

      const direction = e.deltaY > 0 ? 1 : -1;
      const currentScroll = container.scrollTop;
      const currentSection = Math.round(currentScroll / sectionHeight);
      
      // Encontrar la sección que está realmente visible
      let currentSectionElement: HTMLElement | null = null;
      let actualSectionIndex = currentSection;
      
      sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top + container.scrollTop;
        const sectionBottom = sectionTop + sectionHeight;
        const viewportCenter = container.scrollTop + (sectionHeight / 2);
        
        if (viewportCenter >= sectionTop && viewportCenter < sectionBottom) {
          currentSectionElement = section as HTMLElement;
          actualSectionIndex = index;
        }
      });
      
      if (!currentSectionElement) {
        currentSectionElement = sections[currentSection] as HTMLElement;
      }

      // Verificar si la sección actual tiene sub-scroll Y es la sección sobre-mi
      const hasSubScroll = currentSectionElement?.getAttribute('data-has-subscroll') === 'true';
      const isSobreMi = currentSectionElement?.id === 'sobre-mi';
      
      if (hasSubScroll && isSobreMi) {
        const progress = sectionScrollProgress[actualSectionIndex] || 0;
        
        // Si está en el rango 0-1, hacer el sub-scroll
        if ((direction > 0 && progress < 1) || (direction < 0 && progress > 0)) {
          e.preventDefault();
          const newProgress = direction > 0 ? 1 : 0; // Un scroll completa la animación
          
          setSectionScrollProgress(prev => ({ ...prev, [actualSectionIndex]: newProgress }));
          
          // Disparar evento personalizado para que la sección se actualice
          const event = new CustomEvent('sectionScroll', { detail: { progress: newProgress } });
          currentSectionElement.dispatchEvent(event);
          return;
        }
        
        // Si llegó al límite, permitir cambio de sección y resetear
        if (direction > 0 && progress >= 1) {
          setSectionScrollProgress(prev => ({ ...prev, [actualSectionIndex]: 0 }));
        }
      }

      const targetSection = currentSection + direction;

      // Verificar límites
      if (targetSection < 0 || targetSection >= sections.length) {
        return;
      }

      e.preventDefault();
      setIsAnimating(true);

      const targetScroll = targetSection * sectionHeight;
      const startScroll = currentScroll;
      const distance = targetScroll - startScroll;
      const duration = 1200;
      const startTime = performance.now();

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeProgress = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        container.scrollTop = startScroll + distance * easeProgress;

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          setIsAnimating(false);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isAnimating, sectionScrollProgress, lastSection]);

  return (
    <div ref={containerRef} className="container">
      {children}
    </div>
  );
}
