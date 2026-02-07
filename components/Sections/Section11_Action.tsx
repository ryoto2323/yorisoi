import React from 'react';
import { Section } from './Section';
import { Ticket, ArrowRight, MousePointerClick, ChevronUp } from 'lucide-react';

const confettiPieces = [...Array(15)].map((_, i) => ({
  id: i,
  color: ['bg-orange', 'bg-yellow', 'bg-blue'][ i % 3],
  left: Math.random() * 100,
  delay: Math.random() * 3,
  duration: 4 + Math.random() * 4,
  size: 6 + Math.random() * 4,
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
              className={`absolute ${piece.color} opacity-30`}
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

      <div className="flex flex-col h-full items-center text-center justify-evenly relative z-10 px-4 py-6">
        
        <div className={`transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative inline-block rotate-[-1deg] mb-6">
                <p className="text-base font-handwritingJP font-bold text-navy/80 leading-relaxed">
                    履歴書の準備、リクルートスーツ…<br/>
                    正直、めんどくさいですよね。
                </p>
            </div>

            <div className="relative inline-block mb-8">
                <span className={`absolute bottom-1.5 left-[-5%] w-[110%] h-[0.5em] bg-[#FACC15]/50 -rotate-1 rounded-sm -z-10 transition-all duration-1000 delay-500 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></span>
                <h2 className="text-4xl font-sans font-black text-orange tracking-tighter drop-shadow-sm transform scale-105">
                    必要ありません！
                </h2>
            </div>

            <p className="text-[15px] text-gray-700 font-bold leading-[1.8] tracking-wide">
                まずは私服で、コーヒーを飲みながら。<br/>
                <span className="text-navy border-b-2 border-orange/30">『カジュアル面談』</span>から始めましょう。
            </p>
        </div>

        <div className={`w-full max-w-[320px] flex flex-col gap-2 transition-all duration-1000 delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a 
                href="https://timerex.net/s/dami.01010202_e3d4/e261a323"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full block bg-orange text-white rounded-xl shadow-xl transition-all duration-200 overflow-hidden animate-pulse-scale"
            >
                 <div className="relative flex items-stretch h-20 text-left">
                     <div className="flex-1 flex flex-col items-center justify-center p-2 z-10 text-center">
                         <div className="flex items-center gap-1.5 mb-0.5">
                            <Ticket className="w-4 h-4" />
                            <span className="text-[8px] font-mono font-black tracking-widest bg-white/20 px-1.5 py-0.5 rounded uppercase">FREE TICKET</span>
                         </div>
                         <span className="text-lg font-black">カジュアル面談を予約する</span>
                     </div>
                     <div className="w-12 bg-black/10 flex items-center justify-center">
                         <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                     </div>
                 </div>
            </a>
            
            <p className="text-[9px] font-bold text-gray-400 flex items-center justify-center gap-1">
                <MousePointerClick size={10} />
                ※所要時間：30分 / オンラインOK
            </p>
        </div>

        <div className={`flex flex-col items-center gap-4 transition-all duration-1000 delay-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
             <button 
                onClick={() => onScrollToSection(1)}
                className="flex flex-col items-center gap-0.5 group"
             >
                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 transition-colors">
                    <ChevronUp size={16} />
                </div>
                <span className="text-[8px] font-black font-mono tracking-widest text-gray-300 uppercase">BACK TO TOP</span>
             </button>

             <div className="text-center opacity-40">
                <div className="text-xl font-sans font-black tracking-widest text-gray-200">YORISOI</div>
                <p className="text-[8px] text-gray-300 font-mono mt-0.5">© 2026 Yorisoi Real Estate</p>
             </div>
        </div>

      </div>
    </Section>
  );
};