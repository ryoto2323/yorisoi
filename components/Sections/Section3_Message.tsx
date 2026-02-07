import React from 'react';
import { Section } from './Section';

interface Section3_MessageProps {
  isActive: boolean;
}

export const Section3_Message: React.FC<Section3_MessageProps> = ({ isActive }) => {
  return (
    <Section 
      id={3} 
      isActive={isActive}
      bgOverlay="bg-transparent"
      mood="slow"
    >
      <div className="absolute top-0 left-0 w-full h-[45%] z-0 bg-white">
         <img 
          src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop" 
          alt="Representative" 
          className={`relative z-10 w-full h-full object-cover object-top transition-transform duration-[10000ms] ease-out ${isActive ? 'scale-105' : 'scale-100'}`}
          style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
         />
      </div>

      <div 
        className={`absolute bottom-0 w-full h-[60%] bg-[#FEFDF5] rounded-t-[2rem] px-6 pt-8 pb-10 flex flex-col z-10 shadow-2xl transition-all duration-1000 delay-300 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
      >
         <div className="relative z-10 flex flex-col h-full font-handwritingJP text-[#001f3f]">
            <h2 className="text-[20px] font-bold leading-relaxed mb-4 tracking-wide">
              未完成な私たちを、<br/>
              面白がってくれる人へ。
            </h2>
            
            <div className="overflow-y-auto no-scrollbar pr-1 pb-4 flex-1">
                <div className="text-[15px] leading-[1.8] font-medium tracking-wider">
                    <p className="mb-4">
                        正直に言います。<br/>
                        私たちはまだ、完璧な会社ではありません。<br/>
                        制度も、教育も、<br/>
                        これからもっと良くしていく段階です。
                    </p>
                    <p className="mb-4">
                        でも、だからこそ約束できます。ここには、あなたの「声」で変わる未来があります。
                    </p>
                    <p className="mb-4">
                        <span className="border-b border-[#001f3f] pb-0.5 font-bold">学歴や経験は、一切問いません。</span><br/>
                        大切なのは、これからのあなたです。
                    </p>
                    <p className="mb-4">
                        一人で背負う必要はありません。<br/>
                        転んだら、私たちが手を貸します。
                    </p>
                </div>

                <div className="mt-4 flex flex-col items-end opacity-90">
                   <div className="transform -rotate-2 text-center">
                        <p className="text-[10px] tracking-widest mb-0.5 font-handwritingJP font-bold">代表取締役</p>
                        <p className="text-2xl font-bold font-handwritingJP">田中 雅人</p>
                   </div>
                </div>
            </div>
         </div>
      </div>
    </Section>
  );
};