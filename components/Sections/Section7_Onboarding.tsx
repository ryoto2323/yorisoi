import React from 'react';
import { Section } from './Section';
import { Utensils, BookOpen, UserCheck, Flag, Cloud, MapPin } from 'lucide-react';

const steps = [
    { 
        id: 1,
        period: 'Day 1', 
        title: 'ウェルカムランチ',
        icon: Utensils,
        color: 'bg-blue',
        textColor: 'text-white',
        position: { top: '75%', left: '78%' },
        align: 'right'
    },
    { 
        id: 2,
        period: 'Month 1', 
        title: 'メンター制度', 
        icon: BookOpen,
        color: 'bg-orange',
        textColor: 'text-white',
        position: { top: '50%', left: '22%' },
        align: 'left'
    },
    { 
        id: 3,
        period: 'Month 3', 
        title: '同行デビュー', 
        icon: UserCheck,
        color: 'bg-navy',
        textColor: 'text-white',
        position: { top: '25%', left: '78%' },
        align: 'bottom'
    },
];

interface Section7_OnboardingProps {
  isActive: boolean;
}

export const Section7_Onboarding: React.FC<Section7_OnboardingProps> = ({ isActive }) => {
  return (
    <Section id={7} isActive={isActive} bgOverlay="bg-sky/20">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30">
          <Cloud className="absolute top-[10%] left-[-5%] text-white w-20 h-20 animate-[float_8s_ease-in-out_infinite]" fill="white" />
          <Cloud className="absolute bottom-[20%] right-[-10%] text-white w-16 h-16 animate-[float_12s_ease-in-out_infinite]" fill="white" />
      </div>

      <div className="flex flex-col h-full relative z-10 pt-12 pb-12">
        <div className={`px-5 mb-1 text-center transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <div className="inline-flex items-center gap-1 mb-1 bg-white/80 px-2.5 py-0.5 rounded-full shadow-sm">
            <span className="text-orange text-[7px] font-mono tracking-[0.1em] font-black">ADVENTURE MAP</span>
          </div>
          <h2 className="text-lg font-sans font-black text-navy leading-tight">冒険のロードマップ</h2>
        </div>

        <div className="flex-1 relative w-full px-4">
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 50 105 Q 50 90, 78 90 T 78 75 T 22 50 T 78 25 T 50 2" fill="none" stroke="#FF6B00" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-20" />
                <path d="M 50 105 Q 50 90, 78 90 T 78 75 T 22 50 T 78 25 T 50 2" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeDasharray="400" strokeDashoffset={isActive ? 0 : 400} className="transition-[stroke-dashoffset] duration-[3000ms] ease-linear" />
            </svg>

            <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 z-0 opacity-20">
                <MapPin size={12} className="text-gray-400 mx-auto" fill="currentColor" />
            </div>

            {steps.map((step, index) => (
                <div 
                    key={step.id}
                    className="absolute w-0 h-0 flex items-center justify-center z-10"
                    style={{ top: step.position.top, left: step.position.left, transitionDelay: `${500 + (index * 800)}ms` }}
                >
                    {/* Further reduced bubble size */}
                    <div className={`relative w-9 h-9 rounded-full ${step.color} ${step.textColor} flex items-center justify-center shadow-lg border-2 border-white transition-all duration-500 ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                        <step.icon size={16} />
                        <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-navy text-white rounded-full flex items-center justify-center text-[6px] font-black border border-white">
                            {step.id}
                        </div>
                    </div>

                    <div 
                        className={`absolute w-24 bg-white p-1.5 rounded-lg shadow-md border border-gray-50 transition-all duration-500 delay-[200ms] ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                        style={{
                            ...(step.align === 'bottom' ? { top: '28px', left: '50%', transform: 'translateX(-50%)' } 
                            : { top: '50%', [step.align === 'left' ? 'left' : 'right']: '28px', transform: 'translateY(-50%)' })
                        }}
                    >
                        <div className="flex flex-col gap-0">
                            <span className="text-[6px] font-mono font-bold text-gray-400 uppercase">{step.period}</span>
                            <h3 className="text-[9px] font-black text-navy whitespace-nowrap leading-tight">{step.title}</h3>
                        </div>
                    </div>
                </div>
            ))}

            <div className={`absolute top-[2%] left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-700 delay-[3000ms] ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                <Flag size={24} className="text-red-500 fill-red-500" />
                <div className="mt-0.5 bg-navy text-white text-[7px] font-black px-2 py-0.5 rounded-full border border-white">GOAL</div>
            </div>
        </div>
      </div>
    </Section>
  );
};