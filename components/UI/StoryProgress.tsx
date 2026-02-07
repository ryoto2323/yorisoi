import React from 'react';

interface StoryProgressProps {
  current: number;
  total: number;
}

export const StoryProgress: React.FC<StoryProgressProps> = ({ current, total }) => {
  const progress = (current / total) * 100;
  
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-[60] flex flex-col items-center gap-4 md:absolute">
      <div className="relative w-1 h-48 bg-navy/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
        <div 
          className="absolute top-0 left-0 w-full bg-orange transition-all duration-1000 ease-spring shadow-[0_0_10px_rgba(255,107,0,0.5)]"
          style={{ height: `${progress}%` }}
        />
      </div>
      
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center overflow-hidden">
           <div className="text-[10px] font-black text-navy font-mono">
             {current.toString().padStart(2, '0')}
           </div>
        </div>
        <div className="h-4 w-[1px] bg-gray-200 my-1" />
        <div className="text-[8px] font-black text-gray-300 font-mono">
          {total.toString().padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};