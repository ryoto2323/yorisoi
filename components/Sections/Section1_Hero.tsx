import React from 'react';
import { Section } from './Section';
import { ArrowRight } from 'lucide-react';

interface Section1_HeroProps {
  isActive: boolean;
  onOpenModal: () => void;
  onScrollToSection: (id: number) => void;
}

export const Section1_Hero: React.FC<Section1_HeroProps> = ({ isActive, onOpenModal, onScrollToSection }) => {
  return (
    <Section 
      id={1} 
      isActive={isActive}
      className="bg-white"
      bgOverlay="bg-transparent"
    >
      <div className="absolute inset-[-50vh] bg-white z-[-1]" />

      {/* Kinetic Typography */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
         <div className={`absolute top-[15%] right-[-15%] text-[150px] font-black text-gray-100/40 font-condensed tracking-tighter transition-all duration-[4000ms] ease-spring ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-40 opacity-0'}`}>
            FUTURE
         </div>
         <div className={`absolute bottom-[25%] left-[-15%] text-[150px] font-black text-gray-100/40 font-condensed tracking-tighter transition-all duration-[4000ms] delay-500 ease-spring ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-40 opacity-0'}`}>
            YORISOI
         </div>
      </div>

      <div className="flex flex-col h-full pt-10 px-4 relative z-10 justify-evenly">
        
        <div className={`transition-all duration-1200 ease-spring ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
          <div className="inline-block border border-orange/10 bg-orange/5 text-orange text-[9px] font-black px-4 py-1.5 rounded-full mb-4 tracking-[0.3em] shadow-sm backdrop-blur-md">
            YORISOI OFFICIAL RECRUITING
          </div>

          <h1 className="text-navy font-sans mb-4 select-none tracking-tighter flex flex-col gap-0.5">
            <span className="block text-[32px] font-black text-[#111111] leading-tight">
              一生モノの
            </span>
            <span className="flex items-baseline gap-2">
              <span className={`text-[48px] font-handwritingJP text-orange font-black block leading-[1.1] transition-all duration-[1200ms] delay-700 ease-spring ${isActive ? 'scale-100 rotate-0' : 'scale-75 -rotate-6 opacity-0'}`}>
                ありがとう
              </span>
              <span className="text-[28px] font-black text-[#111111] leading-tight">
                を
              </span>
            </span>
            <span className="block text-[32px] font-black text-[#111111] leading-tight">
              受けとろう
            </span>
          </h1>

          <div className="mb-4">
            <p className="text-orange font-handwriting text-3xl mb-1 transform -rotate-1 origin-left inline-block opacity-80">
              Design the future with us.
            </p>
            <p className="text-[#333333] font-sans text-[13px] font-bold leading-relaxed tracking-wide opacity-60">
                不動産のプロとして、<br/>
                街の景色と誰かの未来を動かそう
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full max-w-sm">
             <button 
               onClick={() => onScrollToSection(11)}
               className="group relative w-full bg-orange text-white h-14 rounded-xl font-black text-sm shadow-lg flex items-center justify-between px-2 pl-6 active:scale-90 transition-all duration-400 ease-spring overflow-hidden"
             >
               <span className="tracking-[0.1em] relative z-10 text-white text-xs">カジュアル面談を予約</span>
               <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-xl flex items-center justify-center transition-all duration-500 relative z-10">
                 <ArrowRight size={18} className="text-white" strokeWidth={3} />
               </div>
             </button>

             <button 
               onClick={() => onScrollToSection(9)}
               className="group w-full bg-[#111111] text-white h-11 rounded-xl font-black text-[10px] shadow-lg flex items-center justify-between px-2 pl-6 active:scale-95 transition-all duration-300 ease-spring"
             >
               <span className="tracking-[0.2em] text-white">募集要項を見る</span>
               <div className="w-8 h-8 rounded-lg border border-white/5 flex items-center justify-center">
                 <ArrowRight size={14} className="text-white opacity-40" strokeWidth={2.5} />
               </div>
             </button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className={`w-full relative transition-all duration-[2000ms] delay-700 ease-spring ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
          <div className="w-full aspect-[16/9] rounded-[1.5rem] overflow-hidden shadow-2xl border border-white/10 relative group bg-gray-50">
             <img 
               src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop" 
               alt="Team Spirit" 
               className={`w-full h-full object-cover transition-transform duration-[15s] ease-linear ${isActive ? 'scale-115' : 'scale-100'}`}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent mix-blend-multiply"></div>
          </div>
        </div>

      </div>
    </Section>
  );
};