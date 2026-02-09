
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BottomNavProps {
  activeSection: number;
  onEntryClick: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeSection, onEntryClick }) => {
  const isHidden = activeSection === 1;
  const isActionSection = activeSection === 11;

  return (
    <div className={`absolute bottom-0 left-0 w-full z-50 pointer-events-none transition-all duration-700 ${isHidden ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'}`}>
      <div 
        className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-cream/90 via-cream/80 to-transparent pointer-events-none backdrop-blur-[2px]" 
        style={{ height: 'calc(8rem + env(safe-area-inset-bottom))' }}
      />

      <div 
        className="relative px-6 flex items-center justify-end pointer-events-auto"
        style={{ paddingBottom: 'calc(2.5rem + env(safe-area-inset-bottom))', paddingTop: '1rem' }}
      >
        <button 
            onClick={onEntryClick}
            className={`
                relative group bg-navy text-white pl-5 pr-2 py-2 rounded-full flex items-center gap-3 
                shadow-[0_4px_10px_rgba(15,23,42,0.3)] hover:shadow-[0_8px_20px_rgba(15,23,42,0.4)]
                transition-all duration-300 active:scale-95 active:shadow-none
                ${isActionSection ? 'translate-y-20 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}
            `}
        >
          {/* Subtle Heartbeat Ring */}
          <div className="absolute inset-0 rounded-full border border-orange/50 opacity-0 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
          
          <span className="font-bold text-[10px] tracking-[0.2em] font-mono z-10">ENTRY</span>
          <div className="w-7 h-7 bg-orange rounded-full flex items-center justify-center text-white z-10 group-hover:rotate-[-45deg] transition-transform duration-500 shadow-md">
            <ArrowRight size={12} strokeWidth={3} />
          </div>
        </button>
      </div>
    </div>
  );
};
