
import React, { useEffect, useState } from 'react';
import { Section } from './Section';
import { TrendingUp, Home, BadgeCheck } from 'lucide-react';

interface Section8_FamilyProps {
  isActive: boolean;
}

export const Section8_Family: React.FC<Section8_FamilyProps> = ({ isActive }) => {
  const [graphHeight, setGraphHeight] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    if (isActive) {
      const timeouts = [0, 100, 200, 300, 400].map((delay, i) => 
        setTimeout(() => {
            setGraphHeight(prev => {
                const next = [...prev];
                next[i] = [30, 45, 60, 80, 100][i];
                return next;
            });
        }, 500 + delay)
      );
      return () => timeouts.forEach(clearTimeout);
    } else {
      setGraphHeight([0, 0, 0, 0, 0]);
    }
  }, [isActive]);

  return (
    <Section id={8} isActive={isActive} bgOverlay="bg-[#FDFBF7]">
      <div className="absolute inset-0 z-0 opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="flex flex-col h-full relative z-10 px-6 pt-24 pb-32 justify-center">
        
        {/* Header */}
        <div className="mb-8 md:mb-12 flex-shrink-0 opacity-100 translate-y-0 transition-all duration-1000">
            <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange"></span>
                <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-navy/60 uppercase">FUTURE PROMISE</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-navy font-serif leading-tight tracking-tight">
                家族に、<span className="text-orange relative">胸を張れる
                <svg className="absolute w-full h-2 bottom-0 left-0 text-orange/30 -z-10" viewBox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" fill="none" strokeWidth="3" /></svg>
                </span><br/>
                未来であれ。
            </h2>
        </div>

        {/* Content Layout: Vertical on Mobile, Horizontal on Desktop */}
        <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-8 min-h-0 md:items-stretch">
            
            {/* Left: Growth Graph */}
            <div className="flex-[1.5] md:flex-[2] bg-white rounded-[2rem] p-5 md:p-8 shadow-soft border border-orange/5 relative overflow-hidden flex flex-col opacity-100 transition-all duration-1000">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <div className="flex items-center gap-1.5 mb-1">
                            <div className="p-1.5 bg-orange/10 rounded-lg">
                                <TrendingUp size={14} className="text-orange" />
                            </div>
                            <span className="text-[10px] font-bold text-navy tracking-wide">経営の安定性</span>
                        </div>
                        <h3 className="text-sm md:text-xl font-bold text-navy pl-1">右肩上がりの成長曲線</h3>
                    </div>
                </div>
                
                <div className="flex-1 flex items-end justify-between gap-3 md:gap-8 px-2 pb-1">
                    {['21', '22', '23', '24', '25'].map((year, i) => (
                        <div key={i} className="flex flex-col justify-end w-full h-full group relative">
                            <div className="w-full bg-gray-50 rounded-t-lg h-full absolute bottom-0"></div>
                            <div 
                                className="w-full bg-gradient-to-t from-orange to-yellow-400 rounded-t-lg relative z-10 transition-all duration-1000 ease-spring shadow-[0_-5px_15px_-5px_rgba(255,107,0,0.3)] group-hover:brightness-110"
                                style={{ height: `${graphHeight[i]}%` }}
                            ></div>
                            <span className="text-[9px] md:text-[11px] text-gray-400 font-mono text-center mt-2 z-10 relative font-bold">{year}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right: Benefits Cards */}
            <div className="flex-[1] flex md:flex-col gap-4 min-h-0">
                
                {/* Housing Card */}
                <div className="flex-1 bg-white rounded-[2rem] p-4 pb-8 md:p-6 md:pb-8 border border-blue-50 shadow-soft flex flex-col justify-between opacity-100 transition-all duration-1000 hover:shadow-lg hover:-translate-y-1 min-h-[180px]">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-1">
                        <Home size={18} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                        <span className="text-[8px] md:text-[10px] font-mono font-bold text-blue-400 tracking-wider uppercase block mb-1">Living</span>
                        <p className="text-xs md:text-sm font-bold text-navy leading-tight">住宅手当<br/><span className="text-xl md:text-3xl font-black font-mono">50%</span></p>
                    </div>
                </div>

                {/* License Card */}
                <div className="flex-1 bg-white rounded-[2rem] p-4 pb-8 md:p-6 md:pb-8 border border-green-50 shadow-soft flex flex-col justify-between opacity-100 transition-all duration-1000 hover:shadow-lg hover:-translate-y-1 min-h-[180px]">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-1">
                        <BadgeCheck size={18} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                        <span className="text-[8px] md:text-[10px] font-mono font-bold text-green-500 tracking-wider uppercase block mb-1">License</span>
                        <p className="text-xs md:text-sm font-bold text-navy leading-tight">資格取得<br/><span className="text-sm md:text-lg font-black">全額支援</span></p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </Section>
  );
};
