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
      { label: '給与', value: '月給30万円〜', note: '（固定残業代45時間含）＋インセンティブ\n※試用期間3ヶ月（条件変更なし）' },
      { label: '昇給・賞与・手当', value: '昇給年4回 / 賞与年2回', note: '交通費全額、宅建手当(3万)、住宅手当' }
    ]
  },
  {
    id: 2,
    category: 'WORK LIFE BALANCE',
    icon: Clock,
    items: [
      { label: '勤務時間', value: '9:30 〜 18:30', note: '（実働8時間） ※直行直帰推奨' },
      { label: '休日・休暇', value: '年間休日125日', note: '完全週休2日(火・水)\n夏季・年末年始・GW、有給休暇' }
    ]
  },
  {
    id: 3,
    category: 'LOCATION & WELFARE',
    icon: MapPin,
    items: [
      { label: '勤務地', value: '東京本社（渋谷区）', note: 'および都内各拠点\n※転居を伴う転勤なし' },
      { label: '福利厚生', value: '各種社会保険完備', note: '資格取得支援制度 / PC・スマホ貸与' }
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
        const cardWidth = container.offsetWidth * 0.85; 
        const index = Math.round(scrollPosition / cardWidth);
        setActiveIndex(Math.min(Math.max(index, 0), recruitCards.length - 1));
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Section 
      id={9} 
      isActive={isActive}
      bgOverlay="bg-cream"
    >
      <div className="flex flex-col h-full pt-24 pb-28 relative z-10 overflow-hidden">
        
        <div className={`px-6 mb-6 transition-all duration-700 flex-shrink-0 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[4px] bg-orange rounded-full"></div>
            <span className="text-orange text-[10px] font-mono tracking-[0.2em] font-black">RECRUIT INFO</span>
          </div>
          <h2 className="text-2xl font-sans font-black text-navy leading-snug">
            募集要項
          </h2>
        </div>

        <div 
            ref={scrollRef}
            className="flex-1 flex overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 gap-4 items-center pb-4"
        >
            {recruitCards.map((card, index) => (
                <div 
                    key={card.id}
                    className={`
                        relative flex-shrink-0 snap-center
                        w-[85vw] max-w-[340px]
                        bg-white rounded-[2rem] shadow-xl border border-gray-100
                        flex flex-col p-6
                        transition-all duration-500 ease-out
                    `}
                    style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'scale(1)' : 'scale(0.95)',
                        transitionDelay: `${index * 150}ms`
                    }}
                >
                    <div className="flex items-center gap-2 mb-6 opacity-40">
                        <card.icon size={16} className="text-navy" />
                        <span className="text-[10px] font-mono font-black tracking-widest text-navy">{card.category}</span>
                    </div>

                    <div className="flex-1 flex flex-col justify-center gap-6">
                        <div>
                            <span className="inline-block bg-orange/10 text-orange text-xs font-black px-2 py-1 rounded mb-2">
                                {card.items[0].label}
                            </span>
                            <p className="text-xl font-black text-navy leading-tight mb-1">
                                {card.items[0].value}
                            </p>
                            <p className="text-xs text-gray-500 font-medium whitespace-pre-line leading-relaxed">
                                {card.items[0].note}
                            </p>
                        </div>
                        <div className="w-full border-b border-dashed border-gray-200"></div>
                        <div>
                            <span className="inline-block bg-orange/10 text-orange text-xs font-black px-2 py-1 rounded mb-2">
                                {card.items[1].label}
                            </span>
                            <p className="text-xl font-black text-navy leading-tight mb-1">
                                {card.items[1].value}
                            </p>
                            <p className="text-xs text-gray-500 font-medium whitespace-pre-line leading-relaxed">
                                {card.items[1].note}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
            <div className="w-2 flex-shrink-0"></div>
        </div>

        <div className="px-6 mt-4 flex flex-col gap-4">
            <div className="flex justify-center items-center gap-2 h-4">
                {recruitCards.map((_, idx) => (
                    <div key={idx} className={`h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-8 bg-orange' : 'w-2 bg-gray-300'}`} />
                ))}
            </div>
            
            {/* Direction #4: Micro-conversion CTA */}
            <button 
                onClick={() => alert('PDFダウンロード開始（デモ）')}
                className="w-full py-3 bg-white border border-navy rounded-xl flex items-center justify-center gap-2 text-[10px] font-black text-navy active:bg-navy active:text-white transition-all shadow-sm"
            >
              <Download size={14} />
              採用ハンドブック(PDF)をダウンロード
            </button>
        </div>
      </div>
    </Section>
  );
};