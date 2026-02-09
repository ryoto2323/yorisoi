
import React, { useState } from 'react';
import { Section } from './Section';
import { Wallet, Clock, MapPin, CheckCircle2, Plus, ShieldCheck, Briefcase, Zap } from 'lucide-react';

interface Section9_RecruitProps {
  isActive: boolean;
}

const CATEGORIES = [
    { id: 'money', label: '給与・待遇', icon: Wallet },
    { id: 'time', label: '休日・時間', icon: Clock },
    { id: 'place', label: '勤務・環境', icon: MapPin },
];

const DATA = {
    money: [
        { label: '初任給', value: '30.0', unit: '万円', sub: '固定残業45h込' },
        { label: '昇給', value: '年 4', unit: '回', sub: '3ヶ月毎の評価' },
        { label: '賞与', value: '年 2', unit: '回', sub: '昨年度 4ヶ月分' },
        { label: '諸手当', value: 'MAX 5', unit: '万', sub: '宅建+住宅補助' },
    ],
    time: [
        { label: '勤務時間', value: '09:30', unit: '~18:30', sub: '実働8時間' },
        { label: '年間休日', value: '125', unit: '日', sub: '完全週休2日+祝' },
        { label: '有給取得', value: '85', unit: '%', sub: '平均12日/年' },
        { label: '残業', value: '22', unit: 'h/月', sub: '20時PC停止' },
    ],
    place: [
        { label: '勤務地', value: '渋谷', unit: '本社', sub: 'スクランブルスクエア' },
        { label: '転勤', value: 'なし', unit: '', sub: '地域に根ざす' },
        { label: 'スタイル', value: 'Hybrid', unit: '', sub: '直行直帰推奨' },
        { label: 'PC貸与', value: 'Mac', unit: 'Book', sub: 'iPhone完備' },
    ]
};

export const Section9_Recruit: React.FC<Section9_RecruitProps> = ({ isActive }) => {
  const [activeTab, setActiveTab] = useState<'money' | 'time' | 'place'>('money');

  return (
    <Section id={9} isActive={isActive} bgOverlay="bg-[#FDFDFD]">
      
      {/* Visual Watermark */}
      <div className="absolute top-[10%] left-[-5%] pointer-events-none select-none z-0">
          <div className={`text-[120px] font-black text-navy/[0.02] leading-none transition-all duration-[2000ms] ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              誠実
          </div>
      </div>

      {/* 
         FIX: Changed h-full to min-h-full/md:h-auto to prevent clipping on PC.
         Added md:py-32 to give more vertical breathing room on desktop.
      */}
      <div className="flex flex-col min-h-full md:h-auto pt-16 pb-24 md:py-32 px-6 relative z-10 justify-center">
        
        {/* Header */}
        <div className={`flex-shrink-0 mb-8 md:mb-16 transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 bg-orange rounded-full"></div>
                <span className="text-[10px] font-mono font-black text-orange tracking-[0.4em] uppercase">GUIDELINES</span>
            </div>
            <div className="flex flex-col">
                <h2 className="text-[34px] md:text-[40px] font-black text-navy leading-[1.1] tracking-tight">
                    募集要項
                </h2>
                <div className="flex items-center gap-3 mt-2">
                    <div className="h-[1px] w-8 bg-navy/10"></div>
                    <p className="text-[10px] md:text-[12px] font-bold text-navy/40 tracking-widest">
                        条件は、誠実さの証明。
                    </p>
                </div>
            </div>
        </div>

        {/* Content Layout: 2 Columns on Desktop */}
        <div className="md:grid md:grid-cols-12 md:gap-16 w-full items-start">
            
            {/* Left Column: Data Table (Span 7) */}
            <div className="md:col-span-7">
                {/* Tab Selector */}
                <div className={`mb-6 p-1.5 bg-gray-100 md:bg-gray-100/50 md:backdrop-blur-md rounded-[1.8rem] flex gap-1 transition-all duration-1000 delay-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id as any)}
                            className={`
                                flex-1 flex flex-col items-center justify-center py-2.5 rounded-[1.4rem] transition-all duration-500
                                ${activeTab === cat.id 
                                    ? 'bg-white text-navy shadow-[0_4px_12px_rgba(0,0,0,0.05)]' 
                                    : 'text-gray-400 hover:text-navy/60'}
                            `}
                        >
                            <cat.icon size={14} className={`mb-1 transition-colors ${activeTab === cat.id ? 'text-orange' : 'text-gray-300'}`} />
                            <span className="text-[10px] font-black tracking-tight">{cat.label}</span>
                        </button>
                    ))}
                </div>

                {/* Data Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-3 mb-8 md:mb-0">
                    {DATA[activeTab].map((item, idx) => (
                        <div 
                            key={idx} 
                            className={`bg-white rounded-[1.8rem] p-5 flex flex-col justify-between shadow-soft border border-gray-50 transition-all duration-700 hover:shadow-lg ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                            style={{ transitionDelay: `${400 + idx * 100}ms` }}
                        >
                            <div className="flex flex-col">
                                <span className="text-[9px] font-black text-navy/20 uppercase tracking-widest mb-1">{item.label}</span>
                                <div className="flex items-baseline gap-0.5">
                                    <span className="text-[26px] font-black text-navy tracking-tighter leading-none">{item.value}</span>
                                    {item.unit && <span className="text-[11px] font-black text-navy/30">{item.unit}</span>}
                                </div>
                            </div>
                            <div className="mt-3 flex items-center gap-1.5">
                                <div className="w-1 h-1 rounded-full bg-orange/40"></div>
                                <p className="text-[9px] text-gray-400 font-bold leading-none">{item.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column: Visual Cards (Span 5) */}
            <div className="md:col-span-5 flex flex-col gap-6">
                <div className="space-y-4 mb-4 md:mb-0">
                    
                    {/* Culture Card */}
                    <div className={`relative overflow-hidden bg-navy rounded-[2.2rem] p-6 shadow-2xl transition-all duration-1000 delay-700 hover:scale-[1.02] ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange opacity-[0.08] blur-[50px] -mr-10 -mt-10"></div>
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck size={16} className="text-orange" />
                                    <span className="text-[9px] font-mono font-black text-white/30 tracking-[0.4em] uppercase">PHILOSOPHY</span>
                                </div>
                                <Plus size={14} className="text-white/20" />
                            </div>
                            <h3 className="text-[20px] md:text-[24px] font-black text-white leading-tight mb-2">
                                選考基準は、<br/><span className="text-orange underline decoration-orange/20 underline-offset-4 decoration-2">「らしさ」</span>との一致。
                            </h3>
                            <p className="text-white/40 text-[10px] md:text-[12px] font-bold leading-relaxed max-w-[240px]">
                                私たちは、スキルよりも心の在り方で、<br/>
                                共に未来を創る仲間を選びます。
                            </p>
                        </div>
                    </div>

                    {/* Smaller Cards Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className={`bg-gray-50 rounded-[2.2rem] p-5 flex flex-col justify-between min-h-[140px] border border-gray-100 transition-all duration-1000 delay-900 hover:bg-white hover:shadow-md ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                            <div className="w-9 h-9 rounded-2xl bg-white flex items-center justify-center text-navy shadow-sm mb-4">
                                <Briefcase size={16} />
                            </div>
                            <div>
                                <span className="text-[8px] font-black text-navy/30 uppercase tracking-[0.2em] block mb-1">Benefits</span>
                                <p className="text-[12px] font-black text-navy leading-snug">
                                    住宅手当 50% &<br/>
                                    <span className="text-navy/50">資格支援制度</span>
                                </p>
                            </div>
                        </div>

                        <div className={`bg-orange rounded-[2.2rem] p-5 flex flex-col justify-between min-h-[140px] shadow-glow transition-all duration-1000 delay-[1000ms] hover:scale-[1.05] ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                            <div className="w-9 h-9 rounded-2xl bg-white/20 md:backdrop-blur-md flex items-center justify-center text-white mb-4">
                                <Zap size={16} />
                            </div>
                            <div>
                                <span className="text-[8px] font-black text-white/40 uppercase tracking-[0.2em] block mb-1">Retention</span>
                                <p className="text-[12px] font-black text-white leading-snug">
                                    未経験者の<br/>
                                    <span className="text-white">定着率 92.5%</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Footer Hint - Adjusted for PC spacing */}
        <div className={`mt-auto md:mt-16 flex items-center justify-center gap-4 transition-all duration-1000 delay-[1200ms] ${isActive ? 'opacity-100' : 'opacity-0'}`}>
            <div className="h-[1px] flex-1 bg-navy/[0.05]"></div>
            <div className="flex items-center gap-1.5 px-3">
                <CheckCircle2 size={12} className="text-orange" />
                <span className="text-[8px] font-black text-navy/20 tracking-[0.4em] uppercase">Humanity First Policy</span>
            </div>
            <div className="h-[1px] flex-1 bg-navy/[0.05]"></div>
        </div>

      </div>
    </Section>
  );
};
