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
      {/* Background Grid */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
            backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)',
            backgroundSize: '20px 20px'
        }}
      ></div>

      <div className="flex flex-col h-full px-5 pt-16 pb-12 relative z-10 justify-evenly">
          
          <div className={`flex flex-col items-center text-center transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <div className="inline-flex items-center gap-1.5 mb-2 bg-orange/10 px-3 py-1 rounded-full">
                <div className="w-1.5 h-1.5 bg-orange rounded-full animate-pulse"></div>
                <span className="text-orange text-[7px] font-mono tracking-[0.1em] font-black uppercase">Why Now?</span>
            </div>

            <h2 className="text-2xl font-sans font-black text-navy leading-tight relative z-10">
                なぜ今、<br/>増員するのか？
            </h2>
          </div>
          
          <div className="flex flex-col gap-3 max-w-[300px] mx-auto w-full">
            <div 
                className={`bg-white rounded-xl p-3.5 shadow-sm border-l-4 border-orange flex items-center gap-4 transition-all duration-700 delay-200 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
            >
                <div className="w-10 h-10 bg-orange/10 rounded-full flex items-center justify-center shrink-0">
                    <Handshake size={20} className="text-orange" />
                </div>
                <div>
                    <span className="text-[7px] text-gray-400 font-bold block mb-0.5 tracking-tighter">REASON 01</span>
                    <h3 className="text-base font-black text-navy leading-tight">既存顧客からの紹介増加</h3>
                </div>
            </div>

            <div 
                className={`bg-white rounded-xl p-3.5 shadow-sm border-l-4 border-blue flex items-center gap-4 transition-all duration-700 delay-400 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}
            >
                <div className="w-10 h-10 bg-blue/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-blue" />
                </div>
                <div>
                    <span className="text-[7px] text-gray-400 font-bold block mb-0.5 tracking-tighter">REASON 02</span>
                    <h3 className="text-base font-black text-navy leading-tight">新規エリアへの展開拡大</h3>
                </div>
            </div>

            <div 
                className={`mt-2 bg-[#FEF2F2] rounded-2xl p-4 text-center border border-[#D9534F]/10 relative overflow-hidden transition-all duration-1000 delay-700 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
                <p className="text-base font-black text-navy mb-1.5 relative z-10">
                    飛び込み営業は、<br/>
                    <span className="text-[#D9534F] text-xl block drop-shadow-sm">一切行いません。</span>
                </p>
                <p className="text-[9px] font-bold text-gray-500 leading-relaxed relative z-10">
                    マーケティングチームが集客した<br/>
                    『反響』への提案に集中できます。
                </p>
            </div>
          </div>
      </div>
    </Section>
  );
};