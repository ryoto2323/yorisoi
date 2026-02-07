import React, { useState, useEffect } from 'react';

interface SectionProps {
  id: number;
  isActive?: boolean;
  bgImage?: string;
  bgOverlay?: string;
  className?: string;
  mood?: 'fast' | 'slow';
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  isActive = false,
  bgImage, 
  bgOverlay = "bg-white/40",
  className = "", 
  mood = 'fast',
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

  const currentId = id.toString().padStart(2, '0');
  const totalSections = "11";

  return (
    <section 
      className={`w-full h-[100svh] snap-start snap-always relative flex-shrink-0 overflow-hidden text-navy ${className} ${isActive ? 'active' : ''}`}
      data-index={id}
    >
      {/* Background with Parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-cream">
        {bgImage && (
          <img 
            src={bgImage} 
            alt="Background" 
            style={{ 
              transform: isActive 
                ? `scale(1.1) translate(${mousePos.x}px, ${mousePos.y}px)` 
                : 'scale(1.25) translate(0, -20px)'
            }}
            className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out" 
          />
        )}
        <div className={`absolute inset-0 transition-opacity duration-[2000ms] ${isActive ? 'opacity-100' : 'opacity-0'} ${bgOverlay}`} />
      </div>

      {/* Step Indicator - Scaled Down */}
      <div className={`absolute top-4 right-4 z-30 transition-all duration-1000 delay-500 ease-spring ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <span className="text-[8px] font-black font-mono tracking-[0.3em] text-navy/40 bg-white/40 px-4 py-2 rounded-full backdrop-blur-xl border border-white/20 shadow-sm">
              <span className="text-navy">{currentId}</span> <span className="mx-0.5 opacity-20">/</span> {totalSections}
          </span>
      </div>

      {/* Content Container - Reduced internal padding */}
      <div className={`
        relative z-10 w-full h-full flex flex-col justify-evenly px-4 py-4 liquid-entrance
        ${mood === 'slow' ? 'mood-slow' : ''}
        transition-all duration-1200 ease-spring
        ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-[0.98] pointer-events-none'}
      `}>
        {children}
      </div>
    </section>
  );
};