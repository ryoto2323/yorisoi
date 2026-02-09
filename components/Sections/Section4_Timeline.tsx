
import React from 'react';
import { Section } from './Section';
import { ArrowDown, Zap } from 'lucide-react';

const timelineData = [
  { 
    id: 1,
    time: '09:00', 
    title: '出社/MTG', 
    desc: 'ハイタッチで1日を開始。',
    image: 'https://github.com/ryoto2323/yorisoi/blob/main/public/yod.png?raw=true',
    rotation: '-2deg',
    offset: 'mt-0'
  },
  { 
    id: 2,
    time: '10:30', 
    title: '街歩き調査', 
    desc: 'エリアの魅力を再発見。',
    image: 'https://github.com/ryoto2323/yorisoi/blob/main/public/yoe.png?raw=true',
    rotation: '3deg',
    offset: 'mt-12 md:mt-0'
  },
  { 
    id: 3,
    time: '13:00', 
    title: 'ランチ', 
    desc: '先輩と本音で話す。',
    image: 'https://github.com/ryoto2323/yorisoi/blob/main/public/yof.png?raw=true',
    rotation: '-1.5deg',
    offset: '-mt-4 md:mt-0'
  },
  { 
    id: 4,
    time: '14:30', 
    title: '作戦会議', 
    desc: '理想をプランにする。',
    image: 'https://github.com/ryoto2323/yorisoi/blob/main/public/yog.png?raw=true',
    rotation: '2.5deg',
    offset: 'mt-8 md:mt-0'
  },
  { 
    id: 5,
    time: '16:00', 
    title: '現地案内', 
    desc: '目が輝く瞬間。',
    image: 'https://github.com/ryoto2323/yorisoi/blob/main/public/yoh.png?raw=true',
    rotation: '-3deg',
    offset: '-mt-2 md:mt-0'
  },
  { 
    id: 6,
    time: '18:30', 
    title: '帰宅', 
    desc: '明日への準備。',
    image: 'https://github.com/ryoto2323/yorisoi/blob/main/public/yoi.png?raw=true',
    rotation: '1deg',
    offset: 'mt-10 md:mt-0'
  },
];

const Tape: React.FC<{ className?: string }> = ({ className }) => (
  <div 
    className={`absolute h-4 w-12 bg-white/60 backdrop-blur-[2px] shadow-sm z-20 pointer-events-none ${className}`} 
    style={{ clipPath: 'polygon(5% 0%, 95% 0%, 100% 90%, 0% 100%)' }}
  ></div>
);

export const Section4_Timeline: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <Section 
      id={4} 
      isActive={isActive}
      className="bg-[#FAFAFA]"
      bgOverlay="bg-transparent"
    >
      <div className="flex flex-col relative z-10 w-full min-h-full pt-16 px-4 pb-16 overflow-visible">
        
        {/* Header */}
        <div className={`flex-shrink-0 mb-8 md:mb-12 transition-all duration-1000 ease-soft ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="text-[10px] font-mono font-black text-orange tracking-[0.2em] uppercase block mb-1">DAILY COLLAGE</span>
            <h2 className="text-navy text-[26px] md:text-[32px] font-handwritingJP font-bold leading-tight">
                1年目の、<span className="text-orange underline decoration-orange/20 underline-offset-4">リアルな一日。</span>
            </h2>
        </div>

        {/* Dense Scrapbook Grid Area */}
        <div className="flex-grow flex items-center justify-center relative w-full">
            <div className="w-full relative">
                
                {/* Mobile Path (Hidden on Desktop) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible md:hidden" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path 
                      d="M50,5 C80,15 20,25 50,35 C80,45 20,55 50,65 C80,75 20,85 50,95" 
                      fill="none" 
                      stroke="rgba(255,107,0,0.15)" 
                      strokeWidth="0.5" 
                      strokeDasharray="2 2"
                      className={`transition-all duration-[3000ms] ${isActive ? 'opacity-100' : 'opacity-0'}`}
                    />
                </svg>

                {/* Content Layout: 2 Columns on Mobile, 3 Columns on Desktop */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 items-start relative z-10">
                    
                    {timelineData.map((item, idx) => (
                        <div 
                            key={item.id} 
                            className={`
                                relative bg-white p-1.5 pb-2.5 shadow-soft border border-gray-100 rounded-sm transition-all duration-[1000ms]
                                ${/* Apply mobile offset logic only on mobile */ ''}
                                ${/* Mobile offsets are baked into data, we need to override them on md */ ''}
                                md:mt-0 md:transform-none
                                ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}
                            `}
                            style={{ 
                                /* On mobile: use rotation from data. On Desktop: randomize slightly or reset */
                                transform: isActive ? (window.innerWidth >= 768 ? `rotate(${Math.random() * 4 - 2}deg)` : `rotate(${item.rotation})`) : 'rotate(0deg)',
                                marginTop: window.innerWidth < 768 ? (item.offset.includes('-mt') ? '-1rem' : (item.offset.includes('mt-12') ? '3rem' : (item.offset.includes('mt-8') ? '2rem' : '0'))) : '0',
                                transitionDelay: `${idx * 150}ms`
                            }}
                        >
                            <Tape className={`-top-2 ${idx % 2 === 0 ? 'left-4 rotate-[-15deg]' : 'right-4 rotate-[15deg]'}`} />
                            
                            <div className={`absolute -top-2 ${idx % 2 === 0 ? '-right-2' : '-left-2'} z-30 ${idx % 2 === 0 ? 'bg-navy' : 'bg-orange'} text-white font-mono font-black text-[8px] px-1.5 py-0.5 rounded shadow-lg transform ${idx % 2 === 0 ? 'rotate-6' : '-rotate-6'}`}>
                                {item.time}
                            </div>
                            
                            <div className="w-full aspect-[4/3] overflow-hidden mb-1.5 bg-gray-50">
                                <img 
                                  src={item.image} 
                                  alt={item.title} 
                                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500 hover:scale-110" 
                                  loading="lazy"
                                  decoding="async"
                                />
                            </div>
                            
                            <div className="px-1">
                                <h3 className="text-[10px] md:text-[12px] font-black text-navy leading-none mb-0.5">{item.title}</h3>
                                <p className="text-[8px] md:text-[10px] font-bold text-gray-400 leading-tight">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Annotations */}
                <div className={`absolute top-[40%] left-[45%] -translate-x-1/2 -rotate-12 transition-all duration-1000 delay-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="font-handwritingJP text-orange/60 text-[11px] md:text-[14px] font-bold whitespace-nowrap bg-white/40 px-2 py-1 rounded-full border border-orange/10">最高のチーム！</span>
                </div>
            </div>
        </div>

        {/* Footer Hint */}
        <div className={`mt-auto pt-8 flex-shrink-0 flex flex-col items-center transition-all duration-1000 delay-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-[8px] font-black text-navy/10 tracking-[0.5em] uppercase mb-1">Scroll down</p>
            <div className="animate-bounce text-orange/30">
                <ArrowDown size={14} />
            </div>
        </div>

      </div>
    </Section>
  );
};
