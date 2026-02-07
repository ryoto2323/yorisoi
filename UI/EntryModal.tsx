import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Check, Send } from 'lucide-react';

export const EntryModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    if (isOpen) setStep(1);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-[100] bg-white/90 backdrop-blur-md flex items-center justify-center p-6 animate-[fadeIn_0.3s_ease-out]">
      <div className="w-full max-w-sm bg-white border border-gray-100 rounded-3xl p-8 relative shadow-2xl overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange/10 rounded-full blur-3xl pointer-events-none"></div>
         <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue/10 rounded-full blur-3xl pointer-events-none"></div>

         <button 
           onClick={onClose} 
           className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors text-gray-400 hover:text-navy z-10"
         >
           <X size={20} />
         </button>

         {step === 1 ? (
           <div className="flex flex-col h-full animate-[slideUp_0.4s_ease-out]">
             <h2 className="text-2xl font-black font-sans text-navy mb-2">ENTRY FORM</h2>
             <p className="text-xs text-gray-400 mb-8 font-mono font-bold tracking-widest">STEP 1/2: BASIC INFO</p>
             
             <div className="space-y-6 mb-8">
               <div>
                 <label className="block text-xs font-bold text-navy mb-2 ml-1">お名前</label>
                 <input 
                    type="text" 
                    placeholder="例：山田 太郎"
                    className="w-full bg-gray-50 border-2 border-transparent focus:bg-white px-4 py-3 text-navy placeholder-gray-400 focus:outline-none focus:border-orange transition-all rounded-xl font-bold"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                 />
               </div>
               <div>
                 <label className="block text-xs font-bold text-navy mb-2 ml-1">メールアドレス</label>
                 <input 
                    type="email" 
                    placeholder="example@email.com"
                    className="w-full bg-gray-50 border-2 border-transparent focus:bg-white px-4 py-3 text-navy placeholder-gray-400 focus:outline-none focus:border-orange transition-all rounded-xl font-bold"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                 />
               </div>
             </div>

             <button 
                onClick={() => setStep(2)}
                disabled={!formData.name || !formData.email}
                className="mt-auto w-full bg-navy disabled:opacity-50 disabled:cursor-not-allowed text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg"
             >
                <span>NEXT STEP</span>
                <ArrowRight size={20} />
             </button>
           </div>
         ) : (
           <div className="flex flex-col h-full animate-[slideUp_0.4s_ease-out]">
             <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-blue/10 flex items-center justify-center">
                    <Check size={14} className="text-blue" strokeWidth={3} />
                </div>
                <span className="text-xs font-bold text-blue tracking-wider">READY TO SEND</span>
             </div>
             <h2 className="text-2xl font-black font-sans text-navy mb-8">確認して送信</h2>
             
             <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100 space-y-4">
                <div>
                   <span className="text-[10px] text-gray-400 font-bold tracking-wider block mb-1">NAME</span>
                   <p className="font-bold text-navy text-lg">{formData.name}</p>
                </div>
                <div className="w-full h-[1px] bg-gray-200"></div>
                <div>
                   <span className="text-[10px] text-gray-400 font-bold tracking-wider block mb-1">EMAIL</span>
                   <p className="font-bold text-navy text-lg">{formData.email}</p>
                </div>
             </div>

             <div className="mt-auto space-y-3">
               <button 
                  onClick={() => {
                      alert('エントリーありがとうございます！\n(デモのため実際には送信されません)');
                      onClose();
                  }}
                  className="w-full bg-orange text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(255,107,0,0.4)] active:scale-95 transition-all"
               >
                  <Send size={20} />
                  <span>ENTRY COMPLETE</span>
               </button>
               <button 
                  onClick={() => setStep(1)}
                  className="w-full py-2 text-xs text-gray-400 hover:text-navy font-bold transition-colors"
               >
                  戻って修正する
               </button>
             </div>
           </div>
         )}
      </div>
    </div>
  );
};