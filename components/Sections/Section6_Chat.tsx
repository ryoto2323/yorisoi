
import React, { useRef, useState, useEffect } from 'react';
import { Section } from './Section';
import { Quote } from 'lucide-react';

const interviews = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    headline: '入社3ヶ月目の\n挫折と涙。',
    text: '断られ続けた1ヶ月、自分の価値がないと落ち込みました。でも上司が毎晩ロープレに付き合ってくれて…初契約の時は二人で泣きました。',
    name: '佐藤 健太',
    role: '入社2年目 / 営業部',
    color: 'text-orange'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    headline: 'おせっかいが、\n私たちの共通言語。',
    text: '誰かが悩んでいると必ず誰かが声をかける場所です。綺麗ごとじゃなく、本気で人を育てる『おせっかい』な社風が好きなんです。',
    name: '鈴木 美咲',
    role: '入社4年目 / リーダー',
    color: 'text-blue'
  }
];

// Define missing interface for component props
interface Section6_ChatProps {
  isActive: boolean;
}

export const Section6_Chat: React.FC<Section6_ChatProps> = ({ isActive }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
        const scrollPosition = container.scrollLeft;
        const cardWidth = container.offsetWidth * 0.8; 
        const index = Math.round(scrollPosition / cardWidth);
        setActiveIndex(Math.min(Math.max(index, 0), interviews.length - 1));
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Section id={6} isActive={isActive} bgOverlay="bg-gray-50">
      <div className="flex flex-col h-full pt-16 pb-16 relative z-10 overflow-hidden">
        
        <div className={`px-5 mb-4 transition-all duration-700 flex-shrink-0 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-[2.5px] bg-orange rounded-full"></div>
            <span className="text-orange text-[8px] font-mono tracking-[0.1em] font-black">REAL VOICE</span>
          </div>
          <h2 className="text-xl font-sans font-black text-navy leading-tight">
            一人じゃ越えられない壁も、<br/>
            <span className="text-orange">ここなら越えられる。</span>
          </h2>
        </div>

        <div ref={scrollRef} className="flex-1 flex overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 gap-4 items-center pb-2">
            {interviews.map((item, index) => (
                <div 
                    key={item.id}
                    className="relative flex-shrink-0 snap-center w-[80vw] max-w-[280px] h-[75%] bg-white rounded-[1.5rem] shadow-lg overflow-hidden border border-gray-100 flex flex-col transition-all duration-500 ease-out"
                    style={{ opacity: isActive ? 1 : 0, transform: isActive ? 'scale(1)' : 'scale(0.96)', transitionDelay: `${index * 150}ms` }}
                >
                    {/* Image Area Increased to 55% */}
                    <div className="h-[55%] w-full relative overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover object-top" />
                        <div className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full text-navy shadow-sm">
                            <Quote size={14} className={item.color} fill="currentColor" />
                        </div>
                    </div>

                    <div className="h-[45%] p-4 flex flex-col justify-between bg-white">
                        <div>
                            <h3 className="text-sm font-black text-navy leading-tight mb-2 whitespace-pre-line">
                                {item.headline}
                            </h3>
                            <p className="text-[10px] text-gray-500 font-bold leading-relaxed line-clamp-3">
                                {item.text}
                            </p>
                        </div>

                        <div className="flex items-center justify-between border-t border-gray-50 pt-2">
                            <div>
                                <p className="text-[10px] font-black text-navy">{item.name}</p>
                                <p className="text-[8px] font-bold text-gray-400">{item.role}</p>
                            </div>
                            <div className={`w-1.5 h-1.5 rounded-full ${item.color.replace('text-', 'bg-')}`}></div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="w-1 flex-shrink-0"></div>
        </div>

        <div className="flex justify-center items-center gap-1.5 mt-1 h-4">
            {interviews.map((_, idx) => (
                <div key={idx} className={`h-1 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-4 bg-navy' : 'w-1 bg-gray-200'}`} />
            ))}
        </div>
      </div>
    </Section>
  );
};
