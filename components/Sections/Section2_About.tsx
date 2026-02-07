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
      <div className="flex flex-col h-full px-4 relative z-10 justify-evenly py-6">
        {/* Header */}
        <div className={`transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
           <div className="flex items-center gap-3 mb-1">
              <div className="w-6 h-[3px] bg-orange rounded-full"></div>
              <span className="text-orange text-[9px] font-mono tracking-[0.2em] font-black">ABOUT US</span>
           </div>
           <h2 className="text-xl font-sans font-black text-navy leading-tight">
             数字で見る、<br/>
             Yorisoi不動産の<span className="text-blue">実態</span>
           </h2>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-[340px] mx-auto space-y-2">
           {stats.map((stat, index) => {
             const isEven = index % 2 !== 0;
             
             return (
               <React.Fragment key={index}>
                 <div 
                   className={`
                     relative flex flex-col
                     ${isEven ? 'items-end text-right pr-2' : 'items-start text-left pl-2'} 
                     transition-all duration-700 ease-out
                   `}
                   style={{ 
                     transitionDelay: `${100 + (index * 150)}ms`,
                     opacity: isActive ? 1 : 0, 
                     transform: isActive ? 'translateX(0)' : `translateX(${isEven ? '20px' : '-20px'})`
                   }}
                 >
                    <div className={`flex flex-col mb-0.5 relative z-20 ${isEven ? 'items-end' : 'items-start'}`}>
                       <p className="text-[10px] font-bold text-navy tracking-wider">
                         {stat.label}
                       </p>
                       <span className={`text-[9px] font-bold text-gray-500 bg-white/80 border border-gray-100 px-1.5 py-0.5 rounded shadow-xs whitespace-nowrap`}>
                         {stat.desc}
                       </span>
                    </div>
                    
                    <div className="relative leading-none w-fit"> 
                      <span className={`text-6xl font-condensed font-bold ${stat.color} tracking-tighter leading-none block`}>
                        {stat.value}
                      </span>
                      <span className="absolute bottom-1.5 left-[98%] ml-0.5 text-lg font-black text-navy opacity-30 font-mono">
                        {stat.unit}
                      </span>
                    </div>
                 </div>

                 {index < stats.length - 1 && (
                    <div className={`w-full border-b border-dashed border-gray-200 opacity-40 transition-all duration-1000 delay-500 ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
                 )}
               </React.Fragment>
             );
           })}
        </div>
      </div>
    </Section>
  );
};