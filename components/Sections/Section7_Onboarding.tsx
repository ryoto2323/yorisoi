
import React, { useState, useRef } from 'react';
import { Section } from './Section';
import { Check, ChevronRight, GraduationCap, Users, Trophy, Sparkles } from 'lucide-react';

interface Step {
  id: number;
  step: string;
  stepNumber: string;
  period: string;
  title: string;
  desc: string;
  skills: string[];
  image: string;
  imgPosition?: string;
  color: string;
  accentColor: string;
  bgGradient: string;
  icon: React.ElementType;
}

const STEPS: Step[] = [
  {
    id: 0,
    step: "PHASE 01",
    stepNumber: "01",
    period: "入社 〜 1ヶ月",
    title: "基礎を、固める。",
    desc: "焦る必要はありません。まずは社会人としてのマナーと、不動産の共通言語をインプットする期間です。",
    skills: ["ビジネスマナー", "物件情報の入力", "先輩の商談同席"],
    image: "https://github.com/ryoto2323/yorisoi/blob/main/public/yom.png?raw=true",
    color: "text-blue-500",
    accentColor: "bg-blue-500",
    bgGradient: "from-blue-600 to-cyan-400",
    icon: GraduationCap
  },
  {
    id: 1,
    step: "PHASE 02",
    stepNumber: "02",
    period: "1ヶ月 〜 3ヶ月",
    title: "空気を、読む。",
    desc: "マニュアルにはない「間の取り方」や「信頼の築き方」。先輩の隣で、その極意を盗んでください。",
    skills: ["ヒアリング実践", "現地案内デビュー", "提案資料の作成"],
    image: "https://github.com/ryoto2323/yorisoi/blob/main/public/yon.png?raw=true",
    color: "text-orange",
    accentColor: "bg-orange",
    bgGradient: "from-orange to-yellow-400",
    icon: Users
  },
  {
    id: 2,
    step: "PHASE 03",
    stepNumber: "03",
    period: "3ヶ月目 〜",
    title: "主役は、君だ。",
    desc: "初契約の喜びを、チーム全員で分かち合う瞬間。プロとしてのキャリアが、ここから始まります。",
    skills: ["担当顧客を持つ", "契約手続き", "自分らしい提案"],
    image: "https://github.com/ryoto2323/yorisoi/blob/main/public/yoo.png?raw=true",
    imgPosition: "object-[center_35%]",
    color: "text-navy",
    accentColor: "bg-navy",
    bgGradient: "from-navy to-blue-900",
    icon: Trophy
  }
];

export const Section7_Onboarding: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const [activeStep, setActiveStep] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const handleNext = () => {
    if (activeStep < STEPS.length - 1) setActiveStep(prev => prev + 1);
  };

  const handlePrev = () => {
    if (activeStep > 0) setActiveStep(prev => prev - 1);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    
    // Sensitivity threshold
    if (diff > 40) handleNext();
    else if (diff < -40) handlePrev();
    
    touchStartX.current = null;
  };

  return (
    <Section id={7} isActive={isActive} bgOverlay="bg-[#F8FAFC]">
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes pop {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* Center content vertically to prevent spacing issues on tall screens */}
      <div className="flex flex-col h-full relative z-10 pt-16 pb-20 px-5 overflow-visible justify-center">
        
        {/* --- Header (Compact) --- */}
        <div className="mb-4 flex-shrink-0 z-20">
            <div className="flex items-center gap-2 mb-1">
                <Sparkles size={12} className="text-orange animate-pulse" />
                <span className="text-[10px] font-mono font-black tracking-[0.3em] text-orange uppercase">ONBOARDING</span>
            </div>
            <h2 className="text-[28px] md:text-[36px] font-sans font-black text-navy leading-none tracking-tight">
                一歩ずつ、<br/><span className="text-orange relative inline-block">
                    プロへ。
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-orange/10 -z-10 -rotate-1"></span>
                </span>
            </h2>
        </div>

        {/* --- Phase Tabs (Mobile Only - Compact) --- */}
        <div className="flex md:hidden items-center gap-1.5 mb-4 flex-shrink-0 z-20">
            {STEPS.map((step, idx) => (
                <button 
                    key={step.id}
                    onClick={() => setActiveStep(idx)}
                    className={`
                        h-1 rounded-full transition-all duration-500 ease-spring relative overflow-hidden
                        ${activeStep === idx ? 'w-10' : 'w-2 bg-gray-200'}
                    `}
                >
                    <div className={`absolute inset-0 ${step.accentColor} ${activeStep === idx ? 'opacity-100' : 'opacity-0'}`}></div>
                </button>
            ))}
        </div>

        {/* --- CONTENT CONTAINER --- */}
        {/* Mobile: Constrained Height Slider / PC: Grid */}
        <div className="relative w-full md:h-auto md:min-h-[400px] flex-shrink-0">
            
            {/* --- PC VIEW (GRID) --- */}
            <div className="hidden md:grid grid-cols-3 gap-6 h-full items-stretch">
                {STEPS.map((step, index) => (
                    <div 
                        key={step.id} 
                        className={`relative w-full h-full flex flex-col transition-all duration-700 delay-[${index * 200}ms] ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                    >
                        {/* Background Number */}
                        <div className="absolute -top-6 -right-2 z-0 pointer-events-none select-none">
                            <span className="text-[120px] font-mono font-black text-navy/[0.04] leading-none tracking-tighter" style={{ WebkitTextStroke: '2px rgba(15,23,42,0.1)' }}>
                                {step.stepNumber}
                            </span>
                        </div>

                        {/* Image Area */}
                        <div className="relative w-full h-[220px] z-10 rounded-[2rem] overflow-hidden shadow-lg bg-gray-100 shrink-0 group">
                            <img src={step.image} alt={step.title} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${step.imgPosition || 'object-center'}`} loading="lazy" decoding="async" />
                            <div className={`absolute inset-0 bg-gradient-to-tr ${step.bgGradient} mix-blend-overlay opacity-50`}></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/30"></div>
                            
                            {/* Floating Icon */}
                            <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl flex items-center justify-center text-white shadow-lg rotate-3 z-20 group-hover:rotate-12 transition-all">
                                <step.icon size={18} />
                            </div>

                            {/* Period Tag */}
                            <div className="absolute top-4 left-4 z-20">
                                <div className="bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-lg">
                                    <span className="text-[9px] font-black text-white uppercase tracking-widest">{step.period}</span>
                                </div>
                            </div>
                        </div>

                        {/* Info Card */}
                        <div className="relative z-20 -mt-6 px-2 flex-1 pb-2 min-h-0 flex flex-col">
                            <div className="flex-1 bg-white/95 md:bg-white/90 md:backdrop-blur-xl border border-white/60 p-6 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] flex flex-col hover:-translate-y-1 transition-transform duration-300">
                                <h3 className={`text-xl font-black ${step.color} leading-none mb-3 tracking-tight`}>
                                    {step.title}
                                </h3>
                                <p className="text-[13px] text-navy/80 font-bold leading-relaxed whitespace-pre-wrap mb-4 flex-1">
                                    {step.desc}
                                </p>
                                
                                <div className="w-full h-[1px] bg-navy/5 my-3 flex-shrink-0"></div>

                                <div className="flex-shrink-0">
                                    <div className="flex items-center gap-2 mb-3 opacity-50">
                                        <Check size={10} className="text-navy" strokeWidth={4} />
                                        <span className="text-[9px] font-black text-navy uppercase tracking-widest">ACQUIRED SKILLS</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 content-start">
                                        {step.skills.map((skill, i) => (
                                            <div key={i} className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-3 py-2 rounded-xl shadow-sm">
                                                <div className={`w-1.5 h-1.5 rounded-full ${step.accentColor}`}></div>
                                                <span className="text-[10px] font-bold text-navy">{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            {/* --- MOBILE VIEW (SLIDER - Tight & Dense) --- */}
            {/* Aspect Ratio container ensures card doesn't stretch too much on tall screens */}
            <div 
                className="md:hidden relative w-full aspect-[3/4.2] max-h-[500px] mx-auto perspective-[1000px]"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                 {/* Navigation Hints */}
                 <div className={`absolute -right-3 top-[40%] z-40 text-orange/30 animate-pulse pointer-events-none transition-opacity duration-300 ${activeStep === STEPS.length - 1 ? 'opacity-0' : 'opacity-100'}`}>
                    <ChevronRight size={32} strokeWidth={2} />
                </div>

                {/* Cards Container */}
                {STEPS.map((step, index) => {
                    const isCurrent = index === activeStep;
                    const isNext = index === activeStep + 1;

                    let cardStyle: React.CSSProperties = {};
                    let cardClass = "absolute top-0 left-0 w-full h-full transition-all duration-500 ease-spring will-change-transform";

                    if (isCurrent) {
                        cardStyle = { transform: 'translateX(0) scale(1)', opacity: 1, zIndex: 10 };
                    } else if (isNext) {
                        cardStyle = { transform: 'translateX(105%) scale(0.92)', opacity: 0.5, zIndex: 5, filter: 'grayscale(60%) brightness(1.1)' };
                    } else if (index > activeStep + 1) {
                        cardStyle = { transform: 'translateX(210%) scale(0.9)', opacity: 0, zIndex: 0 };
                    } else {
                        cardStyle = { transform: 'translateX(-110%) scale(0.9)', opacity: 0, zIndex: 0 };
                    }

                    return (
                        <div key={step.id} className={cardClass} style={cardStyle}>
                            <div className="relative w-full h-full flex flex-col rounded-[2rem] shadow-2xl bg-white overflow-hidden border border-gray-100">
                                
                                {/* Background Number (Subtle inside) */}
                                <div className="absolute top-2 right-4 z-0 pointer-events-none select-none opacity-20">
                                    <span className="text-[80px] font-mono font-black text-gray-100 leading-none tracking-tighter">
                                        {step.stepNumber}
                                    </span>
                                </div>

                                {/* LAYER 1: Image Area (Top 45%) */}
                                <div className="relative w-full h-[45%] z-10 bg-gray-100 shrink-0">
                                    <img src={step.image} alt={step.title} className={`w-full h-full object-cover transition-opacity duration-300 ${step.imgPosition || 'object-center'}`} loading="lazy" decoding="async" />
                                    <div className={`absolute inset-0 bg-gradient-to-tr ${step.bgGradient} mix-blend-overlay opacity-50`}></div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90"></div>
                                    
                                    {/* Icon */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <div className="bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-lg">
                                            <span className="text-[9px] font-black text-white uppercase tracking-widest">{step.period}</span>
                                        </div>
                                    </div>
                                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl flex items-center justify-center text-white shadow-lg rotate-3 z-20">
                                        <step.icon size={18} />
                                    </div>
                                </div>

                                {/* LAYER 2: Info Content (Bottom 55% - overlapping) */}
                                <div className="relative z-20 -mt-8 flex-1 flex flex-col bg-white rounded-t-[2rem] px-6 pt-8 pb-4">
                                     {/* Title */}
                                     <h3 className={`text-[22px] font-black ${step.color} leading-none mb-3 tracking-tight`}>
                                        {step.title}
                                     </h3>
                                     
                                     {/* Desc - Scrollable if needed */}
                                     <div className="flex-1 overflow-y-auto no-scrollbar mb-3">
                                        <p className="text-[12px] text-navy/80 font-bold leading-relaxed whitespace-pre-wrap">
                                            {step.desc}
                                        </p>
                                     </div>

                                     {/* Divider */}
                                     <div className="w-full h-[1px] bg-navy/5 mb-3 flex-shrink-0"></div>

                                     {/* Skills */}
                                     <div className="flex-shrink-0">
                                        <div className="flex items-center gap-2 mb-2 opacity-50">
                                            <Check size={10} className="text-navy" strokeWidth={4} />
                                            <span className="text-[9px] font-black text-navy uppercase tracking-widest">SKILLS</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {step.skills.map((skill, i) => (
                                                <div key={i} className={`flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-2.5 py-1.5 rounded-lg shadow-sm ${isCurrent ? 'animate-[pop_0.4s_ease-out_forwards]' : 'opacity-100'}`} style={{ animationDelay: isCurrent ? `${200 + i * 100}ms` : '0ms', opacity: isCurrent ? 0 : 1 }}>
                                                    <div className={`w-1 h-1 rounded-full ${step.accentColor}`}></div>
                                                    <span className="text-[9px] font-bold text-navy">{skill}</span>
                                                </div>
                                            ))}
                                        </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        
        {/* --- Footer Message --- */}
        <div className="mt-6 flex-shrink-0 flex items-center justify-center gap-2 opacity-40">
             <div className="w-1 h-1 rounded-full bg-navy"></div>
             <span className="text-[9px] font-mono font-bold text-navy uppercase tracking-widest">Growth Journey</span>
             <div className="w-1 h-1 rounded-full bg-navy"></div>
        </div>

      </div>
    </Section>
  );
};
