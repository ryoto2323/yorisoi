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
      { label: '昇給・賞与', value: '昇給年4回 / 賞与年2回', note: '宅建手当(3万)、住宅手当' }
    ]
  },
  {
    id: 2,
    category: 'WORK LIFE',
    icon: Clock,
    items: [
      { label: '時間', value: '9:30 〜 18:30', note: '（実働8h） 直行直帰推奨' },
      { label: '休日', value: '年間125日', note: '完全週休2日(火・水) 祝日' }
    ]
  },
  {
    id: 3,
    category: 'LOCATION',
    icon: MapPin,
    items: [
      { label: '場所', value: '東京本社（渋谷）', note: '転居を伴う転勤なし' },
      { label: '制度', value: '社会保険完備', note: 'PC・スマホ貸与 / 資格支援' }
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
    <Section id={9} isActive={isActive} bgOverlay="bg-cream">
      <div className="flex flex-col h-full pt-16 pb-20 relative z-10 overflow-hidden">
        <div className={`px-5 mb-4 transition-all duration-700 flex-shrink-0 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-6 h-[2.5px] bg-orange rounded-full"></div>
            <span className="text-orange text-[8px] font-mono tracking-[0.1em] font-black uppercase">Recruit Info</span>
          </div>
          <h2 className="text-xl font-sans font-black text-navy leading-tight">募集要項</h2>
        </div>

        <div ref={scrollRef} className="flex-1 flex overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 gap-3 items-center pb-2">
            {recruitCards.map((card, index) => (
                <div 
                    key={card.id}
                    className="relative flex-shrink-0 snap-center w-[80vw] max-w-[280px] bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col p-5 transition-all duration-500 ease-out"
                    style={{ opacity: isActive ? 1 : 0, transform: isActive ? 'scale(1)' : 'scale(0.96)', transitionDelay: `${index * 150}ms` }}
                >
                    <div className="flex items-center gap-1.5 mb-4 opacity-30">
                        <card.icon size={12} />
                        <span className="text-[8px] font-mono font-black tracking-widest">{card.category}</span>
                    </div>

                    <div className="flex-1 flex flex-col justify-center gap-4">
                        {card.items.map((item, i) => (
                            <div key={i}>
                                <span className="inline-block bg-orange/5 text-orange text-[8px] font-black px-1.5 py-0.5 rounded mb-1">{item.label}</span>
                                <p className="text-base font-black text-navy leading-tight">{item.value}</p>
                                <p className="text-[9px] text-gray-400 font-bold mt-0.5">{item.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <div className="w-1 flex-shrink-0"></div>
        </div>

        <div className="px-5 mt-2 flex flex-col gap-3">
            <div className="flex justify-center items-center gap-1 h-3">
                {recruitCards.map((_, idx) => (
                    <div key={idx} className={`h-1 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-5 bg-orange' : 'w-1 bg-gray-200'}`} />
                ))}
            </div>
            <button onClick={() => alert('PDFダウンロード')} className="w-full py-2 bg-white border border-navy/20 rounded-lg flex items-center justify-center gap-2 text-[8px] font-black text-navy active:bg-navy active:text-white shadow-sm transition-all">
              <Download size={12} />採用ハンドブック(PDF)
            </button>
        </div>
      </div>
    </Section>
  );
};