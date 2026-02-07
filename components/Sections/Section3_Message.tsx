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
      <div className="absolute top-0 left-0 w-full h-[55%] z-0 bg-white">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-[1px] border-orange/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-[spin_15s_linear_infinite] opacity-50 z-0"></div>
         
         <img 
          src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop" 
          alt="Representative" 
          className={`relative z-10 w-full h-full object-cover object-top transition-transform duration-[10000ms] ease-out mask-image-b-fade ${isActive ? 'scale-105' : 'scale-100'}`}
          style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
         />
      </div>

      <div 
        className={`absolute bottom-0 w-full min-h-[55%] bg-[#FEFDF5] rounded-t-[2.5rem] px-8 pt-10 pb-24 flex flex-col z-10 shadow-[0_-10px_60px_rgba(0,0,0,0.08)] transition-all duration-1000 delay-300 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
      >
         <div 
            className="absolute inset-0 rounded-t-[2.5rem] pointer-events-none opacity-30"
            style={{ 
                backgroundImage: 'linear-gradient(transparent 31px, #94a3b8 32px)', 
                backgroundSize: '100% 32px',
                marginTop: '3rem'
            }} 
         />

         <div className="relative z-10 flex flex-col h-full font-handwritingJP text-[#001f3f]">
            <h2 className="text-[26px] font-bold leading-relaxed mb-6 tracking-wide">
              未完成な私たちを、<br/>
              面白がってくれる人へ。
            </h2>
            
            <div className="overflow-y-auto custom-scrollbar pr-1 pb-4 flex-1">
                <div className="text-[17px] leading-[32px] font-medium tracking-wider">
                    <p className="mb-6">
                        正直に言います。<br/>
                        私たちはまだ、完璧な会社ではありません。<br/>
                        制度も、教育も、<br/>
                        これからもっと良くしていく段階です。
                    </p>
                    <p className="mb-6">
                        でも、だからこそ約束できます。ここには、あなたの「声」で変わる未来があります。
                    </p>
                    <p className="mb-6">
                        <span className="border-b border-[#001f3f] pb-0.5 font-bold">学歴や経験は、一切問いません。</span><br/>
                        大切なのは、過去のあなたより、<br/>
                        これからのあなたです。
                    </p>
                    <p className="mb-6">
                        一人で背負う必要はありません。<br/>
                        転んだら、私たちが手を貸します。<br/>
                        だから、安心して飛び込んできてください。
                    </p>
                    <p className="mb-4">
                        一緒に、この会社を育てていきませんか？
                    </p>
                </div>

                <div className="mt-6 flex flex-col items-end opacity-90">
                   <div className="transform -rotate-2 text-center">
                        <p className="text-sm tracking-widest mb-1 font-handwritingJP font-bold">代表取締役</p>
                        <p className="text-4xl font-bold font-handwritingJP">田中 雅人</p>
                   </div>
                </div>
            </div>
         </div>
      </div>
    </Section>
  );
};