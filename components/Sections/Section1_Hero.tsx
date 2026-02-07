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

      {/* Kinetic Typography - Reduced opacity/size slightly */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
         <div className={`absolute top-[18%] right-[-10%] text-[100px] font-black text-gray-100/30 font-condensed tracking-tighter transition-all duration-[4000ms] ease-spring ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            FUTURE
         </div>
         <div className={`absolute bottom-[28%] left-[-10%] text-[100px] font-black text-gray-100/30 font-condensed tracking-tighter transition-all duration-[4000ms] delay-500 ease-spring ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            YORISOI
         </div>
      </div>

      <div className="flex flex-col h-full pt-8 px-2 relative z-10 justify-evenly">
        
        <div className={`transition-all duration-1200 ease-spring ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <div className="inline-block border border-orange/10 bg-orange/5 text-orange text-[8px] font-black px-3 py-1 rounded-full mb-3 tracking-[0.2em] shadow-sm backdrop-blur-md">
            YORISOI OFFICIAL RECRUITING
          </div>

          <h1 className="text-navy font-sans mb-3 select-none tracking-tight flex flex-col gap-0">
            <span className="block text-[26px] font-black text-[#111111] leading-tight">
              一生モノの
            </span>
            <span className="flex items-baseline gap-1.5">
              <span className={`text-[38px] font-handwritingJP text-orange font-black block leading-[1.1] transition-all duration-[1200ms] delay-700 ease-spring ${isActive ? 'scale-100 rotate-0' : 'scale-75 -rotate-6 opacity-0'}`}>
                ありがとう
              </span>
              <span className="text-[22px] font-black text-[#111111] leading-tight">
                を
              </span>
            </span>
            <span className="block text-[26px] font-black text-[#111111] leading-tight">
              受けとろう
            </span>
          </h1>

          <div className="mb-4">
            <p className="text-orange font-handwriting text-2xl mb-1 transform -rotate-1 origin-left inline-block opacity-80">
              Design the future with us.
            </p>
            <p className="text-[#333333] font-sans text-[11px] font-bold leading-relaxed tracking-wide opacity-50">
                不動産のプロとして、<br/>
                街の景色と誰かの未来を動かそう
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full max-w-[280px]">
             <button 
               onClick={() => onScrollToSection(11)}
               className="group relative w-full bg-orange text-white h-12 rounded-lg font-black text-xs shadow-lg flex items-center justify-between px-1.5 pl-5 active:scale-90 transition-all duration-400 ease-spring overflow-hidden"
             >
               <span className="tracking-[0.05em] relative z-10 text-white text-[11px]">カジュアル面談を予約</span>
               <div className="w-9 h-9 rounded-md bg-white/20 backdrop-blur-xl flex items-center justify-center transition-all duration-500 relative z-10">
                 <ArrowRight size={16} className="text-white" strokeWidth={3} />
               </div>
             </button>

             <button 
               onClick={() => onScrollToSection(9)}
               className="group w-full bg-[#111111] text-white h-9 rounded-lg font-black text-[9px] shadow-lg flex items-center justify-between px-1.5 pl-5 active:scale-95 transition-all duration-300 ease-spring"
             >
               <span className="tracking-[0.15em] text-white">募集要項を見る</span>
               <div className="w-6 h-6 rounded-md border border-white/5 flex items-center justify-center">
                 <ArrowRight size={12} className="text-white opacity-40" strokeWidth={2} />
               </div>
             </button>
          </div>
        </div>

        {/* Hero Visual - Slightly smaller aspect ratio */}
        <div className={`w-full max-w-[320px] mx-auto relative transition-all duration-[2000ms] delay-700 ease-spring ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
          <div className="w-full aspect-[21/10] rounded-[1rem] overflow-hidden shadow-xl border border-white/10 relative group bg-gray-50">
             <img 
               src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop" 
               alt="Team Spirit" 
               className={`w-full h-full object-cover transition-transform duration-[15s] ease-linear ${isActive ? 'scale-115' : 'scale-100'}`}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent mix-blend-multiply"></div>
          </div>
        </div>

      </div>
    </Section>
  );
};