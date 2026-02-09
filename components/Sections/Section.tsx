
import React, { useState, useEffect } from 'react';

interface SectionProps {
  id: number;
  isActive?: boolean;
  bgImage?: string;
  bgOverlay?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  isActive = false,
  bgImage, 
  bgOverlay = "bg-white/40",
  className = "", 
  children 
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isActive) return;
    const handleMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [isActive]);

  const totalSections = 11;
  const progressHeight = (id / totalSections) * 100;

  return (
    <section 
      className={`w-full min-h-[100dvh] relative flex flex-col text-navy flex-shrink-0 overflow-hidden ${className}`}
      data-index={id}
    >
      {/* Background with Parallax - Spans Full Width */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-cream">
        {bgImage && (
          <img 
            src={bgImage} 
            alt="Background" 
            style={{ 
              transform: isActive 
                ? `scale(1.1) translate(${mousePos.x}px, ${mousePos.y}px)` 
                : 'scale(1.1) translate(0, 0)'
            }}
            className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out" 
          />
        )}
        {/* Background Overlay */}
        <div className={`absolute inset-0 transition-opacity duration-[2000ms] ${bgOverlay}`} />
      </div>

      {/* --- REFINED STORY GAUGE (Vertical) --- */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-3 pointer-events-none">
          <div className="text-[8px] font-mono font-black text-navy/20 rotate-90 mb-4 tracking-[0.3em]">PROGRESS</div>
          <div className="relative w-[2px] h-32 bg-navy/5 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 w-full bg-orange transition-all duration-[1200ms] ease-spring origin-top"
                style={{ height: isActive ? `${progressHeight}%` : '0%' }}
              />
          </div>
          <div className="flex flex-col items-center mt-2">
              <span className="text-[12px] font-mono font-black text-navy">{id.toString().padStart(2, '0')}</span>
              <div className="w-1 h-1 rounded-full bg-navy/10 my-1"></div>
              <span className="text-[8px] font-mono font-bold text-navy/20">{totalSections}</span>
          </div>
      </div>

      {/* Content Container - Expanded for PC */}
      <div 
        className={`
          relative z-10 w-full flex-1 flex flex-col px-4
          md:px-12 md:max-w-6xl md:mx-auto
        `}
        style={{ 
          paddingTop: 'calc(4rem + env(safe-area-inset-top))', 
          paddingBottom: 'calc(4rem + env(safe-area-inset-bottom))' 
        }}
      >
        {children}
      </div>
    </section>
  );
};
