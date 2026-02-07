import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BottomNavProps {
  activeSection: number;
  onEntryClick: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeSection, onEntryClick }) => {
  // Hide navigation on First View (Section 1) to prioritize the immersive CTA
  const isHidden = activeSection === 1;
  // Hide the floating Entry button on the Action section (Section 11) to avoid redundancy
  const isActionSection = activeSection === 11;

  return (
    <div className={`absolute bottom-0 left-0 w-full z-50 pointer-events-none transition-all duration-700 ${isHidden ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'}`}>
      {/* Gradient Fade for Nav Area (Light Theme) */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-cream via-cream/90 to-transparent pointer-events-none" />

      <div className="relative pb-10 pt-4 px-6 flex items-center justify-end pointer-events-auto">
        {/* Navigation Icons removed as requested */}

        {/* Small Sticky Entry Button - Now links directly to TimeRex */}
        <a 
            href="https://timerex.net/s/dami.01010202_e3d4/e261a323"
            target="_blank"
            rel="noopener noreferrer"
            className={`relative group bg-navy text-white pl-5 pr-2 py-2 rounded-full flex items-center gap-3 shadow-[0_4px_10px_rgba(15,23,42,0.3)] transition-all duration-300 active:scale-95 active:shadow-none ${isActionSection ? 'translate-y-20 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}
        >
          <span className="font-bold text-[10px] tracking-[0.2em] font-mono z-10">ENTRY</span>
          <div className="w-7 h-7 bg-orange rounded-full flex items-center justify-center text-white z-10 group-hover:rotate-[-45deg] transition-transform duration-500">
            <ArrowRight size={12} />
          </div>
        </a>
      </div>
    </div>
  );
};