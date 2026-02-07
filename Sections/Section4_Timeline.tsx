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

  // Handle Scroll to update pagination dots
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
        const scrollPosition = container.scrollLeft;
        const cardWidth = container.offsetWidth * 0.85; // Approximate card width + gap
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
      <div className="flex flex-col h-full pt-24 pb-28 relative z-10 overflow-hidden">
        
        {/* Header */}
        <div className={`px-6 mb-6 transition-all duration-700 flex-shrink-0 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[4px] bg-orange rounded-full"></div>
            <span className="text-orange text-[10px] font-mono tracking-[0.2em] font-black">1 DAY FLOW</span>
          </div>
          <h2 className="text-3xl font-sans font-black text-navy leading-tight">
            不動産営業<br/>
            『入社1年目』の<span className="text-blue">リアル</span>
          </h2>
        </div>

        {/* Horizontal Card Carousel */}
        <div 
          ref={scrollRef}
          className="flex-1 flex overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 gap-5 items-center pb-4"
        >
           {timelineData.map((item, index) => (
             <div 
               key={item.id}
               className={`
                 relative flex-shrink-0 snap-center
                 w-[85vw] max-w-[320px] aspect-square
                 bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100
                 flex flex-col
                 transition-all duration-500
               `}
               style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'scale(1)' : 'scale(0.95)',
                  transitionDelay: `${index * 100}ms`
               }}
             >
                {/* Top Half: Image */}
                <div className="h-1/2 w-full relative overflow-hidden group">
                   <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent flex items-end p-4">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                         <Clock size={14} className="text-orange" />
                         <span className="text-sm font-mono font-black text-navy tracking-widest">{item.time}</span>
                      </div>
                   </div>
                </div>

                {/* Bottom Half: Content */}
                <div className="h-1/2 w-full p-6 flex flex-col justify-center bg-white relative">
                   {/* Decorative Number */}
                   <div className="absolute top-4 right-6 text-[40px] font-sans font-black text-gray-100 leading-none select-none">
                      {item.id.toString().padStart(2, '0')}
                   </div>

                   <h3 className="text-xl font-bold text-navy mb-3 relative z-10">
                      {item.title}
                   </h3>
                   <p className="text-sm text-gray-500 font-medium leading-relaxed whitespace-pre-line relative z-10">
                      {item.desc}
                   </p>
                </div>
             </div>
           ))}
           {/* Spacer for right padding */}
           <div className="w-1 flex-shrink-0" />
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 h-8 mt-2">
            {timelineData.map((_, idx) => (
                <div 
                    key={idx}
                    className={`
                        h-2 rounded-full transition-all duration-300
                        ${activeIndex === idx ? 'w-8 bg-orange' : 'w-2 bg-gray-300'}
                    `}
                />
            ))}
        </div>

      </div>
    </Section>
  );
};