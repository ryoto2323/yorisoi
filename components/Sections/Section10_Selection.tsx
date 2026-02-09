
import React from 'react';
import { Section } from './Section';

interface Section10_SelectionProps {
  isActive: boolean;
}

export const Section10_Selection: React.FC<Section10_SelectionProps> = ({ isActive }) => {
  return (
    <Section id={10} isActive={isActive} bgOverlay="bg-[#FFFBF5]">
      {/* Background Typography */}
      <div className="absolute right-[-20%] top-[20%] text-[120px] font-black text-navy/5 font-mono rotate-90 pointer-events-none select-none tracking-tighter">
          FLOW
      </div>

      {/* Removed justify-center to allow natural flow from top, preventing large gaps */}
      <div className="flex flex-col h-full pt-24 pb-32 px-6 relative z-10">
         
         {/* Header */}
         <div className={`mb-16 transition-all duration-1000 ease-soft ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-2 mb-4 opacity-50">
                <span className="w-8 h-[1px] bg-navy"></span>
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase">SELECTION POLICY</span>
            </div>
            
            <h2 className="text-[32px] font-black text-navy leading-none mb-5 font-sans tracking-tight">
                <span className="opacity-30 line-through decoration-2 decoration-red-500">INTERVIEW</span>
                <br/>
                <span className="text-orange">DIALOGUE.</span>
            </h2>
            <p className="text-xs font-bold text-navy/70 leading-relaxed max-w-[280px]">
                上辺だけの志望動機はいりません。<br/>
                コーヒーを飲みながら、<br/>
                互いの「未来」を擦り合わせましょう。
            </p>
         </div>

         {/* The Flow Chart (Organic Style) */}
         <div className="relative pl-2">
            {/* The Hand-drawn Line */}
            <svg 
                className="absolute left-[7px] top-3 bottom-0 h-full w-10 pointer-events-none overflow-visible"
                style={{ height: '100%' }}
            >
                <path 
                    d="M1,0 Q5,50 1,100 Q-3,150 1,200" 
                    fill="none" 
                    stroke="#E5E7EB" 
                    strokeWidth="2" 
                    strokeDasharray="4 4"
                    vectorEffect="non-scaling-stroke"
                />
                <path 
                    d="M1,0 Q5,50 1,100 Q-3,150 1,200" 
                    fill="none" 
                    stroke="#FF6B00" 
                    strokeWidth="2" 
                    className={`transition-all duration-[2000ms] ease-out delay-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                    style={{ strokeDasharray: '220', strokeDashoffset: isActive ? '0' : '220' }}
                    vectorEffect="non-scaling-stroke"
                />
            </svg>

            <div className="space-y-10">
                {/* Step 1 */}
                <div className={`relative pl-10 transition-all duration-1000 delay-500 ease-soft ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                    <div className="absolute left-0 top-1 w-4 h-4 bg-[#FFFBF5] border-2 border-orange rounded-full z-10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-orange rounded-full"></div>
                    </div>
                    <span className="text-[9px] font-mono font-black text-orange mb-1 block tracking-wider">STEP 01</span>
                    <h3 className="text-xl font-bold text-navy tracking-tight">カジュアル面談</h3>
                    <p className="text-[11px] text-gray-500 mt-1 font-medium">私服OK / オンライン可 / 30分</p>
                </div>

                {/* Step 2 */}
                <div className={`relative pl-10 transition-all duration-1000 delay-700 ease-soft ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                    <div className="absolute left-0 top-1 w-4 h-4 bg-[#FFFBF5] border-2 border-orange/60 rounded-full z-10"></div>
                    <span className="text-[9px] font-mono font-black text-orange/60 mb-1 block tracking-wider">STEP 02</span>
                    <h3 className="text-xl font-bold text-navy tracking-tight">カルチャーマッチ面談</h3>
                    <p className="text-[11px] text-gray-500 mt-1 font-medium">オフィス見学 / メンバーとの雑談</p>
                </div>

                {/* Step 3 */}
                <div className={`relative pl-10 transition-all duration-1000 delay-900 ease-soft ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                    <div className="absolute left-0 top-1 w-4 h-4 bg-navy border-2 border-navy rounded-full z-10"></div>
                    <span className="text-[9px] font-mono font-black text-navy mb-1 block tracking-wider">GOAL</span>
                    <h3 className="text-xl font-bold text-navy tracking-tight">内定・オファー</h3>
                    <p className="text-[11px] text-gray-500 mt-1 font-medium">条件提示 / 入社日調整</p>
                </div>
            </div>
         </div>

      </div>
    </Section>
  );
};
