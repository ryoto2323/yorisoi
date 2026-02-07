import React from 'react';
import { Section } from './Section';

interface Section2_AboutProps {
  isActive: boolean;
}

const stats = [
  { label: '平均有休取得率', value: '85', unit: '%', color: 'text-orange', desc: '休みもプロの仕事' },
  { label: '月平均残業時間', value: '22', unit: 'h', color: 'text-blue', desc: '効率化ツール完備' },
  { label: '平均年齢', value: '28.5', unit: '歳', color: 'text-orange', desc: '若手が主役' },
  { label: '新卒3年定着率', value: '92', unit: '%', color: 'text-blue', desc: '放置しない文化' },
];

export const Section2_About: React.FC<Section2_AboutProps> = ({ isActive }) => {
  return (
    <Section 
      id={2} 
      isActive={isActive}
      bgOverlay="bg-cream"
    >
      <div className="flex flex-col h-full px-6 pt-20 pb-24 relative z-10">
        {/* Background Decorations (Geometric shapes) */}
        <div className="absolute top-[15%] left-[-10%] w-60 h-60 border-[20px] border-orange/5 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-40 h-40 bg-blue/5 rounded-full pointer-events-none"></div>

        {/* Header - Compact margin to fit everything */}
        <div className={`mb-2 flex-shrink-0 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
           <div className="flex items-center gap-3 mb-1">
              <div className="w-8 h-[4px] bg-orange rounded-full"></div>
              <span className="text-orange text-[10px] font-mono tracking-[0.2em] font-black">ABOUT US</span>
           </div>
           <h2 className="text-2xl font-sans font-black text-navy leading-tight">
             数字で見る、<br/>
             Yorisoi不動産の<span className="text-blue">実態</span>
           </h2>
        </div>

        {/* Main Content - Balanced layout with larger typography */}
        <div className="flex-1 flex flex-col justify-center w-full max-w-[340px] mx-auto space-y-0">
           {stats.map((stat, index) => {
             const isEven = index % 2 !== 0; // Alternating layout
             
             return (
               <React.Fragment key={index}>
                 {/* Item Container */}
                 <div 
                   className={`
                     relative flex flex-col py-2
                     ${isEven ? 'items-end text-right pr-4' : 'items-start text-left pl-1'} 
                     transition-all duration-700 ease-out
                   `}
                   style={{ 
                     transitionDelay: `${100 + (index * 150)}ms`,
                     opacity: isActive ? 1 : 0, 
                     transform: isActive ? 'translateX(0)' : `translateX(${isEven ? '40px' : '-40px'})`
                   }}
                 >
                    {/* Label & Badge Group */}
                    <div className={`flex flex-col mb-1 relative z-20 ${isEven ? 'items-end' : 'items-start'}`}>
                       {/* 1. Item Name (Reverted to text-xs) */}
                       <p className="text-xs font-bold text-navy tracking-wider mb-0.5">
                         {stat.label}
                       </p>
                       {/* 2. Supplementary Copy (Reverted to text-[11px]) + Badge scaling */}
                       <span className={`text-[11px] font-bold text-gray-500 bg-white/80 border border-gray-100 px-2 py-0.5 rounded shadow-sm whitespace-nowrap`}>
                         {stat.desc}
                       </span>
                    </div>
                    
                    {/* Number Group (Keeping numbers as is) */}
                    <div className="relative leading-none w-fit p-1"> 
                      <span className={`text-8xl font-condensed font-bold ${stat.color} tracking-tighter drop-shadow-sm leading-none block`}>
                        {stat.value}
                      </span>
                      {/* Unit (Keeping unit as is) */}
                      <span className="absolute bottom-2.5 left-[98%] ml-1 text-2xl font-black text-navy opacity-30 font-mono">
                        {stat.unit}
                      </span>
                    </div>
                 </div>

                 {/* Divider */}
                 {index < stats.length - 1 && (
                    <div 
                      className={`w-full border-b border-dashed border-gray-200 opacity-60 my-1 transition-all duration-1000 delay-500 ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
                    />
                 )}
               </React.Fragment>
             );
           })}
        </div>
      </div>
    </Section>
  );
};