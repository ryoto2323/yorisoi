import React, { useRef, useState, useEffect } from 'react';
import { Section } from './Section';
import { Clock } from 'lucide-react';

const timelineData = [
  { 
    id: 1,
    time: '09:00', 
    title: '出社・チームMTG', 
    desc: '本日の目標とKPIの確認。\nチームで共有し、士気を高めます。',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 2,
    time: '10:30', 
    title: '現地調査', 
    desc: '担当エリアをiPadで撮影・巡回。\n街の変化を自分の目でチェック！',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 3,
    time: '13:00', 
    title: 'ランチ', 
    desc: '先輩おすすめの定食屋へ。\nリフレッシュも大切な仕事！',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 4,
    time: '14:00', 
    title: '提案資料作成', 
    desc: 'CRMツールで顧客データを分析し、\n最適な物件をピックアップ！',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 5,
    time: '16:00', 
    title: '内覧案内', 
    desc: '購入検討のお客様をご案内。\n物件の魅力を現地で伝えます。',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 6,
    time: '18:30', 
    title: '日報入力・退社', 
    desc: '残業は原則なし。\nメリハリをつけて働き、明日に備えます。',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop'
  },
];

interface Section4_TimelineProps {
  isActive: boolean;
}

export const Section4_Timeline: React.FC<Section4_TimelineProps> = ({ isActive }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
        const scrollPosition = container.scrollLeft;
        const cardWidth = container.offsetWidth * 0.75; 
        const index = Math.round(scrollPosition / cardWidth);
        setActiveIndex(Math.min(Math.max(index, 0), timelineData.length - 1));
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Section 
      id={4} 
      isActive={isActive}
      bgOverlay="bg-gray-50/95"
    >
      <div className="flex flex-col h-full pt-16 pb-16 relative z-10 overflow-hidden">
        
        {/* Header - Scaled down */}
        <div className={`px-4 mb-4 transition-all duration-700 flex-shrink-0 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-[3px] bg-orange rounded-full"></div>
            <span className="text-orange text-[8px] font-mono tracking-[0.1em] font-black">1 DAY FLOW</span>
          </div>
          <h2 className="text-xl font-sans font-black text-navy leading-tight">
            不動産営業<br/>
            『入社1年目』の<span className="text-blue">リアル</span>
          </h2>
        </div>

        {/* Horizontal Card Carousel - Smaller Cards */}
        <div 
          ref={scrollRef}
          className="flex-1 flex overflow-x-auto snap-x snap-mandatory no-scrollbar px-4 gap-4 items-center pb-2"
        >
           {timelineData.map((item, index) => (
             <div 
               key={item.id}
               className={`
                 relative flex-shrink-0 snap-center
                 w-[75vw] max-w-[280px] aspect-[4/5]
                 bg-white rounded-[1.5rem] shadow-lg overflow-hidden border border-gray-100
                 flex flex-col
                 transition-all duration-500
               `}
               style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'scale(1)' : 'scale(0.97)',
                  transitionDelay: `${index * 100}ms`
               }}
             >
                {/* Top Half: Image - Reduced height ratio */}
                <div className="h-[40%] w-full relative overflow-hidden group">
                   <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent flex items-end p-3">
                      <div className="bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center gap-1.5">
                         <Clock size={10} className="text-orange" />
                         <span className="text-[10px] font-mono font-black text-navy tracking-widest">{item.time}</span>
                      </div>
                   </div>
                </div>

                {/* Bottom Half: Content - Scaled down text */}
                <div className="h-[60%] w-full p-5 flex flex-col justify-center bg-white relative">
                   <div className="absolute top-3 right-5 text-[28px] font-sans font-black text-gray-50 leading-none select-none">
                      {item.id.toString().padStart(2, '0')}
                   </div>

                   <h3 className="text-base font-bold text-navy mb-2 relative z-10">
                      {item.title}
                   </h3>
                   <p className="text-[11px] text-gray-400 font-bold leading-relaxed whitespace-pre-line relative z-10">
                      {item.desc}
                   </p>
                </div>
             </div>
           ))}
           <div className="w-1 flex-shrink-0" />
        </div>

        {/* Pagination Dots - Smaller */}
        <div className="flex justify-center items-center gap-1.5 h-6 mt-1">
            {timelineData.map((_, idx) => (
                <div 
                    key={idx}
                    className={`
                        h-1.5 rounded-full transition-all duration-300
                        ${activeIndex === idx ? 'w-6 bg-orange' : 'w-1.5 bg-gray-300'}
                    `}
                />
            ))}
        </div>

      </div>
    </Section>
  );
};