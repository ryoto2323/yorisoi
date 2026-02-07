import React, { useState } from 'react';
import { Section } from './Section';
import { TrendingUp, Home, Award, Mail, Heart, X } from 'lucide-react';

interface Section8_FamilyProps {
  isActive: boolean;
}

export const Section8_Family: React.FC<Section8_FamilyProps> = ({ isActive }) => {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  return (
    <Section id={8} isActive={isActive} bgOverlay="bg-[#FFF8F0]" mood="slow">
      <div className="flex flex-col h-full px-5 pt-16 pb-24 relative z-10 justify-evenly">
        
        <div className={`transition-all duration-700 flex-shrink-0 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-6 h-[2.5px] bg-orange rounded-full"></div>
            <span className="text-orange text-[8px] font-mono tracking-[0.1em] font-black uppercase">For Family</span>
          </div>
          <h2 className="text-xl font-sans font-black text-navy leading-tight">
            家族も安心できる<br/>未来を約束します。
          </h2>
        </div>

        <div className="flex-shrink-0 flex flex-col gap-2 max-w-[320px] mx-auto w-full">
            <div className={`relative w-full aspect-[18/9] transition-all duration-1000 delay-200 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="absolute inset-0 drop-shadow-md z-10">
                    <div className="w-full h-full bg-white relative overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 25%)' }}>
                         <div className="absolute inset-0 flex flex-col justify-end">
                             <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0,100 L0,85 C20,80 40,65 60,45 C80,25 100,15 100,100 Z" fill="#FF6B00" fillOpacity="0.1" />
                                <path d="M0,85 C20,80 40,65 60,45 C80,25 100,15" fill="none" stroke="#FF6B00" strokeWidth="3" strokeDasharray="150" strokeDashoffset={isActive ? 0 : 150} className="transition-[stroke-dashoffset] duration-[2000ms] ease-out delay-500" />
                             </svg>
                             <div className="relative z-20 p-2 text-center">
                                 <p className="text-[7px] font-bold text-gray-400 tracking-wider">売上高成長率 (CAGR)</p>
                                 <p className="text-3xl font-black text-navy tracking-tighter">+120%</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
                <div className="bg-white p-3 rounded-xl shadow-sm flex flex-col items-center text-center justify-center border border-orange/5 transition-all duration-700 delay-400">
                    <div className="w-7 h-7 bg-orange/5 rounded-full flex items-center justify-center mb-1">
                        <Home className="text-orange" size={14} />
                    </div>
                    <span className="text-[8px] font-black text-navy block">家賃補助</span>
                    <p className="text-xl font-black text-[#EA580C] tracking-tighter">50%</p>
                </div>
                <div className="bg-white p-3 rounded-xl shadow-sm flex flex-col items-center text-center justify-center border border-orange/5 transition-all duration-700 delay-500">
                    <div className="w-7 h-7 bg-orange/5 rounded-full flex items-center justify-center mb-1">
                        <Award className="text-orange" size={14} />
                    </div>
                    <span className="text-[8px] font-black text-navy block">資格取得</span>
                    <p className="text-xl font-black text-[#EA580C] tracking-tighter">全額支援</p>
                </div>
            </div>
        </div>

        <div className={`mt-2 max-w-[320px] mx-auto w-full transition-all duration-1000 delay-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <button onClick={() => setIsLetterOpen(true)} className="relative w-full group outline-none">
                <div className="relative bg-[#FFFBF5] border border-orange/20 p-1 rounded-xl shadow-sm z-10">
                    <div className="border border-orange/10 border-dashed rounded-lg p-3 flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center text-white shrink-0">
                            <Mail size={14} fill="currentColor" />
                        </div>
                        <span className="text-[11px] font-black text-navy flex-1 text-left">ご家族様への手紙を読む</span>
                        <Heart size={14} className="text-orange/30" fill="currentColor" />
                    </div>
                </div>
            </button>
        </div>

        {isLetterOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6" onClick={() => setIsLetterOpen(false)}>
                <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm"></div>
                <div className="relative w-full max-w-sm bg-white rounded-lg p-6 max-h-[70vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                    <button onClick={() => setIsLetterOpen(false)} className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-gray-400">
                        <X size={16} />
                    </button>
                    <div className="font-serif text-sm leading-relaxed text-navy/80 space-y-4 pt-4">
                        <p className="font-bold">拝啓　ご家族の皆様へ</p>
                        <p>私たちは約束します。お子様を一人前のプロとして育て上げ、困った時には全社員で支えることを。</p>
                        <p>ご縁がありましたら、安心してお預けください。</p>
                        <p className="text-right font-bold mt-4">代表取締役　田中 雅人</p>
                    </div>
                </div>
            </div>
        )}
      </div>
    </Section>
  );
};