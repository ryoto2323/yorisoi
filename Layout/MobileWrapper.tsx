import React from 'react';

interface MobileWrapperProps {
  children: React.ReactNode;
  activeSection: number;
}

export const MobileWrapper: React.FC<MobileWrapperProps> = ({ children, activeSection }) => {
  // Direction #3: Dynamic Ambient Lighting
  const getThemeColors = () => {
    if (activeSection <= 3) return { 
      c1: 'bg-orange/40', 
      c2: 'bg-sky/50', 
      blur: 'blur-[100px]' 
    };
    if (activeSection <= 6) return { 
      c1: 'bg-blue/40', 
      c2: 'bg-yellow/30', 
      blur: 'blur-[140px]' 
    };
    if (activeSection <= 8) return { 
      c1: 'bg-brandRed/30', 
      c2: 'bg-orange/40', 
      blur: 'blur-[120px]' 
    };
    return { 
      c1: 'bg-indigo-900/60', 
      c2: 'bg-blue/30', 
      blur: 'blur-[160px]' 
    };
  };

  const { c1, c2, blur } = getThemeColors();

  return (
    <div className="relative w-full min-h-screen bg-navy lg:bg-[#f5f5f5] flex items-center justify-center overflow-hidden font-sans transition-colors duration-500">
      
      {/* Dynamic Ambient Ambience - Hidden on PC (1024px+) to keep background clean as requested */}
      <div className={`absolute inset-0 z-0 opacity-60 pointer-events-none hidden md:block lg:hidden transition-all duration-[2000ms] ${blur}`}>
        <div className={`absolute top-[-20%] left-[-20%] w-[80%] h-[80%] ${c1} rounded-full mix-blend-screen transition-all duration-[3000ms] ambient-blur`} />
        <div className={`absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] ${c2} rounded-full mix-blend-screen transition-all duration-[3000ms] ambient-blur`} style={{ animationDelay: '-8s' }} />
      </div>

      {/* Mobile Frame Container */}
      <div className="
        relative z-10 
        w-full h-[100dvh] 
        md:w-[420px] md:h-[92vh] md:max-h-[920px] 
        md:rounded-[3.5rem] md:border-[12px] md:border-white/10 md:backdrop-blur-3xl
        md:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.7)]
        lg:max-w-[430px] lg:w-[430px] lg:h-screen lg:max-h-none lg:rounded-none lg:border-0 lg:mx-auto lg:shadow-[0_0_50px_rgba(0,0,0,0.1)]
        lg:pc-scale-container lg:pc-scrollbar
        md:overflow-hidden lg:overflow-y-auto lg:overflow-x-hidden overflow-y-auto bg-cream text-navy transition-all duration-500
      ">
        {/* Direction #4: Film Noise Overlay */}
        <div className="bg-noise" />

        {/* Dynamic Island Style Notch - Only visible in mobile/tablet frames, hidden on full-height PC view */}
        <div className="hidden md:block lg:hidden absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[36px] bg-black rounded-b-3xl z-[100] pointer-events-none shadow-lg"></div>
        
        {children}
      </div>
    </div>
  );
};