import React from 'react';
import { Section } from './Section';
import { Handshake, MapPin } from 'lucide-react';

interface Section5_WhyNowProps {
  isActive: boolean;
}

export const Section5_WhyNow: React.FC<Section5_WhyNowProps> = ({ isActive }) => {
  return (
    <Section 
      id={5} 
      isActive={isActive}
      bgOverlay="bg-white/95"
    >
      {/* Background: Intelligent Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
            backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)',
            backgroundSize: '24px 24px'
        }}
      ></div>

      <div className="flex flex-col h-full px-6 pt-24 pb-20 relative z-10">
          
          {/* Header - Centered & Balanced */}
          <div className={`flex flex-col items-center text-center mb-8 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex items-center gap-2 mb-4 bg-orange/10 px-4 py-1.5 rounded-full">
                <div className="w-2 h-2 bg-orange rounded-full animate-pulse"></div>
                <span className="text-orange text-[10px] font-mono tracking-[0.2em] font-black">WHY NOW?</span>
            </div>

            <h2 className="text-[32px] font-sans font-black text-navy leading-tight relative z-10">
                なぜ今、<br/>増員するのか？
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-orange rounded-full"></div>
            </h2>
          </div>
          
          <div className="flex-1 flex flex-col justify-center gap-5">
            
            {/* Reason Card 1 */}
            <div 
                className={`bg-white rounded-2xl p-6 shadow-card border-l-[6px] border-orange flex items-center gap-5 transition-all duration-700 delay-200 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            >
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center shrink-0">
                    <Handshake size={32} className="text-orange" strokeWidth={2.5} />
                </div>
                <div>
                    <span className="text-xs text-gray-400 font-bold block mb-1 tracking-wider">REASON 01</span>
                    <h3 className="text-2xl font-black text-navy leading-none tracking-tight">
                        既存顧客からの<br/>紹介増加
                    </h3>
                </div>
            </div>

            {/* Reason Card 2 */}
            <div 
                className={`bg-white rounded-2xl p-6 shadow-card border-l-[6px] border-blue flex items-center gap-5 transition-all duration-700 delay-400 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            >
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={32} className="text-blue" strokeWidth={2.5} />
                </div>
                <div>
                    <span className="text-xs text-gray-400 font-bold block mb-1 tracking-wider">REASON 02</span>
                    <h3 className="text-2xl font-black text-navy leading-none tracking-tight">
                        新規エリアへの<br/>展開拡大
                    </h3>
                </div>
            </div>

            {/* Emphasis Box: No Cold Calling - Stronger Design */}
            <div 
                className={`mt-4 bg-[#FEF2F2] rounded-3xl p-7 text-center border-2 border-[#D9534F]/20 relative overflow-hidden transition-all duration-1000 delay-700 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
                {/* Decorative background circle */}
                <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-[#D9534F]/10 rounded-full blur-2xl pointer-events-none"></div>

                <p className="text-xl font-black text-navy mb-3 relative z-10 leading-relaxed">
                    飛び込み営業は、<br/>
                    <span className="text-[#D9534F] text-3xl block mt-1 drop-shadow-sm">一切行いません。</span>
                </p>
                <p className="text-xs font-bold text-gray-600 leading-relaxed relative z-10">
                    マーケティングチームが集客した<br/>
                    『反響』への提案に集中できます。
                </p>
            </div>

          </div>
      </div>
    </Section>
  );
};