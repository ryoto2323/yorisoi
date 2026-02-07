import React, { useState } from 'react';
import { Section } from './Section';
import { TrendingUp, Home, Award, Mail, Heart, X } from 'lucide-react';

interface Section8_FamilyProps {
  isActive: boolean;
}

export const Section8_Family: React.FC<Section8_FamilyProps> = ({ isActive }) => {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  return (
    <Section 
      id={8} 
      isActive={isActive}
      bgOverlay="bg-[#FFF8F0]"
      mood="slow"
    >
      <div className="flex flex-col h-full px-6 pt-20 pb-[150px] relative z-10">
        
        {/* Header - Compacted margin */}
        <div className={`mb-3 transition-all duration-700 flex-shrink-0 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-[4px] bg-orange rounded-full"></div>
            <span className="text-orange text-[10px] font-mono tracking-[0.2em] font-black">FOR FAMILY</span>
          </div>
          <h2 className="text-2xl font-sans font-black text-navy leading-snug">
            家族も安心できる<br/>
            <span className="text-orange border-b-4 border-orange/20 pb-1">『未来』</span>を約束します。
          </h2>
        </div>

        {/* Content Area - Reduced gaps from 4 to 2 */}
        <div className="flex-shrink-0 flex flex-col gap-2">
            {/* 1. House Graph */}
            <div 
                className={`relative w-full aspect-[16/9] transition-all duration-1000 delay-200 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
                <div className="absolute inset-0 drop-shadow-xl z-10">
                    <div 
                        className="w-full h-full bg-white relative overflow-hidden"
                        style={{ 
                            clipPath: 'polygon(50% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 25%)'
                        }}
                    >
                        <div className="absolute inset-0 flex flex-col justify-end">
                             <div className="absolute bottom-0 w-full h-[80%] bg-gradient-to-t from-orange/5 to-transparent"></div>
                             <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="warmGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.15"/>
                                        <stop offset="100%" stopColor="#FF6B00" stopOpacity="0"/>
                                    </linearGradient>
                                </defs>
                                <path 
                                    d="M0,100 L0,85 C20,80 40,65 60,45 C80,25 100,15 100,100 Z" 
                                    fill="url(#warmGradient)" 
                                    className={`transition-all duration-[2000ms] ease-out origin-bottom ${isActive ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
                                />
                                <path 
                                    d="M0,85 C20,80 40,65 60,45 C80,25 100,15" 
                                    fill="none" 
                                    stroke="#FF6B00" 
                                    strokeWidth="3" 
                                    strokeLinecap="round"
                                    strokeDasharray="150"
                                    strokeDashoffset={isActive ? 0 : 150}
                                    className="transition-[stroke-dashoffset] duration-[2000ms] ease-out delay-500"
                                />
                                <circle cx="100" cy="15" r="3" fill="white" stroke="#FF6B00" strokeWidth="2" className={`transition-opacity duration-500 delay-[2500ms] ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                             </svg>
                             <div className="relative z-20 p-4 pb-2 text-center">
                                 <div className="flex items-center justify-center gap-1 mb-1">
                                    <TrendingUp className="w-3.5 h-3.5 text-orange" strokeWidth={3} />
                                    <p className="text-[10px] font-bold text-gray-500 tracking-wider">売上高成長率 (CAGR)</p>
                                 </div>
                                 <p className="text-4xl font-black text-navy leading-none tracking-tighter">
                                    +120<span className="text-lg align-top ml-0.5">%</span>
                                 </p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Benefits Grid */}
            <div className="grid grid-cols-2 gap-2.5">
                <div className={`bg-white p-3.5 rounded-2xl shadow-card flex flex-col items-center text-center justify-center gap-1 border border-orange/10 transition-all duration-700 delay-400 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="w-10 h-10 bg-orange/10 rounded-full flex items-center justify-center mb-1 shadow-sm">
                        <Home className="text-orange" size={20} strokeWidth={2} />
                    </div>
                    <p className="text-[9px] font-bold text-gray-400 w-full border-b border-gray-50 pb-1.5 mb-1">自社物件なら</p>
                    <div>
                        <span className="text-[11px] font-black text-navy block">家賃補助</span>
                        <p className="text-2xl font-black text-[#EA580C] leading-none tracking-tight">
                            <span className="text-base align-top mr-0.5">最大</span>50<span className="text-xs align-top">%</span>
                        </p>
                    </div>
                </div>
                <div className={`bg-white p-3.5 rounded-2xl shadow-card flex flex-col items-center text-center justify-center gap-1 border border-orange/10 transition-all duration-700 delay-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                     <div className="w-10 h-10 bg-orange/10 rounded-full flex items-center justify-center mb-1 shadow-sm">
                        <Award className="text-orange" size={20} strokeWidth={2} />
                    </div>
                    <p className="text-[9px] font-bold text-gray-400 w-full border-b border-gray-50 pb-1.5 mb-1">宅建資格など</p>
                    <div>
                        <span className="text-[11px] font-black text-navy block">取得費用</span>
                        <p className="text-2xl font-black text-[#EA580C] leading-none tracking-tight">全額支援</p>
                    </div>
                </div>
            </div>
        </div>

        {/* 3. Invitation Button - Repositioned with better spacing */}
        <div className={`mt-6 transition-all duration-1000 delay-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button 
                onClick={() => setIsLetterOpen(true)}
                className="relative w-full group outline-none"
            >
                {/* Envelope Flap Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-white rotate-45 border-t border-l border-orange/30 -translate-y-5 z-0 group-hover:-translate-y-6 transition-transform"></div>
                
                <div className="relative bg-[#FFFBF5] border-2 border-orange/20 p-1.5 rounded-2xl shadow-[0_20px_45px_-12px_rgba(255,107,0,0.3)] z-10 group-active:scale-[0.98] transition-all group-hover:shadow-[0_25px_55px_-12px_rgba(255,107,0,0.4)] group-hover:-translate-y-1">
                    <div className="border border-orange/20 border-dashed rounded-xl p-5 flex items-center gap-5">
                        {/* Enhanced Seal Icon */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-orange/20 rounded-full animate-ping"></div>
                            <div className="relative w-12 h-12 bg-orange rounded-full flex items-center justify-center text-white shrink-0 shadow-lg border-2 border-white ring-4 ring-orange/10">
                                <Mail size={22} fill="currentColor" className="opacity-95" />
                            </div>
                        </div>
                        
                        <div className="text-left flex-1">
                            <span className="block text-[10px] text-orange font-black tracking-[0.3em] mb-1">INVITATION</span>
                            <span className="block text-base font-black text-navy group-hover:text-orange transition-colors tracking-tight">ご家族様への手紙を読む</span>
                        </div>
                        
                        <div className="flex flex-col items-center">
                            <Heart 
                              size={22} 
                              className="text-orange/40 group-hover:text-red-500 group-hover:scale-125 transition-all duration-500" 
                              fill="currentColor" 
                            />
                        </div>
                    </div>
                </div>
            </button>
        </div>

        {isLetterOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]" onClick={() => setIsLetterOpen(false)}></div>
                <div className="relative w-full max-w-md bg-[#FFFCF5] rounded-xl shadow-2xl overflow-hidden animate-[scaleUp_0.4s_cubic-bezier(0.16,1,0.3,1)] origin-bottom" onClick={(e) => e.stopPropagation()}>
                    <div className="absolute inset-0 opacity-40 pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, filter: 'contrast(120%) brightness(100%)' }}></div>
                    <button onClick={() => setIsLetterOpen(false)} className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-orange/10 text-orange hover:bg-orange hover:text-white transition-colors">
                        <X size={16} />
                    </button>
                    <div className="relative z-10 max-h-[80vh] overflow-y-auto custom-scrollbar p-8 pt-12">
                        <div className="font-serif text-navy/90 leading-loose text-[15px] tracking-wide text-justify space-y-6">
                            <p className="font-bold">拝啓　ご家族の皆様へ</p>
                            <p>突然のお手紙、失礼いたします。<br/>株式会社Yorisoi不動産 代表の田中でございます。</p>
                            <p>この度は、大切なお子様の就職先の候補として、当社にご興味を持っていただき、心より感謝申し上げます。</p>
                            <p>不動産業界というと、「厳しい」「不安定」といったイメージをお持ちかもしれません。正直に申し上げますと、決して楽な仕事ではありません。時には壁にぶつかり、悔しい思いをすることもあるでしょう。</p>
                            <p className="relative inline-block">
                                <span className="absolute inset-0 bg-orange/10 transform -skew-x-12"></span>
                                <span className="relative font-bold">しかし、私たちは約束します。<br/>お子様を、一人前のプロフェッショナルとして育て上げることを。</span>
                            </p>
                            <p>そして、困った時には全社員で支え、決して一人にはさせないことを。</p>
                            <p>当社は「人を使い捨てる」ような経営は一切いたしません。固定給による生活の安定、充実した福利厚生、さらに何より「心理的安全性」のある職場環境を、私が責任を持って守り抜きます。</p>
                            <p>もしご縁がありましたら、どうか安心してお預けください。お子様の成長と未来を、家族のように見守り続けます。</p>
                            <div className="mt-8 text-right">
                                <p className="mb-2">敬具</p>
                                <p className="text-lg font-bold">代表取締役　田中 雅人</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
      </div>
    </Section>
  );
};