
import React, { useState, useRef } from 'react';
import { Section } from './Section';
import { Quote, ChevronRight, ChevronLeft } from 'lucide-react';

interface Employee {
  id: number;
  name: string;
  nameEn: string;
  role: string;
  year: string;
  catchphrase: string;
  message: string;
  qa: { q: string; a: string }[];
  image: string;
  color: string;
  textColor: string;
  tags: string[];
}

const EMPLOYEES: Employee[] = [
  {
    id: 1,
    name: "佐藤 健太",
    nameEn: "Kenta Sato",
    role: "Asset Consultant",
    year: "2023年新卒入社",
    catchphrase: "「ありがとう」の数で、飯を食う。",
    message: "不動産は『モノ』を売る仕事だと思っていました。でも違った。お客様の人生に深く寄り添う『心』の仕事でした。",
    qa: [
      { q: "入社の決め手は？", a: "弱さを笑わずに聞いてくれたから。" },
    ],
    image: "https://github.com/ryoto2323/yorisoi/blob/main/public/yoj.png?raw=true",
    color: "bg-blue-600",
    textColor: "text-blue-600",
    tags: ["#体育会系", "#犬好き"]
  },
  {
    id: 2,
    name: "高橋 美咲",
    nameEn: "Misaki Takahashi",
    role: "Senior Planner",
    year: "2020年中途入社",
    catchphrase: "街の未来を、デザインする。",
    message: "一軒の家から始まる物語をデザインするのが私の使命。Yorisoiには、その自由があります。",
    qa: [
      { q: "仕事のやりがいは？", a: "5年後に街を歩いて誇れる瞬間。" },
    ],
    image: "https://github.com/ryoto2323/yorisoi/blob/main/public/yok.png?raw=true",
    color: "bg-orange",
    textColor: "text-orange",
    tags: ["#デザイン好き", "#カフェ"]
  },
  {
    id: 3,
    name: "田中 雅也",
    nameEn: "Masaya Tanaka",
    role: "Store Manager",
    year: "2018年入社",
    catchphrase: "チームの成長が、僕の報酬。",
    message: "個人の数字より、メンバーが壁を乗り越えたとき、店長として最高の喜びを感じます。",
    qa: [
      { q: "理想のチームは？", a: "ミスを全員で笑い飛ばせる強さ。" },
    ],
    image: "https://github.com/ryoto2323/yorisoi/blob/main/public/yol.png?raw=true",
    color: "bg-navy",
    textColor: "text-navy",
    tags: ["#サウナ道", "#2児のパパ"]
  }
];

export const Section6_People: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right'>('right');
  const touchStartX = useRef<number | null>(null);
  const current = EMPLOYEES[activeIndex];

  const handleSwitch = (index: number, direction: 'left' | 'right' = 'right') => {
    if (index === activeIndex || animating) return;
    setSwipeDirection(direction);
    setAnimating(true);
    
    // Transition timing: Wait for exit animation to clear, then update state
    setTimeout(() => {
      setActiveIndex(index);
      setAnimating(false);
    }, 400); 
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % EMPLOYEES.length;
    handleSwitch(nextIndex, 'right');
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + EMPLOYEES.length) % EMPLOYEES.length;
    handleSwitch(prevIndex, 'left');
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    const threshold = 50;

    if (diff > threshold) {
      handleNext();
    } else if (diff < -threshold) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  // --- Staggered Animation Logic ---
  const getAnimStyle = (order: number) => {
    const isExiting = animating;
    const baseTransition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    
    // Direction multiplier: if going right (Next), things exit Left (-1) and enter from Right (+1)
    const dir = swipeDirection === 'right' ? 1 : -1;
    
    if (isExiting) {
        // EXIT: Move fast in the direction of swipe, blur out
        return {
            opacity: 0,
            transform: `translateX(${dir * -30}px) scale(0.95) blur(8px)`,
            transition: 'all 0.4s ease-in',
            transitionDelay: '0ms'
        };
    } else {
        // ENTER: Come from opposite side, stagger in
        return {
            opacity: 1,
            transform: 'translateX(0) scale(1) blur(0px)',
            transition: baseTransition,
            transitionDelay: `${order * 100}ms` // Sequential delay
        };
    }
  };

  return (
    <Section id={6} isActive={isActive} bgOverlay="bg-[#FAFAFA]">
      {/* Background Large Name */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[140px] font-black leading-none whitespace-nowrap transition-all duration-700 ease-out"
          style={{ 
            color: 'transparent', 
            WebkitTextStroke: '2px #0F172A',
            transform: `translate(-50%, -50%) rotate(-90deg) scale(${animating ? 1.1 : 1})`,
            opacity: animating ? 0 : 0.03
          }}
        >
          {current.nameEn.split(' ')[0]}
        </div>
      </div>

      <div className="flex flex-col h-full relative z-10 pt-16 pb-24 px-5">
        
        {/* --- Header --- */}
        <div className="mb-6">
            <span className="text-[10px] font-mono font-black tracking-[0.3em] text-orange uppercase block mb-1">PEOPLE</span>
            <h2 className="text-[26px] font-sans font-black text-navy leading-none">
                寄り添う、<span className="text-orange">「個」の物語。</span>
            </h2>
        </div>

        {/* --- Main Content Area --- */}
        <div 
          className="flex-1 relative flex flex-col"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
            {/* Swipe Hints */}
            <div className={`absolute -right-2 top-1/2 -translate-y-1/2 z-20 text-orange/30 animate-pulse pointer-events-none transition-opacity duration-300 ${activeIndex === EMPLOYEES.length - 1 || animating ? 'opacity-0' : 'opacity-100'}`}>
                <ChevronRight size={32} />
            </div>
            <div className={`absolute -left-2 top-1/2 -translate-y-1/2 z-20 text-orange/30 animate-pulse pointer-events-none transition-opacity duration-300 ${activeIndex === 0 || animating ? 'opacity-0' : 'opacity-100'}`}>
                <ChevronLeft size={32} />
            </div>
            
            {/* Top Layer: Photo & Basic Info (Delay 0ms on Enter) */}
            <div 
                style={getAnimStyle(0)} 
                className="flex gap-4 items-end mb-6 will-change-transform"
            >
                <div className="relative w-[60%] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white rotate-[-2deg]">
                    <img src={current.image} alt={current.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                        <span className="text-white/70 text-[8px] font-mono font-black uppercase tracking-widest">{current.nameEn}</span>
                        <h3 className="text-white text-xl font-black">{current.name}</h3>
                    </div>
                </div>

                <div className="flex-1 pb-2 space-y-3">
                    <div className="bg-white px-3 py-2 rounded-2xl shadow-sm border border-gray-100 inline-block rotate-[3deg]">
                         <span className="text-[9px] font-black text-navy leading-none uppercase">{current.role}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                        {current.tags.map((tag, i) => (
                            <span key={i} className={`text-[8px] font-bold px-2 py-0.5 rounded-full bg-white border border-gray-100 text-gray-400`}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Middle Layer: Quote & Message (Delay 150ms on Enter) */}
            <div 
                style={getAnimStyle(1.5)} 
                className="relative mb-6 will-change-transform"
            >
                 <div className="absolute -top-4 -left-2 text-orange opacity-20">
                    <Quote size={40} fill="currentColor" />
                 </div>
                 <p className="text-[18px] font-handwritingJP font-bold text-navy leading-tight relative z-10 pl-2 mb-3">
                    {current.catchphrase}
                 </p>
                 <div className="bg-white/60 backdrop-blur-md p-4 rounded-3xl border border-white/50 shadow-sm relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-16 h-16 ${current.color} opacity-5 rounded-full -mr-8 -mt-8`}></div>
                    <p className="text-[11px] text-navy/70 leading-relaxed font-bold">
                        {current.message}
                    </p>
                 </div>
            </div>

            {/* Bottom Layer: QA (Delay 300ms on Enter) */}
            <div 
                style={getAnimStyle(3)} 
                className="grid grid-cols-1 gap-2 will-change-transform"
            >
                {current.qa.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-navy text-white p-3 rounded-2xl shadow-lg transform rotate-[1deg]">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${current.color}`}>Q</div>
                        <div>
                            <p className="text-[10px] font-black opacity-60 leading-none mb-1">{item.q}</p>
                            <p className="text-[11px] font-bold leading-tight">{item.a}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* --- Floating Tab Selector --- */}
        <div className="mt-auto flex justify-center items-center gap-6">
            {EMPLOYEES.map((emp, index) => (
                <button
                    key={emp.id}
                    onClick={() => handleSwitch(index, index > activeIndex ? 'right' : 'left')}
                    className="group relative flex flex-col items-center"
                >
                    <div className={`
                        w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-500 ease-spring
                        ${activeIndex === index ? 'border-orange scale-110 shadow-glow' : 'border-transparent opacity-30 grayscale'}
                    `}>
                        <img src={emp.image} alt={emp.name} className="w-full h-full object-cover" />
                    </div>
                </button>
            ))}
        </div>

      </div>
    </Section>
  );
};
