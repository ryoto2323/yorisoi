import React from 'react';
import { Section } from './Section';
import { Ticket, ArrowRight, MousePointerClick, ChevronUp } from 'lucide-react';

const confettiPieces = [...Array(10)].map((_, i) => ({
  id: i,
  color: ['bg-orange', 'bg-yellow', 'bg-blue'][ i % 3],
  left: Math.random() * 100,
  delay: Math.random() * 3,
  duration: 4 + Math.random() * 4,
  size: 5 + Math.random() * 3,
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
      <style>{`
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .animate-pulse-scale {
          animation: pulse-scale 2.5s ease-in-out infinite;
        }
        @keyframes confetti-fall {
          0% { transform: translateY(-10svh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110svh) rotate(720deg); opacity: 0; }
        }
      `}</style>

      {/* Confetti Background */}
      <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
         {confettiPieces.map((piece) => (
            <div 
              key={piece.id}
              className={`absolute ${piece.color} opacity-20`}
              style={{
                left: `${piece.left}%`,
                top: '-20px',
                width: `${piece.size}px`,
                height: `${piece.size * 0.6}px`,
                animation: `confetti-fall ${piece.duration}s linear infinite`,
                animationDelay: `${piece.delay}s`,
                borderRadius: piece.id % 2 === 0 ? '1px' : '50%',
                transform: `rotate(${piece.rotation}deg)`
              }}
            />
         ))}
      </div>

      <div className="flex flex-col h-full items-center text-center justify-evenly relative z-10 px-4 py-4">
        
        <div className={`transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="relative inline-block mb-3">
                <p className="text-[13px] font-handwritingJP font-bold text-navy/80 leading-relaxed">
                    履歴書の準備、リクルートスーツ…<br/>
                    正直、めんどくさいですよね。
                </p>
            </div>

            <div className="relative inline-block mb-4">
                <span className={`absolute bottom-0.5 left-[-5%] w-[110%] h-[0.4em] bg-[#FACC15]/30 -rotate-1 rounded-sm -z-10 transition-all duration-1000 delay-500 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></span>
                <h2 className="text-2xl font-sans font-black text-orange tracking-tighter drop-shadow-sm transform scale-105">
                    必要ありません！
                </h2>
            </div>

            <p className="text-[12px] text-gray-700 font-bold leading-tight tracking-wide">
                まずは私服で、コーヒーを飲みながら。<br/>
                <span className="text-navy border-b border-orange/30">『カジュアル面談』</span>から始めましょう。
            </p>
        </div>

        <div className={`w-full max-w-[260px] flex flex-col gap-1.5 transition-all duration-1000 delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a 
                href="https://timerex.net/s/dami.01010202_e3d4/e261a323"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full block bg-orange text-white rounded-lg shadow-md transition-all duration-200 overflow-hidden animate-pulse-scale"
            >
                 <div className="relative flex items-stretch h-14 text-left">
                     <div className="flex-1 flex flex-col items-center justify-center p-1 z-10 text-center">
                         <div className="flex items-center gap-1 mb-0.5">
                            <Ticket className="w-2.5 h-2.5" />
                            <span className="text-[6px] font-mono font-black tracking-widest bg-white/20 px-1 py-0.5 rounded uppercase">FREE TICKET</span>
                         </div>
                         <span className="text-[15px] font-black">カジュアル面談を予約</span>
                     </div>
                     <div className="w-9 bg-black/10 flex items-center justify-center">
                         <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                     </div>
                 </div>
            </a>
            
            <p className="text-[7px] font-bold text-gray-400 flex items-center justify-center gap-1">
                <MousePointerClick size={8} />
                ※30分 / オンラインOK
            </p>
        </div>

        <div className={`flex flex-col items-center gap-2 transition-all duration-1000 delay-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
             <button 
                onClick={() => onScrollToSection(1)}
                className="flex flex-col items-center gap-0.5 group"
             >
                <div className="w-6 h-6 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 transition-colors">
                    <ChevronUp size={12} />
                </div>
                <span className="text-[6px] font-black font-mono tracking-widest text-gray-200 uppercase">BACK TO TOP</span>
             </button>

             <div className="text-center opacity-20">
                <div className="text-base font-sans font-black tracking-widest text-gray-200">YORISOI</div>
                <p className="text-[6px] text-gray-200 font-mono">© 2026 Yorisoi Real Estate</p>
             </div>
        </div>

      </div>
    </Section>
  );
};