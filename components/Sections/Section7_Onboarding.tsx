import React from 'react';
import { Section } from './Section';
import { Utensils, BookOpen, UserCheck, Flag, Cloud, Sparkles, MapPin } from 'lucide-react';

const steps = [
    { 
        id: 1,
        period: 'Day 1', 
        title: 'ウェルカム\nランチ',
        desc: 'まずは胃袋から仲間に！\n社内ルールも楽しく習得',
        icon: Utensils,
        color: 'bg-blue',
        textColor: 'text-white',
        position: { top: '75%', left: '82%' }, // Right side (further out)
        align: 'right' // Popover appears on Left
    },
    { 
        id: 2,
        period: 'Month 1', 
        title: 'メンター\nマンツーマン', 
        desc: '基礎知識テストあり。\n合格するまで付き合います',
        icon: BookOpen,
        color: 'bg-orange',
        textColor: 'text-white',
        position: { top: '50%', left: '18%' }, // Left side (further out)
        align: 'left' // Popover appears on Right
    },
    { 
        id: 3,
        period: 'Month 3', 
        title: '初契約への\n伴走期間', 
        desc: '先輩同行で現場デビュー！\n独り立ち判定を行います',
        icon: UserCheck,
        color: 'bg-navy',
        textColor: 'text-white',
        position: { top: '25%', left: '82%' }, // Right side
        align: 'bottom' // Popover appears Below (To avoid Goal overlap)
    },
];

interface Section7_OnboardingProps {
  isActive: boolean;
}

export const Section7_Onboarding: React.FC<Section7_OnboardingProps> = ({ isActive }) => {
  return (
    <Section 
      id={7} 
      isActive={isActive}
      bgOverlay="bg-sky/30"
    >
      {/* Background Ambience: Clouds & Contour Lines */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Clouds */}
          <Cloud className="absolute top-[10%] left-[-10%] text-white opacity-60 w-32 h-32 animate-[float_8s_ease-in-out_infinite]" fill="white" />
          <Cloud className="absolute top-[40%] right-[-15%] text-white opacity-40 w-24 h-24 animate-[float_10s_ease-in-out_infinite_reverse]" fill="white" />
          <Cloud className="absolute bottom-[20%] left-[-5%] text-white opacity-50 w-28 h-28 animate-[float_12s_ease-in-out_infinite]" fill="white" />
          
          {/* Contour Map Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" width="100%" height="100%">
             <filter id="noise" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence baseFrequency="0.02" numOctaves="2" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" />
             </filter>
             <circle cx="50%" cy="50%" r="40%" stroke="black" strokeWidth="2" fill="none" filter="url(#noise)" />
             <circle cx="20%" cy="80%" r="30%" stroke="black" strokeWidth="2" fill="none" filter="url(#noise)" />
             <circle cx="80%" cy="20%" r="30%" stroke="black" strokeWidth="2" fill="none" filter="url(#noise)" />
          </svg>
      </div>

      <div className="flex flex-col h-full relative z-10 pt-20 pb-24">
        
        {/* Header */}
        <div className={`px-6 mb-2 text-center transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center gap-2 mb-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
            <div className="w-2 h-2 bg-orange rounded-full animate-pulse"></div>
            <span className="text-orange text-[10px] font-mono tracking-[0.2em] font-black">ADVENTURE MAP</span>
          </div>
          <h2 className="text-2xl font-sans font-black text-navy leading-snug">
            プロへの道のりは、<br/>
            <span className="text-orange">冒険</span>だ。
          </h2>
        </div>

        {/* Adventure Map Area */}
        <div className="flex-1 relative w-full px-4">
            
            {/* SVG Path (Zigzag Road) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Dashed Line Path */}
                {/* Adjusted control points for wider zig-zag (18% - 82%) and extended goal (top 5%) */}
                <path 
                    d="M 50 105 Q 50 90, 82 90 T 82 75 T 18 50 T 82 25 T 50 2" 
                    fill="none" 
                    stroke="#FF6B00" 
                    strokeWidth="2" 
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                    className="opacity-40"
                />
                {/* Animated Drawing Line */}
                <path 
                    d="M 50 105 Q 50 90, 82 90 T 82 75 T 18 50 T 82 25 T 50 2" 
                    fill="none" 
                    stroke="#FF6B00" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    strokeDasharray="400"
                    strokeDashoffset={isActive ? 0 : 400}
                    className="transition-[stroke-dashoffset] duration-[3000ms] ease-linear"
                />
            </svg>

            {/* Start Point */}
            <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 text-center z-0">
                <MapPin size={24} className="text-gray-400 mx-auto animate-bounce mb-1" fill="currentColor" />
                <div className="text-[10px] font-black text-gray-400 bg-white/80 px-2 py-0.5 rounded-full shadow-sm">
                    START
                </div>
            </div>

            {/* Steps */}
            {steps.map((step, index) => (
                <div 
                    key={step.id}
                    className="absolute w-0 h-0 flex items-center justify-center z-10"
                    style={{ 
                        top: step.position.top, 
                        left: step.position.left,
                        transitionDelay: `${500 + (index * 800)}ms` 
                    }}
                >
                    {/* Icon Badge (Center) */}
                    <div 
                        className={`
                            relative w-16 h-16 rounded-full ${step.color} ${step.textColor} 
                            flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.15)] 
                            border-[4px] border-white ring-1 ring-gray-100
                            transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)
                            ${isActive ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-8'}
                        `}
                    >
                        <step.icon size={28} strokeWidth={2.5} />
                        
                        {/* Step Number Badge */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-navy text-white rounded-full flex items-center justify-center text-[10px] font-black border-2 border-white shadow-sm">
                            {step.id}
                        </div>
                    </div>

                    {/* Popover Bubble */}
                    <div 
                        className={`
                            absolute w-40 bg-white p-3 rounded-xl shadow-lg border border-gray-100
                            transition-all duration-500 delay-[200ms] z-20
                            ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                        `}
                        style={{
                            ...(step.align === 'bottom' ? {
                                top: '46px', // Icon radius (32px) + Gap
                                left: '50%',
                                transform: 'translateX(-50%)',
                            } : {
                                top: '50%',
                                // Move card further away from the path (42px offset from center = 10px from edge of 32px radius)
                                [step.align === 'left' ? 'left' : 'right']: '42px', 
                                transform: 'translateY(-50%)',
                                marginTop: '-10px'
                            })
                        }}
                    >
                        {/* Triangle for Bubble */}
                        <div 
                            className={`absolute w-0 h-0 border-transparent border-solid
                                ${step.align === 'bottom' 
                                    ? 'border-x-[6px] border-x-transparent border-b-[8px] border-b-white -top-[8px] left-1/2 -translate-x-1/2' 
                                    : `top-1/2 -translate-y-1/2 border-y-[6px] border-y-transparent ${step.align === 'left' ? 'border-r-[8px] border-r-white -left-[8px]' : 'border-l-[8px] border-l-white -right-[8px]'}`
                                }
                            `}
                        />
                        
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider">{step.period}</span>
                            <h3 className="text-xs font-black text-navy whitespace-pre-line leading-tight">{step.title}</h3>
                            <p className="text-[9px] text-gray-500 font-medium leading-relaxed mt-1 border-t border-gray-100 pt-1">
                                {step.desc}
                            </p>
                        </div>
                    </div>
                </div>
            ))}

            {/* Goal Point - Moved Higher */}
            <div 
                className={`
                    absolute top-[0%] left-1/2 -translate-x-1/2 
                    flex flex-col items-center
                    transition-all duration-700 delay-[3000ms]
                    ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-50'}
                `}
            >
                <div className="relative">
                    <Flag size={56} className="text-red-500 fill-red-500 drop-shadow-xl filter" strokeWidth={2.5} />
                    <Sparkles className="absolute -top-6 -right-6 text-yellow animate-spin-slow" size={32} fill="#FACC15" />
                    <Sparkles className="absolute -bottom-2 -left-6 text-yellow animate-pulse" size={20} fill="#FACC15" />
                </div>
                <div className="mt-1 bg-navy text-white text-xs font-black px-5 py-2 rounded-full shadow-lg tracking-widest border-2 border-white">
                    GOAL!
                </div>
            </div>

        </div>

      </div>
    </Section>
  );
};