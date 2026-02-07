import React, { useRef, useState, useEffect } from 'react';
import { Section } from './Section';
import { Quote } from 'lucide-react';

const interviews = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    headline: '入社3ヶ月目の\n挫折と涙。',
    text: '断られ続けた1ヶ月間、自分の価値がないと落ち込みました。でも、上司が毎晩ロープレに付き合ってくれて…初契約の時は、二人で泣きました。',
    name: '佐藤 健太',
    role: '入社2年目 / 営業部',
    color: 'text-orange'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    headline: 'おせっかいが、\n私たちの共通言語。',
    text: '誰かが悩んでいると、必ず誰かが声をかける。そんな場所です。綺麗ごとじゃなく、本気で人を育てる『おせっかい』な社風が好きなんです。',
    name: '鈴木 美咲',
    role: '入社4年目 / チームリーダー',
    color: 'text-blue'
  }
];

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
        const cardWidth = container.offsetWidth * 0.85; 
        const index = Math.round(scrollPosition / cardWidth);
        setActiveIndex(Math.min(Math.max(index, 0), interviews.length - 1));
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Section 
      id={6} 
      isActive={isActive}
      bgOverlay="bg-gray-50"
    >
      <div className="flex flex-col h-full pt-20 pb-24 relative z-10 overflow-hidden">
        
        <div className={`px-6 mb-6 transition-all duration-700 flex-shrink-0 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[4px] bg-orange rounded-full"></div>
            <span className="text-orange text-[10px] font-mono tracking-[0.2em] font-black">REAL VOICE</span>
          </div>
          <h2 className="text-2xl font-sans font-black text-navy leading-snug">
            一人じゃ越えられない壁も、<br/>
            <span className="text-orange border-b-4 border-orange/30 pb-1">ここなら越えられる。</span>
          </h2>
        </div>

        <div 
            ref={scrollRef}
            className="flex-1 flex overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 gap-5 items-start pb-4"
        >
            {interviews.map((item, index) => (
                <div 
                    key={item.id}
                    className={`
                        relative flex-shrink-0 snap-center
                        w-[85vw] max-w-[320px] h-full max-h-[500px]
                        bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100
                        flex flex-col
                        transition-all duration-700 ease-out
                    `}
                    style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                        transitionDelay: `${index * 200}ms`
                    }}
                >
                    <div className="h-[45%] w-full relative overflow-hidden group">
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-2 rounded-full text-navy shadow-sm">
                            <Quote size={20} className={item.color} fill="currentColor" />
                        </div>
                    </div>

                    <div className="flex-1 p-6 flex flex-col relative">
                        <h3 className="text-xl font-black text-navy leading-tight mb-4 whitespace-pre-line">
                            {item.headline}
                        </h3>

                        <p className="text-sm text-gray-600 font-medium leading-relaxed mb-6 flex-1 overflow-y-auto">
                            {item.text}
                        </p>

                        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-black text-navy">{item.name}</p>
                                <p className="text-[10px] font-bold text-gray-400">{item.role}</p>
                            </div>
                            <div className={`w-2 h-2 rounded-full ${item.color.replace('text-', 'bg-')}`}></div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="w-2 flex-shrink-0"></div>
        </div>

        <div className="flex justify-center items-center gap-2 h-6 mt-2">
            {interviews.map((_, idx) => (
                <div 
                    key={idx}
                    className={`
                        h-1.5 rounded-full transition-all duration-300
                        ${activeIndex === idx ? 'w-6 bg-navy' : 'w-1.5 bg-gray-300'}
                    `}
                />
            ))}
        </div>

      </div>
    </Section>
  );
};