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

      {/* Direction #4: Kinetic Typography (Parallax Background Text) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
         <div className={`absolute top-[18%] right-[-15%] text-[180px] font-black text-gray-100/40 font-condensed tracking-tighter transition-all duration-[4000ms] ease-spring ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-40 opacity-0'}`}>
            FUTURE
         </div>
         <div className={`absolute bottom-[30%] left-[-15%] text-[180px] font-black text-gray-100/40 font-condensed tracking-tighter transition-all duration-[4000ms] delay-500 ease-spring ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-40 opacity-0'}`}>
            YORISOI
         </div>
      </div>

      <div className="flex flex-col h-full pt-16 px-8 pb-4 relative z-10">
        
        <div className={`transition-all duration-1200 ease-spring ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
          <div className="inline-block border border-orange/10 bg-orange/5 text-orange text-[9px] font-black px-5 py-2 rounded-full mb-6 tracking-[0.3em] shadow-sm backdrop-blur-md">
            YORISOI OFFICIAL RECRUITING
          </div>

          <h1 className="text-navy font-sans mb-6 select-none tracking-tighter flex flex-col gap-0.5">
            {/* Row 1 */}
            <span className="block text-[38px] font-black text-[#111111] drop-shadow-sm leading-tight">
              一生モノの
            </span>
            
            {/* Row 2: Handwriting + Gothic Mix */}
            <span className="flex items-baseline gap-2">
              <span className={`text-[58px] font-handwritingJP text-orange font-black block leading-[1.1] transition-all duration-[1200ms] delay-700 ease-spring ${isActive ? 'scale-100 rotate-0' : 'scale-75 -rotate-6 opacity-0'}`}>
                ありがとう
              </span>
              <span className="text-[34px] font-black text-[#111111] leading-tight">
                を
              </span>
            </span>

            {/* Row 3: Back to Gothic (Hiragana version) */}
            <span className="block text-[38px] font-black text-[#111111] drop-shadow-sm leading-tight">
              受けとろう
            </span>
          </h1>

          <div className="mb-6">
            <p className="text-orange font-handwriting text-4xl mb-3 transform -rotate-1 origin-left inline-block drop-shadow-sm opacity-80">
              Design the future with us.
            </p>
            <p className="text-[#333333] font-sans text-[15px] font-bold leading-[1.8] tracking-wide pl-1 opacity-60">
                不動産のプロとして、<br/>
                街の景色と誰かの未来を動かそう
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full max-w-sm mb-6">
             {/* Direction #2: Spring Physics & Haptic Interactions */}
             <button 
               onClick={() => onScrollToSection(11)}
               className="group relative w-full bg-orange text-white h-16 rounded-[1.2rem] font-black text-sm shadow-[0_15px_30px_-10px_rgba(255,107,0,0.35)] flex items-center justify-between px-2 pl-7 active:scale-90 transition-all duration-400 ease-spring overflow-hidden"
             >
               <span className="tracking-[0.2em] relative z-10 text-white">カジュアル面談を予約</span>
               <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[-45deg] group-hover:bg-white/40 relative z-10">
                 <ArrowRight size={20} className="text-white" strokeWidth={3} />
               </div>
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
             </button>

             <button 
               onClick={() => onScrollToSection(9)}
               className="group w-full bg-[#111111] text-white h-13 rounded-[1.2rem] font-black text-[10px] shadow-xl flex items-center justify-between px-2 pl-6 active:scale-95 transition-all duration-300 ease-spring"
             >
               <span className="tracking-[0.3em] text-white transition-opacity">募集要項を見る</span>
               <div className="w-9 h-9 rounded-lg border border-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all">
                 <ArrowRight size={16} className="text-white opacity-40 group-hover:opacity-100" strokeWidth={2.5} />
               </div>
             </button>
          </div>
        </div>

        {/* Hero Visual Container - Pulled Up */}
        <div className={`w-full mt-2 relative transition-all duration-[2000ms] delay-700 ease-spring ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
          <div className="w-full aspect-[16/10] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.25)] border border-white/10 relative group bg-gray-50">
             <img 
               src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop" 
               alt="Team Spirit" 
               className={`w-full h-full object-cover transition-transform duration-[15s] ease-linear ${isActive ? 'scale-115' : 'scale-100'}`}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent mix-blend-multiply"></div>
          </div>
          {/* Kinetic Floating Shape */}
          <div className={`absolute -bottom-4 -right-4 w-28 h-28 bg-orange/10 rounded-[2.5rem] -z-10 transition-all duration-[2500ms] delay-1000 ease-spring ${isActive ? 'opacity-100 translate-x-0 rotate-12 scale-110' : 'opacity-0 translate-x-15 rotate-0 scale-50'}`}></div>
        </div>

      </div>
    </Section>
  );
};