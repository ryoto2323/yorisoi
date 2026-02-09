
import React from 'react';
import { Section } from './Section';
import { Quote } from 'lucide-react';

interface Section3_MessageProps {
  isActive: boolean;
}

export const Section3_Message: React.FC<Section3_MessageProps> = ({ isActive }) => {
  return (
    <Section 
      id={3} 
      isActive={isActive}
      className="bg-[#F8F7F4]" // Magazine paper color
      bgOverlay="bg-white/40"
    >
      <div className="relative w-full h-full flex flex-col pt-16 pb-24 px-6 overflow-hidden md:overflow-visible">
        
        {/* 1. Header Label */}
        <div className={`relative z-30 transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-navy"></div>
                <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-navy/60 uppercase">CEO MESSAGE</span>
            </div>
        </div>

        {/* 2. Title Area (Editorial Style) */}
        <div className="relative z-30 mt-8 mb-8 md:mb-16">
            <h2 className={`font-serif text-[40px] md:text-[56px] text-navy leading-[1.2] tracking-tight transition-all duration-1000 delay-200 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <span className="block font-black">未完成を、</span>
                <span className="relative inline-block">
                    <span className="relative z-10 font-black">愛せるか。</span>
                    <span className={`absolute bottom-3 left-0 w-full h-4 bg-orange/20 -rotate-1 -z-0 transition-transform duration-[1000ms] delay-[800ms] origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></span>
                </span>
            </h2>
        </div>

        {/* 3. Image Area - Artistic Duotone */}
        {/* Adjusted positioning for PC to prevent cutoff */}
        <div 
            className={`
                absolute top-[15%] right-[-25%] md:right-[-10%] md:top-[10%] w-[90%] md:w-[60%] h-[55%] md:h-[80%] z-10
                transition-all duration-[1500ms] ease-soft
                ${isActive ? 'opacity-100 translate-x-0 rotate-[-8deg] md:rotate-[-4deg]' : 'opacity-0 translate-x-12 rotate-0'}
            `}
        >
             {/* Main Photo Frame */}
             <div className="w-full h-full relative p-2 bg-white shadow-2xl rotate-[8deg] md:rotate-[4deg] rounded-sm">
                 <div className="w-full h-full overflow-hidden bg-gray-200 relative grayscale contrast-125 brightness-110">
                    <img 
                        src="https://github.com/ryoto2323/yorisoi/blob/main/public/yob.png?raw=true" 
                        alt="CEO Portrait" 
                        className="w-full h-full object-cover mix-blend-multiply opacity-90"
                        loading="lazy"
                        decoding="async"
                    />
                    {/* Artistic Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 to-orange/10 mix-blend-screen"></div>
                 </div>
                 
                 {/* Tape decoration */}
                 <div 
                    className="absolute -top-5 left-1/2 -translate-x-1/2 w-28 h-8 bg-white/50 backdrop-blur-sm shadow-sm transform -rotate-3 z-20"
                    style={{ clipPath: 'polygon(2% 0%, 98% 2%, 100% 95%, 0% 100%)' }}
                 ></div>
             </div>
        </div>

        {/* 4. Body Text - Editorial Layout */}
        <div className={`relative z-30 mt-auto ml-auto md:ml-0 md:mt-12 w-full max-w-[340px] md:max-w-[420px] transition-all duration-1000 delay-500 ease-soft ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="bg-white/95 md:bg-white/80 md:backdrop-blur-2xl p-8 rounded-[2rem] shadow-soft border border-white/50 relative">
                
                <Quote size={24} className="text-orange/30 absolute top-6 left-6 rotate-180" fill="currentColor" />

                <div className="relative z-10 pt-4">
                    <p className="font-serif text-[14px] md:text-[16px] leading-[2.4] text-navy font-medium mb-6 tracking-wide">
                        私たちは、完璧な会社ではありません。<br/>
                        制度も、教育も、まだ「途中」です。
                    </p>
                    <p className="font-serif text-[14px] md:text-[16px] leading-[2.4] text-navy font-medium mb-6 tracking-wide">
                        だからこそ、面白い。<br/>
                        あなたの声が、そのまま会社の<br/>
                        「次の形」になるから。
                    </p>
                    
                    <div className="flex justify-end mt-4">
                         <p className="font-handwritingJP text-[22px] md:text-[26px] font-bold text-orange transform -rotate-2">
                             一緒に、創りませんか？
                         </p>
                    </div>
                </div>

                {/* Signature */}
                <div className="mt-8 pt-4 border-t border-navy/5 flex items-center justify-between">
                    <div>
                         <p className="text-[9px] font-mono font-bold text-gray-400 tracking-widest uppercase mb-1">REPRESENTATIVE</p>
                         <p className="text-[16px] md:text-[20px] font-serif font-black text-navy">田中 雅人</p>
                    </div>
                    {/* Hanko (Stamp) */}
                    <div className="w-10 h-10 rounded-full border border-red-500/40 flex items-center justify-center transform rotate-12 opacity-80 mix-blend-multiply">
                         <span className="text-[10px] text-red-600 font-serif writing-vertical-rl font-black tracking-widest">田中</span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </Section>
  );
};
