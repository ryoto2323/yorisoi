
import React, { useState, useEffect, useRef } from 'react';
import { Section } from './Section';
import { ArrowRight, Sparkles, Calendar, MapPin, Clock, Coffee, ShieldCheck, HeartHandshake, Smile, CheckCircle2, FileX, Shirt } from 'lucide-react';

interface Section11_ActionProps {
  isActive: boolean;
  onOpenModal: () => void;
  onScrollToSection: (id: number) => void;
}

export const Section11_Action: React.FC<Section11_ActionProps> = ({ isActive, onOpenModal, onScrollToSection }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <Section 
      id={11} 
      isActive={isActive}
      bgOverlay="bg-transparent"
      className="text-white overflow-y-auto overflow-x-hidden md:overflow-visible"
    >
      <style>{`
        @keyframes holo-glow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .bg-dawn-gradient {
            background: linear-gradient(to bottom, #020617 0%, #0f172a 40%, #1e1b4b 70%, #FF6B00 100%);
        }
      `}</style>

      {/* --- LAYERED DAWN BACKGROUND --- */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#020617]">
          <div className="absolute inset-0 bg-[#020617]" />
          <div 
            className={`absolute inset-0 bg-dawn-gradient transition-opacity duration-[2500ms] ease-out will-change-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`} 
          />
          <div 
            className={`
              absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[180vw] h-[100vh] 
              bg-gradient-to-t from-orange/30 via-orange/5 to-transparent 
              rounded-full blur-[140px] transition-all duration-[3000ms] delay-500 will-change-transform
              ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
            `} 
          />
      </div>

      <div 
        className="flex flex-col md:flex-row min-h-full md:h-auto md:min-h-[100dvh] px-6 relative z-10 items-center justify-center w-full md:gap-16 lg:gap-24 pt-[calc(5rem+env(safe-area-inset-top))] pb-40 md:py-32"
      >
        
        {/* LEFT COLUMN (PC): 3D Card */}
        <div className="w-full max-w-[400px] flex flex-col items-center">
            
            {/* Header (Visible on Mobile here, maybe hidden on PC if split? Keeping simple for now) */}
            <div className={`md:hidden text-center mb-10 transition-all duration-1000 will-change-transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="inline-flex items-center gap-2 mb-4 bg-white/10 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/20">
                    <Smile size={14} className="text-orange" />
                    <span className="text-[11px] font-black text-white tracking-[0.2em]">カジュアル面談の招待状</span>
                </div>
                
                <h2 className="text-[32px] font-black font-sans text-white leading-[1.3] mb-6 tracking-tight drop-shadow-2xl">
                    「面接」の前に、<br/>
                    まずは<span className="text-orange">「雑談」</span>を。
                </h2>
            </div>

            {/* 3D Card Component */}
            {/* Modified Aspect Ratio for Mobile to prevent squashed image: aspect-[3/4] */}
            <div 
                className={`
                    relative w-full aspect-[3/4] md:aspect-[4/5] perspective-[1000px] mb-8 md:mb-0
                    transition-all duration-[1200ms] delay-300 ease-spring will-change-transform
                    ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}
                `}
            >
                <div 
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={() => setIsHovered(true)}
                    className="relative w-full h-full transition-transform duration-300 ease-out will-change-transform"
                    style={{ 
                        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                        transformStyle: 'preserve-3d'
                    }}
                >
                    {/* Physical Shadow */}
                    <div className="absolute inset-0 bg-black/80 rounded-[2.5rem] blur-3xl transform translate-y-8 scale-90 opacity-60"></div>

                    <div className="absolute inset-0 bg-[#0F172A] rounded-[2.5rem] border border-white/20 overflow-hidden shadow-2xl transition-transform duration-300">
                        {/* Hologram Layer */}
                        <div className={`absolute inset-0 opacity-40 bg-[linear-gradient(110deg,transparent_20%,rgba(14,165,233,0.3)_40%,rgba(255,107,0,0.3)_60%,transparent_80%)] bg-[length:200%_100%] ${isActive ? 'animate-[holo-glow_8s_ease_infinite]' : ''} mix-blend-screen pointer-events-none`}></div>

                        <div className="relative z-10 p-7 flex flex-col h-full justify-between">
                            
                            {/* Header Image Replacement */}
                            <div className="w-full flex-1 min-h-0 rounded-2xl overflow-hidden mb-4 border border-white/10 shadow-inner bg-black/20 relative group">
                                <img 
                                    src="https://github.com/ryoto2323/yorisoi/blob/main/public/yop.png?raw=true" 
                                    alt="Invitation Image" 
                                    className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                            </div>

                            <div className="space-y-3 flex-shrink-0">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-xl bg-orange/10 flex items-center justify-center text-orange border border-orange/20">
                                        <Clock size={14} />
                                    </div>
                                    <span className="text-[12px] font-bold text-white/90">平日・土日 夜21時まで対応</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                                        <Smile size={14} />
                                    </div>
                                    <span className="text-[12px] font-bold text-white/90">カメラOFFの参加も歓迎</span>
                                </div>
                                
                                <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                                    <span className="text-[9px] font-mono font-black text-white/30 tracking-widest uppercase">Member Entry #2026</span>
                                    <div className="flex items-center gap-1.5 px-2 py-0.5 bg-orange/20 rounded-full">
                                        <span className="text-[8px] font-black text-orange">招待中</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interaction Glow */}
                        <div 
                          className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-300"
                          style={{
                            background: isHovered ? `radial-gradient(circle at ${50 + rotate.y * 2}% ${50 + rotate.x * 2}%, rgba(255,107,0,0.4) 0%, transparent 60%)` : 'none'
                          }}
                        ></div>
                    </div>
                </div>
            </div>

            {/* --- ADDED FOR MOBILE: EXTRA INFO CHIPS --- */}
            <div className={`md:hidden mb-12 grid grid-cols-2 gap-3 w-full transition-all duration-1000 delay-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="bg-white/5 rounded-xl p-3 flex flex-col items-center justify-center text-center backdrop-blur-md border border-white/10 shadow-lg">
                    <FileX size={20} className="text-orange mb-2" />
                    <span className="text-[10px] font-bold text-white tracking-wider">履歴書不要</span>
                </div>
                <div className="bg-white/5 rounded-xl p-3 flex flex-col items-center justify-center text-center backdrop-blur-md border border-white/10 shadow-lg">
                    <Shirt size={20} className="text-orange mb-2" />
                    <span className="text-[10px] font-bold text-white tracking-wider">私服でOK</span>
                </div>
            </div>
        </div>

        {/* RIGHT COLUMN (PC): Action & Text */}
        <div className="w-full max-w-[400px] flex flex-col justify-center">
            
            {/* Desktop Header */}
            <div className={`hidden md:block text-left mb-10 transition-all duration-1000 will-change-transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                 <div className="inline-flex items-center gap-2 mb-4 bg-white/10 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/20">
                    <Smile size={14} className="text-orange" />
                    <span className="text-[11px] font-black text-white tracking-[0.2em]">カジュアル面談の招待状</span>
                </div>
                
                <h2 className="text-[40px] font-black font-sans text-white leading-[1.2] mb-6 tracking-tight drop-shadow-2xl">
                    「面接」の前に、<br/>
                    まずは<span className="text-orange">「雑談」</span>を。
                </h2>
                
                <div className="flex flex-col gap-3 items-start">
                    {[
                        "履歴書・エントリーシート不要",
                        "志望動機がなくても大丈夫です",
                        "普段着で、オンラインでOK"
                    ].map((text, i) => (
                        <div key={i} className="flex items-center gap-2 text-white/70">
                            <CheckCircle2 size={12} className="text-orange" />
                            <span className="text-[14px] font-bold tracking-wider">{text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Action Button */}
            <div className={`w-full transition-all duration-1000 delay-500 will-change-transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <a 
                    href="https://timerex.net/s/dami.01010202_e3d4/e261a323"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block w-full"
                >
                    <div className="absolute inset-0 bg-orange/40 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                    
                    <div className="relative bg-orange text-white rounded-[2rem] p-6 flex items-center justify-between shadow-2xl active:scale-[0.98] transition-all duration-300 hover:bg-[#FF8533]">
                        <div className="flex flex-col text-left">
                            <span className="text-[11px] font-black text-white/70 tracking-widest block mb-0.5">日程調整（所要時間10秒）</span>
                            <span className="text-[20px] font-black tracking-tight leading-none">空いている時間を選ぶ</span>
                        </div>
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-orange group-hover:rotate-12 transition-all duration-500 shadow-xl">
                            <Calendar size={24} strokeWidth={3} />
                        </div>
                    </div>
                </a>
                
                <p className="text-center mt-8 text-white/40 text-[10px] font-black tracking-[0.3em] flex items-center justify-center gap-2">
                    <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                    誠実な対話をお約束します
                    <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                </p>
            </div>
        </div>

      </div>

        {/* FOOTER (Absolute Bottom) */}
        <div className={`absolute bottom-8 left-0 w-full flex flex-col items-center gap-6 transition-all duration-[1500ms] delay-700 will-change-transform z-20 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button 
                onClick={() => onScrollToSection(9)}
                className="text-[11px] font-black text-white/30 hover:text-white transition-colors flex items-center gap-2 group tracking-widest uppercase border-b border-white/10 pb-1"
            >
                <span>募集要項を詳しく見る</span>
                <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex flex-col gap-2 items-center opacity-10">
                 <p className="text-[9px] font-mono font-bold uppercase tracking-widest">© 2026 Yorisoi Real Estate inc.</p>
            </div>
        </div>

    </Section>
  );
};
