import React from 'react';
import { Section } from './Section';
import { Ticket, ArrowRight, MousePointerClick, ChevronUp } from 'lucide-react';

// Static configuration for confetti to avoid re-render jitters
const confettiPieces = [...Array(20)].map((_, i) => ({
  id: i,
  color: ['bg-orange', 'bg-yellow', 'bg-blue'][i % 3],
  left: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 4 + Math.random() * 4, // 4-8s duration
  size: 6 + Math.random() * 6, // 6-12px size
  rotation: Math.random() * 360,
}));

interface Section11_ActionProps {
  isActive: boolean;
  onOpenModal: () => void;
  onScrollToSection: (id: number) => void;
}

export const Section11_Action: React.FC<Section11_ActionProps> = ({ isActive, onOpenModal, onScrollToSection }) => {
  return (
    <Section 
      id={11} 
      isActive={isActive}
      bgOverlay="bg-cream"
    >
      {/* Styles for local animations */}
      <style>{`
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        .animate-pulse-scale {
          animation: pulse-scale 2.5s ease-in-out infinite;
        }
        @keyframes confetti-fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
      `}</style>

      {/* Confetti Background (Decorations) */}
      <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
         {confettiPieces.map((piece) => (
            <div 
              key={piece.id}
              className={`absolute ${piece.color} opacity-40`}
              style={{
                left: `${piece.left}%`,
                top: '-20px',
                width: `${piece.size}px`,
                height: `${piece.size * 0.6}px`,
                animation: `confetti-fall ${piece.duration}s linear infinite`,
                animationDelay: `${piece.delay}s`,
                borderRadius: piece.id % 2 === 0 ? '2px' : '50%',
                transform: `rotate(${piece.rotation}deg)`
              }}
            />
         ))}
      </div>

      <div className="flex flex-col h-full px-6 pt-24 pb-12 relative z-10 items-center text-center">
        
        {/* Main Copy Area */}
        <div className={`mt-auto mb-10 transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* The "Pain" - Handwriting */}
            <div className="relative inline-block rotate-[-2deg] mb-8">
                <p className="text-xl font-handwritingJP font-bold text-navy/80 leading-relaxed drop-shadow-sm">
                    履歴書の準備、<br/>
                    リクルートスーツ…<br/>
                    正直、めんどくさいですよね。
                </p>
                {/* Decorative scribble */}
                <svg className="absolute -bottom-4 left-0 w-full h-4 text-gray-300" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 10 50 5 T 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
            </div>

            {/* The "Solution" - Impact with Yellow Marker */}
            <div className="relative inline-block mb-10">
                {/* Yellow Marker Underline */}
                <span className={`absolute bottom-2 left-[-5%] w-[110%] h-[0.6em] bg-[#FACC15]/60 -rotate-2 rounded-sm -z-10 transition-all duration-1000 delay-500 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></span>
                
                <h2 className="text-5xl font-sans font-black text-orange tracking-tighter drop-shadow-md scale-110 transform">
                    必要ありません！
                </h2>
            </div>

            {/* The "Invitation" - Friendly */}
            <p className="text-lg text-gray-700 font-bold leading-[1.8] tracking-wide">
                まずは私服で、コーヒーでも飲みながら。<br/>
                お互いのことを話す<br/>
                <span className="text-navy border-b-[3px] border-orange/40">『カジュアル面談』</span>から始めましょう。
            </p>
        </div>

        {/* Ticket Link Area (Updated to target TimeRex URL) */}
        <div className={`w-full max-w-sm flex flex-col gap-3 mb-auto transition-all duration-1000 delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            <a 
                href="https://timerex.net/s/dami.01010202_e3d4/e261a323"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full block bg-orange text-white rounded-xl shadow-[0_10px_30px_rgba(255,107,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,107,0,0.4)] transition-all duration-200 overflow-hidden animate-pulse-scale"
            >
                 {/* Ticket Texture */}
                 <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>

                 <div className="relative flex items-stretch h-24 text-left">
                     {/* Left Side: Main CTA */}
                     <div className="flex-1 flex flex-col items-center justify-center p-2 z-10 text-center">
                         <div className="flex items-center gap-2 mb-1">
                            <Ticket className="w-5 h-5 animate-bounce" strokeWidth={2.5} />
                            <span className="text-[10px] font-mono font-black tracking-widest bg-white/20 px-2 py-0.5 rounded">FREE TICKET</span>
                         </div>
                         <span className="text-xl font-black tracking-wider">カジュアル面談を予約する</span>
                     </div>

                     {/* Perforation Line */}
                     <div className="relative w-[2px] h-full bg-transparent border-l-2 border-dashed border-white/40 my-1">
                        {/* Cutouts matching bg-cream */}
                        <div className="absolute -top-3 -left-[5px] w-3 h-3 bg-cream rounded-full"></div>
                        <div className="absolute -bottom-3 -left-[5px] w-3 h-3 bg-cream rounded-full"></div>
                     </div>

                     {/* Right Side: Action Icon */}
                     <div className="w-16 bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                         <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                     </div>
                 </div>
            </a>
            
            <p className="text-[10px] font-bold text-gray-400 flex items-center justify-center gap-1">
                <MousePointerClick size={12} />
                ※所要時間：30分 / オンラインOK
            </p>
        </div>

        {/* Footer Area */}
        <div className={`mt-8 flex flex-col items-center gap-4 transition-all duration-1000 delay-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
             
             {/* Back to Top Button */}
             <button 
                onClick={() => onScrollToSection(1)}
                className="flex flex-col items-center gap-1 group active:scale-95 transition-transform"
             >
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-navy group-hover:text-navy transition-colors">
                    <ChevronUp size={20} />
                </div>
                <span className="text-[10px] font-black font-mono tracking-widest text-gray-300 group-hover:text-navy">BACK TO TOP</span>
             </button>

             <div className="flex flex-col items-center gap-4 mt-2">
                <button 
                    onClick={() => onScrollToSection(9)}
                    className="text-xs font-bold text-gray-400 border-b border-gray-300 pb-0.5 hover:text-navy hover:border-navy transition-colors"
                >
                    募集要項を詳しく見る
                </button>

                <div className="text-center">
                    <div className="text-2xl font-sans font-black tracking-widest text-gray-200 mb-1">
                        YORISOI
                    </div>
                    <p className="text-[10px] text-gray-300 font-mono">
                        © 2026 Yorisoi Real Estate Co., Ltd.
                    </p>
                </div>
             </div>
        </div>

      </div>
    </Section>
  );
};