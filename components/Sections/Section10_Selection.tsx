import React from 'react';
import { Section } from './Section';

interface Section10_SelectionProps {
  isActive: boolean;
}

export const Section10_Selection: React.FC<Section10_SelectionProps> = ({ isActive }) => {
  return (
    <Section 
      id={10} 
      isActive={isActive}
      bgOverlay="bg-[#FFFBF5]" // Very light warm cream
    >
      {/* Background: Abstract Bubbles (Retained for ambience, toned down) */}
      <div className={`absolute inset-0 z-0 pointer-events-none transition-all duration-1000 ease-in-out ${isActive ? 'opacity-60' : 'opacity-0'}`}>
         {/* Bubbles positioned to be behind the text area */}
         <div className="absolute top-[30%] left-1/2 -translate-x-[60%] w-64 h-64 bg-orange/10 rounded-full blur-[60px] mix-blend-multiply animate-[pulse_6s_ease-in-out_infinite]" />
         <div className="absolute top-[30%] left-1/2 -translate-x-[40%] w-64 h-64 bg-[#FFDAB9]/30 rounded-full blur-[60px] mix-blend-multiply animate-[pulse_8s_ease-in-out_infinite_reverse]" />
      </div>

      <div className="flex flex-col h-full relative z-10 pt-14 pb-0 overflow-hidden">
         
         {/* Upper Content: Text & Badges */}
         <div className="flex-1 flex flex-col items-center justify-start z-20 px-4">
            
            {/* Policy & Neon */}
            <div className={`text-center mb-8 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <span className="text-navy text-[10px] font-mono tracking-[0.3em] font-black block mb-3 opacity-60">SELECTION POLICY</span>

                <div className="relative inline-block px-6 py-2 rounded-xl border-[3px] border-[#FFDAB9] shadow-[0_0_15px_rgba(255,160,122,0.4),inset_0_0_10px_rgba(255,160,122,0.4)] mb-3">
                    <h3 
                        className="text-2xl font-condensed font-bold text-white tracking-widest relative z-10"
                        style={{ 
                            textShadow: '0 0 5px #FFDAB9, 0 0 10px #FFDAB9, 0 0 20px #FF7F50',
                            color: '#FFF5EE'
                        }}
                    >
                        BE YOURSELF
                    </h3>
                    <div className="absolute inset-0 bg-white/20 mix-blend-overlay animate-pulse rounded-lg pointer-events-none"></div>
                </div>

                <div>
                    <span className="inline-block bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-gray-500 shadow-sm border border-gray-100 tracking-wider">
                        ※オンライン面談推奨
                    </span>
                </div>
            </div>

            {/* Main Message */}
            <div className={`text-center w-full transition-all duration-1000 delay-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <h2 className="text-[34px] font-handwritingJP font-bold text-navy leading-tight mb-8 transform -rotate-1">
                  面接じゃなくて、<br/>
                  <span className="text-orange relative inline-block">
                    対話
                    <svg className="absolute -bottom-2 left-0 w-full h-2 text-orange/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                    </svg>
                  </span>
                  をしよう。
                </h2>

                <p className="text-[15px] text-gray-800 font-bold leading-[2.2] tracking-wider font-sans max-w-sm mx-auto drop-shadow-sm">
                    綺麗な志望動機はいりません。<br/>
                    あなたの『悔しさ』や『野望』を、<br/>
                    そのままの言葉で聞かせてください。<br/>
                    私たちも、本音で向き合います。
                </p>
            </div>
         </div>

         {/* Lower Content: Visual (Recruiter Image) with Fade Mask */}
         <div className={`w-full h-[40%] mt-auto relative z-10 transition-all duration-[1500ms] delay-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
             <div className="absolute inset-0 w-full h-full">
                 <img 
                   src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop" 
                   alt="Online Interview" 
                   className="w-full h-full object-cover object-[center_20%]"
                   style={{
                       maskImage: 'linear-gradient(to bottom, transparent 0%, black 50%, black 100%)',
                       WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 50%, black 100%)'
                   }}
                 />
             </div>
         </div>
         
      </div>
    </Section>
  );
};