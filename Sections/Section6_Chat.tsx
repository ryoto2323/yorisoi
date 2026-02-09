
import React, { useState, useEffect, useRef } from 'react';
import { Section } from './Section';
import { MessageCircle, Image as ImageIcon, CheckCheck, Sparkles } from 'lucide-react';

// --- Types ---
type MessageType = 'text' | 'image' | 'system' | 'stamp';

interface Message {
  id: string;
  senderId: 'me' | 'other' | 'system';
  name?: string;
  avatar?: string;
  content: string; // text or image url
  type: MessageType;
  time: string;
  reaction?: string;
}

interface Story {
  id: number;
  title: string;
  scenarioLabel: string;
  scenarioDesc: string;
  participants: string;
  bgImage: string;
  themeColor: string;
  messages: Message[];
}

const STORIES: Story[] = [
  {
    id: 1,
    title: "挫折と救済の夜",
    scenarioLabel: "SCENE 01: 心理的安全性",
    scenarioDesc: "失敗しても、見捨てない文化。",
    participants: "Kenta (新卒) & Manager",
    bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    themeColor: "bg-blue-500",
    messages: [
      { id: '1-1', senderId: 'me', name: 'Kenta', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop', content: 'お疲れ様です。今日の商談もダメでした...。\n向いてないかもしれません。', type: 'text', time: '22:15' },
      { id: '1-2', senderId: 'other', name: 'Manager', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop', content: '今は考えるな。今日は帰って寝ろ。', type: 'text', time: '22:17' },
      { id: '1-3', senderId: 'other', name: 'Manager', content: '明日の朝、俺がロープレ見るから。', type: 'text', time: '22:18' },
      { id: '1-4', senderId: 'system', content: '翌日 19:00', type: 'system', time: '' },
      { id: '1-5', senderId: 'me', name: 'Kenta', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop', content: '田中さん！契約取れました！！（泣）', type: 'text', time: '19:02' },
      { id: '1-6', senderId: 'other', name: 'Manager', content: '👍', type: 'stamp', time: '19:03', reaction: '❤️ 4' },
      { id: '1-7', senderId: 'other', name: 'Manager', content: 'な？ 言ったろ。', type: 'text', time: '19:03' },
    ]
  },
  {
    id: 2,
    title: "お節介の連鎖",
    scenarioLabel: "SCENE 02: チームワーク",
    scenarioDesc: "自分の数字より、仲間の成功。",
    participants: "Sales Team All",
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    themeColor: "bg-orange",
    messages: [
      { id: '2-1', senderId: 'other', name: 'Misaki', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop', content: '【至急】Bエリアの学区詳しい人！\nお客様が気にしてて💦', type: 'text', time: '14:00' },
      { id: '2-2', senderId: 'me', name: 'You', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop', content: '僕そこ地元です！電話代わります？', type: 'text', time: '14:01' },
      { id: '2-3', senderId: 'other', name: 'Sato', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', content: '去年のデータ送りました📄', type: 'text', time: '14:01' },
      { id: '2-4', senderId: 'other', name: 'Misaki', content: 'みんな早すぎ笑 助かる！！😭', type: 'text', time: '14:05', reaction: '🔥 8' },
      { id: '2-5', senderId: 'other', name: 'Boss', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop', content: 'これがYorisoiのスピード感だな👏', type: 'text', time: '14:10' },
    ]
  }
];

const ChatBubble: React.FC<{ msg: Message; isVisible: boolean; delay: number }> = ({ msg, isVisible, delay }) => {
    const isMe = msg.senderId === 'me';
    
    if (msg.type === 'system') {
        return (
            <div className={`flex justify-center my-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: `${delay}ms` }}>
                <span className="bg-black/30 backdrop-blur-md text-white/90 text-[8px] px-3 py-0.5 rounded-full font-bold tracking-widest border border-white/10 shadow-sm">{msg.content}</span>
            </div>
        );
    }

    return (
        <div 
            className={`flex w-full mb-3 ${isMe ? 'justify-end' : 'justify-start'} transition-all duration-500 ease-out`}
            style={{ 
                opacity: isVisible ? 1 : 0, 
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.95)',
                transitionDelay: `${delay}ms` 
            }}
        >
            {!isMe && (
                <div className="flex-shrink-0 mr-2 mt-1">
                    <div className="w-7 h-7 rounded-full bg-gray-300 overflow-hidden border border-white/20 shadow-md">
                        <img src={msg.avatar} alt={msg.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                    </div>
                </div>
            )}

            <div className={`max-w-[85%] flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                {!isMe && <span className="text-[8px] text-white/80 mb-0.5 ml-1 font-bold tracking-wide drop-shadow-md">{msg.name}</span>}

                <div 
                    className={`
                        relative px-3 py-2 shadow-sm
                        ${msg.type === 'stamp' ? 'bg-transparent shadow-none p-0' : 
                          isMe 
                            ? 'bg-gradient-to-br from-orange/90 to-red-500/90 text-white rounded-2xl rounded-tr-none border border-white/10' 
                            : 'bg-white/95 md:bg-white/90 text-navy rounded-2xl rounded-tl-none border border-white/10 md:backdrop-blur-md'}
                    `}
                >
                    {msg.type === 'stamp' ? (
                        <div className="text-5xl animate-[bounce_1s_infinite] drop-shadow-xl">{msg.content}</div>
                    ) : (
                        <p className="text-[11px] leading-relaxed whitespace-pre-wrap font-medium">{msg.content}</p>
                    )}
                    
                    <div className={`absolute bottom-0 flex items-center gap-0.5 ${isMe ? '-left-7' : '-right-7'} ${msg.type === 'stamp' ? 'bottom-2' : ''}`}>
                        {isMe && <span className="text-[7px] text-white/70 font-bold scale-90 origin-right">Read</span>}
                        <span className="text-[7px] text-white/60 font-mono scale-90 origin-left">{msg.time}</span>
                    </div>
                </div>

                {msg.reaction && (
                    <div className={`mt-[-6px] z-10 bg-white border border-gray-100 rounded-full px-1.5 py-0.5 shadow-md flex items-center gap-0.5 ${isMe ? 'mr-1' : 'ml-1'} animate-[pop_0.3s_ease-out]`}>
                        <span className="text-[8px]">{msg.reaction}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export const Section6_Chat: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const [activeStoryId, setActiveStoryId] = useState(1);
  const [visibleCount, setVisibleCount] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeStory = STORIES.find(s => s.id === activeStoryId) || STORIES[0];

  useEffect(() => {
    if (!isActive) {
        setVisibleCount(0);
        return;
    }
    setVisibleCount(0);
    let timer: ReturnType<typeof setTimeout>;
    let current = 0;
    
    const playNext = () => {
        if (current < activeStory.messages.length) {
            current++;
            setVisibleCount(current);
            const nextDelay = 1200 + Math.random() * 500; 
            timer = setTimeout(playNext, nextDelay);
        }
    };

    timer = setTimeout(playNext, 600);
    return () => clearTimeout(timer);
  }, [isActive, activeStoryId]);

  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior: 'smooth'
        });
    }
  }, [visibleCount]);

  return (
    <Section id={6} isActive={isActive} bgOverlay="bg-black/60" className="overflow-hidden">
      
      {/* Immersive Background */}
      {STORIES.map((story) => (
          <div 
            key={story.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out pointer-events-none ${activeStoryId === story.id && isActive ? 'opacity-100' : 'opacity-0'}`}
          >
              <div className="absolute inset-0 bg-navy/60 z-10 backdrop-blur-[2px]"></div>
              <img src={story.bgImage} alt="background" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
      ))}

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

      <div className="flex flex-col h-full relative z-20 pt-16 pb-28 px-5">
        
        <div className={`mb-4 flex flex-col flex-shrink-0 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
            <div className="flex items-center gap-2 mb-3 self-start bg-white/10 md:backdrop-blur-xl rounded-full px-3 py-1 border border-white/20 shadow-lg">
                 <Sparkles size={10} className="text-yellow-300" />
                 <span className="text-[9px] font-bold text-white tracking-wide uppercase">{activeStory.scenarioLabel}</span>
            </div>

            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-white/20 to-white/5 md:backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl">
                        <MessageCircle size={18} className="text-white" />
                    </div>
                    <div>
                        <h2 className="text-white font-bold text-base leading-none drop-shadow-md mb-1.5">{activeStory.title}</h2>
                        <div className="flex items-center gap-1.5 text-white/80 text-[10px] font-mono">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                            {activeStory.participants}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex-1 overflow-hidden relative rounded-[2rem] md:backdrop-blur-2xl bg-white/10 md:bg-white/5 border border-white/15 shadow-2xl flex flex-col">
             <div 
                ref={scrollRef}
                className="flex-1 overflow-y-auto px-4 py-4 no-scrollbar relative"
             >
                {activeStory.messages.map((msg, index) => (
                    <ChatBubble 
                        key={msg.id} 
                        msg={msg} 
                        isVisible={index < visibleCount} 
                        delay={0}
                    />
                ))}

                {/* Typing Dots */}
                {visibleCount < activeStory.messages.length && visibleCount > 0 && (
                    <div className="flex items-center gap-1 ml-10 mt-1 opacity-60">
                        <div className="w-1.5 h-1.5 bg-white/80 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-1.5 h-1.5 bg-white/80 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-1.5 h-1.5 bg-white/80 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                )}
                <div className="h-16"></div>
             </div>

             <div className="absolute bottom-0 left-0 w-full p-3 bg-black/40 md:bg-black/20 md:backdrop-blur-md border-t border-white/10 flex items-center gap-3 z-20">
                 <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 transition-colors">
                     <ImageIcon size={16} />
                 </div>
                 <div className="flex-1 h-9 bg-black/20 rounded-full px-4 flex items-center text-[10px] text-white/40 border border-white/5">
                     メッセージを入力...
                 </div>
                 <div className={`w-9 h-9 rounded-full ${activeStory.themeColor} flex items-center justify-center text-white shadow-glow active:scale-90 transition-transform`}>
                     <CheckCheck size={16} />
                 </div>
             </div>
        </div>

        <div className={`mt-5 flex flex-col items-center gap-3 transition-all duration-1000 delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-white/90 text-[11px] font-bold tracking-wider text-center drop-shadow-md">
                 {activeStory.scenarioDesc}
            </p>

            <div className="flex gap-2 overflow-x-auto no-scrollbar w-full justify-center pb-2 overflow-y-hidden">
                {STORIES.map((story) => (
                    <button
                        key={story.id}
                        onClick={() => setActiveStoryId(story.id)}
                        className={`
                            flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300
                            ${activeStoryId === story.id 
                                ? 'bg-white text-navy border-white shadow-xl scale-100 font-bold' 
                                : 'bg-black/50 text-white/70 border-white/10 md:backdrop-blur-md scale-95 hover:bg-black/50'}
                        `}
                    >
                        <div className={`w-2 h-2 rounded-full ${story.themeColor}`}></div>
                        <span className="text-[9px] whitespace-nowrap">{story.title}</span>
                    </button>
                ))}
            </div>
        </div>

      </div>
    </Section>
  );
};
