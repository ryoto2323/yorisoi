import React, { useState, useRef, useEffect } from 'react';
import { MobileWrapper } from './components/Layout/MobileWrapper';
import { BottomNav } from './components/Navigation/BottomNav';
import { EntryModal } from './components/UI/EntryModal';
import { Menu, X, ArrowRight } from 'lucide-react';

// Sections
import { Section1_Hero } from './components/Sections/Section1_Hero';
import { Section2_About } from './components/Sections/Section2_About';
import { Section3_Message } from './components/Sections/Section3_Message';
import { Section4_Timeline } from './components/Sections/Section4_Timeline';
import { Section5_WhyNow } from './components/Sections/Section5_WhyNow';
import { Section6_Chat } from './components/Sections/Section6_Chat';
import { Section7_Onboarding } from './components/Sections/Section7_Onboarding';
import { Section8_Family } from './components/Sections/Section8_Family';
import { Section9_Recruit } from './components/Sections/Section9_Recruit';
import { Section10_Selection } from './components/Sections/Section10_Selection';
import { Section11_Action } from './components/Sections/Section11_Action';

const MENU_ITEMS = [
  { id: 1, title: 'Top' },
  { id: 2, title: '数字で見る自社' },
  { id: 3, title: '代表メッセージ' },
  { id: 4, title: '1日の流れ' },
  { id: 5, title: 'なぜ今、増員？' },
  { id: 6, title: '社員インタビュー' },
  { id: 7, title: '研修・教育' },
  { id: 8, title: '家族への約束' },
  { id: 9, title: '募集要項' },
  { id: 10, title: '選考について' },
  { id: 11, title: 'エントリー' },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const handleScroll = () => {
      const index = Math.round(container.scrollTop / container.clientHeight) + 1;
      setActiveSection(index);
    };
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
      if (scrollRef.current) {
          scrollRef.current.scrollTo({
              top: (index - 1) * scrollRef.current.clientHeight,
              behavior: 'smooth'
          });
          setIsMenuOpen(false);
      }
  };

  const handleOpenModal = () => setIsModalOpen(true);

  return (
    <MobileWrapper activeSection={activeSection}>
      {/* Sidebar Progress Indicator removed to fix mobile layout issues */}

      {/* Global Hamburger Button */}
      <button 
        onClick={() => setIsMenuOpen(true)}
        className="fixed top-6 right-6 z-[60] w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center shadow-2xl active:scale-75 transition-transform duration-300 ease-spring md:absolute"
      >
        <Menu size={20} />
      </button>

      {/* Fullscreen Navigation Menu */}
      <div className={`fixed inset-0 z-[100] bg-navy transition-all duration-700 ease-spring flex flex-col md:absolute ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-full pointer-events-none'}`}>
        <div className={`absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-orange opacity-30 rounded-full blur-[120px] transition-transform duration-1000 ${isMenuOpen ? 'scale-110' : 'scale-50'}`} />
        
        <div className="relative z-10 flex flex-col h-full px-8 pt-24 pb-12 overflow-hidden">
            <div className="flex justify-between items-center mb-12">
                <span className="text-white font-mono font-black tracking-[0.4em] text-[10px] opacity-60">NAVIGATION</span>
                <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-white active:scale-90 transition-transform"
                >
                    <X size={20} />
                </button>
            </div>

            <nav className="flex-1 overflow-y-auto custom-scrollbar pr-4">
                <ul className="space-y-6">
                    {MENU_ITEMS.map((item) => (
                        <li key={item.id} className="group overflow-hidden">
                            <button 
                                onClick={() => scrollToSection(item.id)}
                                className="flex items-baseline gap-6 w-full text-left py-2"
                            >
                                <span className={`text-orange font-mono font-black text-xs transition-all duration-500 ${activeSection === item.id ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-40'}`}>
                                    {item.id.toString().padStart(2, '0')}
                                </span>
                                <span className={`text-3xl font-black transition-all duration-500 ${activeSection === item.id ? 'text-white' : 'text-white/20 group-hover:text-white/60 group-hover:translate-x-2'}`}>
                                    {item.title}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="mt-12 pt-8 border-t border-white/5">
                <button 
                    onClick={() => { setIsMenuOpen(false); handleOpenModal(); }}
                    className="w-full bg-orange text-white py-5 rounded-2xl font-black tracking-widest flex items-center justify-center gap-3 shadow-2xl active:scale-95 transition-all duration-300 ease-spring"
                >
                    ENTRY NOW
                    <ArrowRight size={20} />
                </button>
            </div>
        </div>
      </div>

      <main 
        ref={scrollRef}
        className="w-full h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar lg:pc-scrollbar"
      >
        <Section1_Hero isActive={activeSection === 1} onOpenModal={handleOpenModal} onScrollToSection={scrollToSection} />
        <Section2_About isActive={activeSection === 2} />
        <Section3_Message isActive={activeSection === 3} />
        <Section4_Timeline isActive={activeSection === 4} />
        <Section5_WhyNow isActive={activeSection === 5} />
        <Section6_Chat isActive={activeSection === 6} />
        <Section7_Onboarding isActive={activeSection === 7} />
        <Section8_Family isActive={activeSection === 8} />
        <Section9_Recruit isActive={activeSection === 9} />
        <Section10_Selection isActive={activeSection === 10} />
        <Section11_Action isActive={activeSection === 11} onOpenModal={handleOpenModal} onScrollToSection={scrollToSection} />
      </main>

      <BottomNav activeSection={activeSection} onEntryClick={handleOpenModal} />
      <EntryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </MobileWrapper>
  );
};

export default App;