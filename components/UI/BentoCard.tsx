import React from 'react';

export const BentoCard: React.FC<{ 
  children: React.ReactNode; 
  className?: string; 
  delay?: string;
  accentColor?: string; 
}> = ({ children, className = "", delay = "0ms", accentColor = "border-gray-100" }) => (
  <div 
    className={`relative z-30 bg-white rounded-3xl p-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-gray-100 transition-all duration-300 hover:shadow-pop hover:-translate-y-1 active:scale-95 cursor-pointer ${className}`}
    style={{ transitionDelay: delay }}
  >
    {children}
  </div>
);