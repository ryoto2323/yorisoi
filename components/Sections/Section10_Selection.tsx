import React from 'react';
import { Section } from './Section';

interface Section10_SelectionProps {
  isActive: boolean;
}

export const Section10_Selection: React.FC<Section10_SelectionProps> = ({ isActive }) => {
  return (
    <Section id={10} isActive={isActive} bgOverlay="bg-[#FFFBF5]">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
         <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-40 h-40 bg-orange/10 rounded-full blur-[35px] animate-pulse" />
      </div>

      <div className="flex flex-col h-full relative z-10 pt-12 pb-0 overflow-hidden justify-between">
         <div className="flex flex-col items-center px-5">
            <div className={`text-center mb-4 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                <span className="text-navy text-[7px] font-mono tracking-[0.2em] font-black block mb-1 opacity-40 uppercase">Selection Policy</span>

                <div className="relative inline-block px-3 py-1 rounded-lg border-2 border-[#FFDAB9] mb-1.5">
                    <h3 className="text-base font-condensed font-bold text-navy tracking-widest relative z-10">BE YOURSELF</h3>
                </div>

                <div>
                    <span className="inline-block bg-white/60 text-[7px] font-bold text-gray-400 px-1.5 py-0.5 rounded-full border border-gray-50">※オンライン面談推奨</span>
                </div>
            </div>

            <div className={`text-center transition-all duration-1000 delay-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                <h2 className="text-xl font-handwritingJP font-bold text-navy leading-tight mb-3">
                  面接じゃなくて、<br/>
                  <span className="text-orange border-b border-orange/20">対話</span>をしよう。
                </h2>
                <p className="text-[11px] text-gray-600 font-bold leading-relaxed tracking-wide max-w-[240px] mx-auto">
                    綺麗な志望動機はいりません。<br/>
                    あなたの『悔しさ』や『野望』を、<br/>
                    そのままの言葉で聞かせてください。
                </p>
            </div>
         </div>

         <div className={`w-full h-[32%] mt-auto relative z-10 transition-all duration-[1200ms] delay-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
             <img 
               src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop" 
               alt="Interview" 
               className="w-full h-full object-cover object-[center_10%]"
               style={{ maskImage: 'linear-gradient(to bottom, transparent, black 40%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 40%)' }}
             />
         </div>
      </div>
    </Section>
  );
};