
import React, { useState, useEffect } from 'react';
import { Section } from './Section';
import { Sparkles } from 'lucide-react';

interface Section2_AboutProps {
  isActive: boolean;
}

const Tape: React.FC<{ className?: string }> = ({ className }) => (
  <div 
    className={`absolute h-8 w-24 bg-white/80 backdrop-blur-[1px] shadow-sm opacity-90 z-20 mix-blend-overlay ${className}`} 
    style={{ 
        clipPath: 'polygon(2% 0%, 98% 2%, 100% 95%, 0% 100%)',
        maskImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PGZpbHRlciBpZD0ibm9pc2UiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjUiLz48L3N2Zz4=")',
    }}
  ></div>
);

const HandCircle: React.FC<{ className?: string, delay?: string, active: boolean }> = ({ className, delay, active }) => (
  <svg viewBox="0 0 100 100" className={`absolute pointer-events-none z-20 ${className}`} style={{ overflow: 'visible' }}>
    <path 
      d="M10,50 Q25,25 50,20 T90,50 T50,90 T10,50" 
      fill="none" 
      stroke="#E60012" 
      strokeWidth="3" 
      strokeLinecap="round"
      strokeDasharray="300"
      strokeDashoffset={active ? 0 : 300}
      className="transition-[stroke-dashoffset] duration-[1500ms] ease-out"
      style={{ transitionDelay: delay }}
    />
  </svg>
);

export const Section2_About: React.FC<Section2_AboutProps> = ({ isActive }) => {
  const [displayValues, setDisplayValues] = useState({ retention: 0, age: 0 });

  useEffect(() => {
    if (isActive) {
      let startRetention = 0;
      let startAge = 0;
      const endRetention = 92;
      const endAge = 28.5;
      
      const timer = setInterval(() => {
        startRetention = Math.min(endRetention, startRetention + 2);
        startAge = Math.min(endAge, parseFloat((startAge + 0.6).toFixed(1)));
        
        setDisplayValues({ retention: startRetention, age: startAge });
        
        if (startRetention >= endRetention && startAge >= endAge) clearInterval(timer);
      }, 30);
      
      return () => clearInterval(timer);
    } else {
      setDisplayValues({ retention: 0, age: 0 });
    }
  }, [isActive]);

  return (
    <Section 
      id={2} 
      isActive={isActive}
      bgOverlay="bg-[#F9FAFB]"
    >
        <div className="absolute inset-0 z-0 opacity-[0.03]" 
             style={{ 
                 backgroundImage: 'linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)', 
                 backgroundSize: '20px 20px' 
             }}>
        </div>

        <div className="flex flex-col h-full px-5 relative z-10 pt-20 pb-24">
            
            <div className="relative z-20 mb-6 opacity-100 translate-y-0">
               <div className="inline-block relative">
                   <h2 className="text-[28px] font-black text-navy leading-none relative z-10 font-sans tracking-tight">
                       数字で見る、<br/>
                       <span className="text-[36px] text-orange inline-block transform -rotate-1 origin-bottom-left mr-0.5 mt-1 drop-shadow-sm">Yorisoi</span>
                       不動産の正体
                   </h2>
               </div>
            </div>

            <div className="relative flex-1 w-full max-w-[360px] mx-auto perspective-[1000px] min-h-[460px]">
                
                <div 
                    className="absolute top-0 right-0 w-[50%] bg-white p-2 pb-6 shadow-lg transform rotate-2 transition-all duration-1000 ease-spring border border-gray-100 rounded-sm opacity-100"
                >
                    <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-[-2deg]" />
                    <div className="w-full aspect-[1/1] bg-gray-100 mb-2 overflow-hidden relative grayscale-[10%] contrast-110 shadow-inner">
                        <img 
                          src="https://github.com/ryoto2323/yorisoi/blob/main/public/yoc.png?raw=true" 
                          alt="Team" 
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-orange/10 mix-blend-overlay"></div>
                    </div>
                    <div className="text-center relative px-1">
                        <p className="text-[9px] text-gray-400 font-bold font-sans tracking-widest mb-0.5">定着率</p>
                        <p className="text-4xl font-mono font-black text-navy leading-none tracking-tighter">
                            {displayValues.retention}<span className="text-sm font-sans font-bold text-navy/40">%</span>
                        </p>
                        <div className="absolute -bottom-6 -right-6 w-[120%] text-right transform -rotate-6">
                            <span className="font-handwritingJP text-red-500 text-[13px] font-bold drop-shadow-sm">辞めないねぇ〜</span>
                            <HandCircle active={isActive} delay="800ms" className="w-12 h-12 -top-2 right-2" />
                        </div>
                    </div>
                </div>

                <div 
                    className="absolute top-[28%] left-0 w-[42%] bg-[#FFF9C4] p-4 shadow-md transform -rotate-2 transition-all duration-1000 ease-spring opacity-100"
                    style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)' }}
                >
                    <Tape className="-top-4 left-1/2 -translate-x-1/2 rotate-[-1deg] bg-blue/10 mix-blend-multiply" />
                    <p className="font-handwritingJP font-bold text-navy/40 text-[11px] mb-1 relative z-10">平均年齢</p>
                    <div className="flex items-baseline gap-0.5 relative z-10">
                        <span className="text-3xl font-black text-navy font-mono tracking-tighter">{displayValues.age.toFixed(1)}</span>
                        <span className="text-[10px] font-bold text-navy">歳</span>
                    </div>
                </div>

                <div 
                    className="absolute top-[58%] right-0 w-[48%] bg-white p-3 shadow-lg transform rotate-3 border-t-4 border-blue-200 rounded-bl-lg rounded-br-lg transition-all duration-1000 ease-spring opacity-100"
                >
                    <p className="text-[9px] text-center text-gray-400 font-bold font-sans tracking-widest mb-2">月平均残業</p>
                    <p className="text-3xl text-center font-black text-navy mb-2 font-mono mt-1 leading-none">
                        22<span className="text-[10px] font-sans ml-0.5 text-navy/40">時間</span>
                    </p>
                </div>

                <div 
                    className={`absolute bottom-0 left-2 w-[55%] bg-white border-2 border-dashed border-orange/20 p-4 rounded-xl shadow-sm transform -rotate-1 transition-all duration-1000 ease-spring opacity-100`}
                >
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-[8px] bg-orange/10 text-orange px-2 py-0.5 rounded font-black tracking-wider">休暇データ</span>
                        <Sparkles size={10} className="text-yellow-400" />
                    </div>
                    <div>
                        <p className="text-[9px] text-gray-400 font-bold mb-0.5">有給消化率</p>
                        <p className="text-4xl font-black text-orange leading-none tracking-tighter font-mono">85<span className="text-sm font-sans font-bold opacity-40">%</span></p>
                    </div>
                    {/* Subtle annotation */}
                    <div className="absolute -right-4 -bottom-2 transform rotate-12">
                        <span className="font-handwritingJP text-orange/60 text-[10px] font-bold">遊びも本気。</span>
                    </div>
                </div>

            </div>
        </div>
    </Section>
  );
};
