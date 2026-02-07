
import React from 'react';
import { Section } from './Section';
import { Home, Award } from 'lucide-react';

interface Section8_FamilyProps {
  isActive: boolean;
}

export const Section8_Family: React.FC<Section8_FamilyProps> = ({ isActive }) => {
  return (
    <Section id={8} isActive={isActive} bgOverlay="bg-[#FFF8F0]">
      <div className="flex flex-col h-full px-5 py-6 relative z-10 justify-evenly">
        
        <div className={`transition-all duration-700 flex-shrink-0 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-[2px] bg-orange rounded-full"></div>
            <span className="text-orange text-[7px] font-mono tracking-[0.1em] font-black uppercase">For Family</span>
          </div>
          <h2 className="text-lg font-sans font-black text-navy leading-tight">
            家族も安心できる<br/>未来を約束します。
          </h2>
        </div>

        <div className="flex-shrink-0 flex flex-col gap-2 max-w-[280px] mx-auto w-full">
            <div className={`relative w-full aspect-[21/9] transition-all duration-1000 delay-200 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="absolute inset-0 drop-shadow-sm z-10">
                    <div className="w-full h-full bg-white relative overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 25%)' }}>
                         <div className="absolute inset-0 flex flex-col justify-end">
                             <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0,100 L0,85 C20,80 40,65 60,45 C80,25 100,15 100,100 Z" fill="#FF6B00" fillOpacity="0.1" />
                                <path d="M0,85 C20,80 40,65 60,45 C80,25 100,15" fill="none" stroke="#FF6B00" strokeWidth="2.5" strokeDasharray="150" strokeDashoffset={isActive ? 0 : 150} className="transition-[stroke-dashoffset] duration-[2000ms] ease-out delay-500" />
                             </svg>
                             <div className="relative z-20 p-1.5 text-center">
                                 <p className="text-[6px] font-bold text-gray-400 tracking-wider">成長率 (CAGR)</p>
                                 <p className="text-2xl font-black text-navy tracking-tighter">+120%</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
                <div className="bg-white p-2.5 rounded-xl shadow-sm flex flex-col items-center text-center justify-center border border-orange/5 transition-all">
                    <div className="w-6 h-6 bg-orange/5 rounded-full flex items-center justify-center mb-1">
                        <Home className="text-orange" size={12} />
                    </div>
                    <span className="text-[7px] font-black text-navy block">家賃補助</span>
                    <p className="text-lg font-black text-[#EA580C] tracking-tighter">50%</p>
                </div>
                <div className="bg-white p-2.5 rounded-xl shadow-sm flex flex-col items-center text-center justify-center border border-orange/5 transition-all">
                    <div className="w-6 h-6 bg-orange/5 rounded-full flex items-center justify-center mb-1">
                        <Award className="text-orange" size={12} />
                    </div>
                    <span className="text-[7px] font-black text-navy block">資格取得</span>
                    <p className="text-lg font-black text-[#EA580C] tracking-tighter">全額支援</p>
                </div>
            </div>
        </div>

        <div className={`mt-1 max-w-[280px] mx-auto w-full transition-all duration-1000 delay-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <div className="bg-white/60 backdrop-blur-sm border border-orange/10 p-3 rounded-xl shadow-sm">
                <p className="text-[10px] text-gray-500 font-bold leading-relaxed text-center">
                    私たちは約束します。新卒メンバーを一人前のプロとして育て上げ、困った時には全社員で支える文化があることを。
                </p>
            </div>
        </div>
      </div>
    </Section>
  );
};
