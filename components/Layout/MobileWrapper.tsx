
import React from 'react';

interface MobileWrapperProps {
  children: React.ReactNode;
  activeSection: number;
}

export const MobileWrapper: React.FC<MobileWrapperProps> = ({ children, activeSection }) => {
  const getThemeColors = () => {
    // 0-3: Intro (Morning Light) - Fresh & Hopeful
    if (activeSection <= 3) return { 
      c1: 'bg-orange/30', 
      c2: 'bg-blue/20', 
      blur: 'blur-3xl md:blur-[80px]', // Reduced blur on mobile for performance
      opacity: 'opacity-80'
    };
    // 4-6: Work & Reality (Daytime) - Active & Vivid
    if (activeSection <= 6) return { 
      c1: 'bg-blue/30', 
      c2: 'bg-yellow/20', 
      blur: 'blur-[60px] md:blur-[100px]',
      opacity: 'opacity-70'
    };
    // 7-9: Growth & Future (Sunset/Dusk) - Emotional & Warm
    if (activeSection <= 9) return { 
      c1: 'bg-red-500/20', 
      c2: 'bg-orange/30', 
      blur: 'blur-[70px] md:blur-[120px]',
      opacity: 'opacity-90'
    };
    // 10-11: Action (Deep Night/Dawn) - Serious & Premium
    return { 
      c1: 'bg-indigo-600/40', 
      c2: 'bg-purple-500/30', 
      blur: 'blur-[80px] md:blur-[140px]',
      opacity: 'opacity-100'
    };
  };

  const { c1, c2, blur, opacity } = getThemeColors();

  return (
    <div className="relative w-full h-[100dvh] bg-[#0F172A] flex items-center justify-center overflow-hidden font-sans transition-colors duration-1000">
      
      {/* Dynamic Ambient Ambience (Enhanced) */}
      <div className={`absolute inset-0 z-0 pointer-events-none transition-all duration-[2000ms] ease-in-out ${blur} ${opacity} will-change-[filter,opacity]`}>
        {/* Orb 1: Top Left */}
        <div 
          className={`absolute top-[-20%] left-[-20%] w-[90%] h-[90%] ${c1} rounded-full mix-blend-screen transition-all duration-[3000ms] animate-[drift_20s_infinite_alternate] will-change-transform`} 
        />
        {/* Orb 2: Bottom Right */}
        <div 
          className={`absolute bottom-[-20%] right-[-20%] w-[90%] h-[90%] ${c2} rounded-full mix-blend-screen transition-all duration-[3000ms] animate-[drift_25s_infinite_alternate-reverse] will-change-transform`} 
        />
        {/* Orb 3: Center Accent (Subtle) */}
        <div 
          className={`absolute top-[30%] left-[20%] w-[60%] h-[60%] bg-white/5 rounded-full mix-blend-overlay filter blur-[50px] animate-pulse will-change-transform`} 
          style={{ animationDuration: '8s' }}
        />
      </div>

      <style>{`
        @keyframes drift {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(30px, 50px) rotate(5deg); }
        }
      `}</style>

      {/* Main Container */}
      <div className="
        relative z-10 
        w-full h-[100dvh] 
        overflow-hidden bg-[#FFFBF5] text-navy transition-all duration-500
      ">
        <div className="bg-noise" />
        {children}
      </div>
    </div>
  );
};
