
import React, { useRef, useState, useEffect } from 'react';
import { Section } from './Section';
import { Wallet, Clock, MapPin, Download } from 'lucide-react';

interface Section9_RecruitProps {
  isActive: boolean;
}

const recruitCards = [
  {
    id: 1,
    category: 'COMPENSATION',
    icon: Wallet,
    items: [
      { label: '給与', value: '月給30万円〜', note: '（固定残業含）＋インセンティブ' },
      { label: '昇給・賞与', value: '年4回 / 年2回', note: '宅建手当(3万)、住宅手当' }
    ]
  },
  {
    id: 2,
    category: 'WORK LIFE',
    icon: Clock,
    items: [
      { label: '時間', value: '9:30 〜 18:30', note: '直行直帰推奨' },
      { label: '休日', value: '年間125日', note: '完全週休2日(火・水) 祝日' }
    ]
  },
  {
    id: 3,
    category: 'LOCATION',
    icon: MapPin,
    items: [
      { label: '場所', value: '東京本社（渋谷）', note: '転勤なし' },
      { label: '制度', value: '社会保険完備', note: 'PC・スマホ貸与' }
    ]
  }
];

export const Section9_Recruit: React.FC<Section9_RecruitProps> = ({ isActive }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
        const scrollPosition = container.scrollLeft;
        const cardWidth = container.offsetWidth * 0.8; 
        const index = Math.round(scrollPosition / cardWidth);
        setActiveIndex(Math.min(Math.max(index, 0), recruitCards.length - 1));
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Section id={9} isActive={isActive} bgOverlay="bg-cream/40">
      {/* Decorative ambient elements for better glassmorphism contrast */}
      <div className="absolute top-[20%] left-[-10%] w-40 h-40 bg-orange/10 rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-40 h-40 bg-blue/10 rounded-full blur-[60px] pointer-events-none" />

      <div className="flex flex-col h-full pt-12 pb-16 relative z-10 overflow-hidden justify-evenly">
        <div className={`px-5 transition-all duration-700 flex-shrink-0 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-[2px] bg-orange rounded-full"></div>
            <span className="text-orange text-[8px] font-mono tracking-[0.1em] font-black uppercase">Recruit Info</span>
          </div>
          <h2 className="text-xl font-sans font-black text-navy leading-tight">募集要項</h2>
        </div>

        <div ref={scrollRef} className="flex-1 flex overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 gap-4 items-center">
            {recruitCards.map((card, index) => (
                <div 
                    key={card.id}
                    className="relative flex-shrink-0 snap-center w-[78vw] max-w-[280px] h-[60%] bg-white/40 backdrop-blur-2xl rounded-3xl shadow-[0_8px_32px_0_rgba(15,23,42,0.08)] border border-white/50 flex flex-col p-6 transition-all duration-700 ease-spring"
                    style={{ 
                      opacity: isActive ? 1 : 0, 
                      transform: isActive ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)', 
                      transitionDelay: `${index * 150}ms` 
                    }}
                >
                    <div className="flex items-center gap-2 mb-5">
                        <div className="w-6 h-6 bg-white/60 rounded-full flex items-center justify-center shadow-sm">
                            <card.icon size={12} className="text-navy opacity-60" />
                        </div>
                        <span className="text-[8px] font-mono font-black tracking-[0.2em] text-navy/40 uppercase">{card.category}</span>
                    </div>

                    <div className="flex-1 flex flex-col justify-center gap-5">
                        {card.items.map((item, i) => (
                            <div key={i} className="group">
                                <span className="inline-block bg-navy/5 text-navy text-[7px] font-black px-2 py-0.5 rounded-full mb-1.5 backdrop-blur-md border border-white/20">
                                  {item.label}
                                </span>
                                <p className="text-[16px] font-black text-navy leading-tight tracking-tight">
                                  {item.value}
                                </p>
                                <p className="text-[9px] text-gray-500 font-bold mt-1 opacity-70">
                                  {item.note}
                                </p>
                            </div>
                        ))}
                    </div>
                    
                    {/* Glass card corner accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/40 to-transparent pointer-events-none rounded-tr-3xl" />
                </div>
            ))}
            <div className="w-4 flex-shrink-0"></div>
        </div>

        <div className="px-5 flex flex-col gap-4">
            <div className="flex justify-center items-center gap-1.5 h-2">
                {recruitCards.map((_, idx) => (
                    <div key={idx} className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === idx ? 'w-8 bg-orange' : 'w-1.5 bg-navy/10'}`} />
                ))}
            </div>
            <button className="group w-full py-3 bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl flex items-center justify-center gap-2 text-[10px] font-black text-navy active:scale-95 shadow-sm transition-all hover:bg-white/80">
              <Download size={14} className="text-orange" />
              <span>採用要件をPDFで保存</span>
            </button>
        </div>
      </div>
    </Section>
  );
};
