
import React from 'react';
import { Section } from './Section';
import { ArrowRight, Sparkles } from 'lucide-react';

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
      <div className="absolute inset-0 overflow-hidden z-[-1]">
        <div className="absolute inset-0 bg-[#FAFAFA]" />
        <div 
            className={`absolute top-[-10%] right-[-20%] w-[80vw] h-[80vw] bg-orange/10 rounded-full blur-[60px] md:blur-[120px] mix-blend-multiply transition-transform duration-[4000ms] ease-in-out will-change-transform ${isActive ? 'scale-110' : 'scale-100'}`} 
            style={{ animation: 'breathe 8s infinite alternate' }}
        />
        <div 
            className={`absolute bottom-[30%] left-[-20%] w-[70vw] h-[70vw] bg-blue/5 rounded-full blur-[70px] md:blur-[140px] mix-blend-multiply transition-transform duration-[5000ms] ease-in-out will-change-transform ${isActive ? 'scale-110' : 'scale-100'}`} 
            style={{ animation: 'breathe 10s infinite alternate-reverse' }}
        />
      </div>

      <style>{`
        @keyframes breathe {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.05); opacity: 0.7; }
        }
      `}</style>

      {/* Grid Layout for PC */}
      <div className="flex flex-col md:grid md:grid-cols-2 md:items-center h-full pt-[calc(3rem+env(safe-area-inset-top))] relative z-10 gap-8">
        
        {/* Left: Text Content */}
        <div className="flex flex-col justify-center px-2 md:pl-8">
            <div className="mb-8 opacity-100 translate-y-0">
              <div className="inline-flex items-center gap-2 mb-6 bg-navy/[0.03] px-3 py-1 rounded-full border border-navy/[0.05]">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse"></span>
                  <span className="text-[10px] font-bold text-navy/50 tracking-widest font-mono">RECRUITING 2026</span>
              </div>

              <h1 className="text-navy font-sans select-none tracking-tight flex flex-col items-start leading-none">
                <span className="block text-[28px] md:text-[36px] font-handwritingJP font-bold text-gray-800 mb-3 ml-0.5">一生モノの</span>
                
                <div className="relative inline-flex items-end gap-3 my-1 whitespace-nowrap">
                  <span 
                    className="text-[52px] md:text-[80px] font-handwritingJP text-orange font-black leading-[1.0] transition-all duration-[1200ms] opacity-100 scale-100"
                    style={{ 
                        textShadow: '0px 10px 30px rgba(255, 107, 0, 0.15)',
                        filter: 'drop-shadow(0 2px 4px rgba(255,107,0,0.1))'
                    }}
                  >
                    ありがとう
                  </span>
                  <span className="text-[22px] md:text-[32px] font-handwritingJP font-bold text-gray-800 mb-3 transform -rotate-6 origin-bottom-left opacity-80">を</span>
                </div>

                <span className="block text-[28px] md:text-[36px] font-handwritingJP font-bold text-gray-800 ml-1 mt-2">もらえる</span>
              </h1>

              <div className="mt-8 flex items-center gap-4 transition-all duration-1000 opacity-100 translate-x-0">
                <div className="w-12 h-[1px] bg-navy/10"></div>
                <p className="text-navy/50 font-sans text-[12px] md:text-[14px] font-bold leading-relaxed tracking-wider">
                    街の景色と、誰かの未来を動かす仕事。
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full max-w-[360px] mb-8 md:mb-0 opacity-100 translate-y-0 transition-all duration-1000">
                <button 
                  onClick={() => onScrollToSection(11)}
                  className="group relative w-full"
                >
                  <div className="absolute inset-0 bg-orange/40 rounded-[1.2rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative w-full h-14 bg-navy text-white rounded-[1.2rem] font-bold text-sm flex items-center justify-between px-6 active:scale-[0.98] transition-all duration-300 ease-spring shadow-xl overflow-hidden group-hover:bg-[#1a253a]">
                        <div className="flex flex-col items-start">
                            <span className="tracking-[0.05em] relative z-10 text-white text-[13px] font-black flex items-center gap-2">
                                カジュアル面談
                                <Sparkles size={12} className="text-yellow-200" />
                            </span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-all duration-500 relative z-10 group-hover:bg-white group-hover:text-navy group-hover:rotate-[-45deg]">
                            <ArrowRight size={16} strokeWidth={2.5} />
                        </div>
                  </div>
                </button>

                <button 
                  onClick={() => onScrollToSection(9)}
                  className="group w-full h-12 flex items-center justify-between px-6 rounded-[1rem] hover:bg-gray-50 active:scale-95 transition-all duration-300"
                >
                  <span className="text-[12px] font-bold text-navy/60 group-hover:text-navy tracking-wider transition-colors">
                      募集要項を見る
                  </span>
                  <ArrowRight size={14} className="text-navy/30 group-hover:text-orange group-hover:translate-x-1 transition-all" strokeWidth={2} />
                </button>
            </div>
        </div>

        {/* Right: Visual */}
        <div className="mt-auto md:mt-0 w-full h-full relative transition-all duration-[1500ms] opacity-100 translate-y-0 flex items-end md:items-center">
          <div className="w-full aspect-[4/3] md:aspect-[3/4] md:h-[80%] rounded-t-[3rem] md:rounded-[3rem] overflow-hidden shadow-[0_-10px_40px_-10px_rgba(15,23,42,0.1)] relative group mx-auto max-w-[94%] md:max-w-full bg-gray-50 ring-1 ring-black/5">
             <div className="absolute inset-0 overflow-hidden">
                <img 
                    src="https://github.com/ryoto2323/yorisoi/blob/main/public/yoa.png?raw=true" 
                    alt="Team Spirit" 
                    width="800"
                    height="1000"
                    className={`w-full h-full object-cover object-[center_30%] transition-transform duration-[20s] ease-linear will-change-transform ${isActive ? 'scale-110' : 'scale-100'}`}
                />
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-60"></div>
          </div>
        </div>

      </div>
    </Section>
  );
};
