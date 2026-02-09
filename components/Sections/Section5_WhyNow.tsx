
import React from 'react';
import { Section } from './Section';
import { UserPlus, Maximize2, Layers } from 'lucide-react';

interface Section5_WhyNowProps {
  isActive: boolean;
}

const DimensionLine: React.FC<{ 
    label: string, 
    value: string, 
    percent: number, 
    isCritical: boolean, 
    index: number, 
    isActive: boolean 
}> = ({ label, value, percent, isCritical, index, isActive }) => (
    <div 
        className="relative py-4 group"
        style={{ 
            opacity: isActive ? 1 : 0, 
            transform: isActive ? 'translateX(0)' : 'translateX(-20px)',
            transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms`
        }}
    >
        <div className="flex justify-between items-baseline mb-2">
            <span className="text-[10px] font-black text-navy/40 tracking-[0.2em] uppercase">{label}</span>
            <div className="flex items-baseline gap-1">
                <span className={`text-[24px] font-mono font-black leading-none tracking-tighter ${isCritical ? 'text-red-500' : 'text-navy'}`}>
                    {value.split(' ')[0]}
                </span>
                <span className="text-[10px] font-bold text-navy/30">{value.split(' ')[1]}</span>
            </div>
        </div>
        
        <div className="relative h-[1px] w-full bg-navy/10">
            {/* The Main Progress Line */}
            <div 
                className={`absolute inset-y-0 left-0 ${isCritical ? 'bg-red-500' : 'bg-orange'} transition-all duration-[2000ms] cubic-bezier(0.16, 1, 0.3, 1) delay-500`}
                style={{ width: isActive ? `${percent}%` : '0%' }}
            />
            {/* Dimensional Ticks */}
            <div className="absolute top-[-3px] left-0 h-[7px] w-[1px] bg-navy/40" />
            <div className="absolute top-[-3px] right-0 h-[7px] w-[1px] bg-navy/40" />
            <div className="absolute top-1/2 left-0 w-full flex justify-around pointer-events-none opacity-20">
                {[...Array(5)].map((_, i) => <div key={i} className="w-[1px] h-[3px] bg-navy" />)}
            </div>
        </div>
    </div>
);

export const Section5_WhyNow: React.FC<Section5_WhyNowProps> = ({ isActive }) => {
  return (
    <Section id={5} isActive={isActive} bgOverlay="bg-[#FDFDFD]">
      
      {/* Background Architectural Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Subtle 40px grid */}
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: 'linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          {/* Large structural border lines */}
          <div className={`absolute top-10 left-10 bottom-10 w-[1px] bg-navy/[0.03] transition-all duration-[2000ms] ${isActive ? 'h-[calc(100%-80px)]' : 'h-0'}`} />
          <div className={`absolute top-10 right-10 bottom-10 w-[1px] bg-navy/[0.03] transition-all duration-[2000ms] ${isActive ? 'h-[calc(100%-80px)]' : 'h-0'}`} />
          
          {/* Vertical Title Overlay */}
          <div className="absolute top-20 right-4 rotate-180 writing-vertical-rl pointer-events-none select-none overflow-hidden h-[300px]">
              <span className={`text-[80px] font-serif font-black text-navy/[0.02] leading-none transition-transform duration-[3000ms] ${isActive ? 'translate-y-0' : 'translate-y-full'}`}>
                  TRUTH
              </span>
          </div>
      </div>

      <div className="flex flex-col h-full relative z-10 px-8 pt-20 pb-28 justify-center">
        
        <div className="md:grid md:grid-cols-2 md:gap-16">
            <div>
                {/* --- Phase 1: The Confession --- */}
                <div className={`flex-shrink-0 mb-8 transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-[10px] font-mono font-black text-orange tracking-[0.5em] uppercase">Context_Analysis</span>
                        <div className="flex-1 h-[1px] bg-navy/[0.08]"></div>
                    </div>
                    
                    <h2 className="text-[38px] font-black text-navy leading-[1.05] tracking-tighter mb-8 font-sans">
                        なぜ今、<br/>
                        <span className="text-orange relative inline-block italic">
                            「増員」
                        </span>
                        なのか。
                    </h2>
                    
                    <div className="relative pl-6 border-l-[1px] border-navy/10">
                        <p className="text-[15px] text-navy/70 font-serif font-bold leading-[2.2]">
                            正直に言います。今、私たちの手は足りていません。<br/>
                            お客様の期待に、100%応えられない瞬間がある。
                        </p>
                    </div>
                </div>

                {/* --- Phase 2: Structural Data (The "Blueprint") --- */}
                <div className="flex flex-col justify-start mb-10">
                    <div className="space-y-6 max-w-[320px]">
                        <DimensionLine label="新規相談の待機件数" value="12 件" percent={95} isCritical={true} index={0} isActive={isActive} />
                        <DimensionLine label="内見予約の充足率" value="98.2 %" percent={78} isCritical={false} index={1} isActive={isActive} />
                        <DimensionLine label="担当者1人あたりの対応" value="120 %" percent={90} isCritical={true} index={2} isActive={isActive} />
                    </div>

                    <div className={`mt-10 transition-all duration-1000 delay-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-[15px] font-handwritingJP font-bold text-navy leading-tight border-b border-navy/[0.05] pb-4">
                            「1人の限界」が、<br/>
                            <span className="text-[24px] text-red-500 tracking-tighter">優しさの限界</span>になってはいけない。
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-end">
                {/* --- Phase 3: Actionable Grid (The "Components") --- */}
                <div className="grid grid-cols-2 gap-px bg-navy/[0.08] rounded-2xl overflow-hidden border border-navy/[0.08] mt-auto">
                    
                    {/* Cell 01 */}
                    <div className={`bg-white p-6 transition-all duration-700 delay-[800ms] ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="flex flex-col h-full justify-between">
                            <Maximize2 size={14} className="text-navy/20 mb-6" />
                            <div>
                                <span className="text-[8px] font-black text-navy/30 tracking-[0.3em] uppercase block mb-1">Strategy</span>
                                <p className="text-[16px] font-black text-navy leading-none">選ぶための<br/><span className="text-orange">「増員」</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Cell 02 */}
                    <div className={`bg-white p-6 transition-all duration-700 delay-[900ms] ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="flex flex-col h-full justify-between">
                            <Layers size={14} className="text-navy/20 mb-6" />
                            <div>
                                <span className="text-[8px] font-black text-navy/30 tracking-[0.3em] uppercase block mb-1">Culture</span>
                                <p className="text-[16px] font-black text-navy leading-none">持てる<br/><span className="text-orange">「働き方」</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Full Width Action */}
                    <div className={`col-span-2 bg-navy p-5 flex items-center justify-between transition-all duration-700 delay-[1000ms] ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="flex flex-col">
                            <span className="text-[8px] font-black text-white/30 tracking-[0.4em] uppercase mb-1">Invitation</span>
                            <p className="text-[14px] font-black text-white">あなたの力が、最高のサービスへ。</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white active:scale-90 transition-transform">
                            <UserPlus size={18} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>

      <style>{`
        .writing-vertical-rl { writing-mode: vertical-rl; }
      `}</style>
    </Section>
  );
};
