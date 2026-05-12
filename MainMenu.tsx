import {
  HeartPulse,
  CheckCircle2,
  List,
  Award,
  MessageSquare,
  BarChart3
} from 'lucide-react';
import { DynamicBackground } from '../layout/DynamicBackground';
import { PremiumLogo } from '../layout/PremiumLogo';
import { Footer } from '../layout/Footer';
import type { CategoryId } from '../../types';

interface Props {
  onSelectCategory: (id: CategoryId) => void;
  onShowStats: () => void;
}

const categories: { id: CategoryId; title: string; icon: React.ReactNode }[] = [
  { id: 'choose', title: 'Part I: Choose the Correct Answer', icon: <List size={32} /> },
  { id: 'truefalse', title: 'Part II: True or False', icon: <CheckCircle2 size={32} /> },
  { id: 'account', title: 'Part III: Give an Account', icon: <MessageSquare size={32} /> },
  { id: 'full', title: 'Full Comprehensive Exam', icon: <Award size={40} className="text-[#051824]" /> }
];

export const MainMenu = ({ onSelectCategory, onShowStats }: Props) => (
  <div className="min-h-screen flex flex-col items-center p-3 md:p-6 relative">
    <DynamicBackground />
    <PremiumLogo />

    <div className="w-full max-w-5xl flex justify-center mb-4 md:mb-8 fade-up z-10">
      <button
        onClick={onShowStats}
        className="premium-glass px-5 md:px-8 py-3 md:py-4 rounded-[16px] md:rounded-[20px] text-[#27e9b5] font-black text-base md:text-xl hover:bg-[#27e9b5] hover:text-[#051824] transition-all flex items-center gap-2 md:gap-3 btn-press border-[#27e9b5] shadow-[0_0_20px_rgba(39,233,181,0.2)]"
      >
        <BarChart3 size={20} className="md:w-6 md:h-6" /> إحصائيات الأداء والمجموع
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl w-full z-10 pb-8 md:pb-12">
      {categories.map((cat, i) => (
        <button
          key={cat.id}
          onClick={() => onSelectCategory(cat.id)}
          className={`premium-glass premium-glass-hover rounded-[16px] md:rounded-[24px] p-5 md:p-8 flex flex-col items-center justify-center gap-4 md:gap-6 fade-up group outline-none btn-press text-center
            ${cat.id === 'full' ? 'md:col-span-2 bg-[#27e9b5]/10 border-[#27e9b5] deep-glow hover:bg-[#27e9b5]/20' : ''}`}
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          <div className={`p-3 md:p-5 rounded-[14px] md:rounded-[20px] transition-all duration-300 flex items-center justify-center
            ${cat.id === 'full'
              ? 'bg-[#27e9b5] shadow-[0_0_20px_#27e9b5]'
              : 'bg-[#051824] border border-[#3b5265] text-[#27e9b5] group-hover:bg-[#27e9b5] group-hover:text-[#051824]'
            }`}>
            {cat.icon}
          </div>
          <h3 className={`text-base md:text-xl lg:text-2xl font-bold tracking-wide leading-relaxed
            ${cat.id === 'full' ? 'text-[#27e9b5]' : 'text-white group-hover:text-[#27e9b5]'}`}>
            {cat.title}
          </h3>
        </button>
      ))}
    </div>
    <Footer />
  </div>
);
