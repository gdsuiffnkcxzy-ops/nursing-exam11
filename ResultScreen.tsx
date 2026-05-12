import { Home } from 'lucide-react';
import { DynamicBackground } from '../layout/DynamicBackground';
import { PremiumLogo } from '../layout/PremiumLogo';
import { Footer } from '../layout/Footer';

interface Props {
  score: number;
  total: number;
  goBack: () => void;
}

export const ResultScreen = ({ score, total, goBack }: Props) => {
  const percentage = Math.round((score / total) * 100);
  let message = "";
  if (percentage === 100) message = "أحسنت! دحيح الدفعة 🏆⭐";
  else if (percentage >= 90) message = "ممتاز، مذاكر كويس جدًا 👏";
  else message = "ضعيف، لازم تذاكر أكثر 📚";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-3 md:p-6 relative">
      <DynamicBackground />
      <PremiumLogo />

      <div className="premium-glass p-6 md:p-12 lg:p-16 rounded-[20px] md:rounded-[40px] w-full max-w-3xl text-center fade-up border-t-4 border-[#27e9b5] shadow-[0_30px_80px_rgba(0,0,0,0.8)] relative z-10">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-8 md:mb-14 text-glow text-white">{message}</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-24 mb-8 md:mb-16">
          <div className="relative w-40 h-40 md:w-64 md:h-64 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(39,233,181,0.2)]"></div>
            <svg className="w-full h-full transform -rotate-90 absolute top-0 left-0">
              <circle cx="128" cy="128" r="116" fill="transparent" stroke="#051824" strokeWidth="24" />
              <circle
                cx="128" cy="128" r="116" fill="transparent"
                stroke="#27e9b5" strokeWidth="24"
                strokeDasharray="728.8"
                strokeDashoffset={728.8 - (728.8 * percentage) / 100}
                className="transition-all duration-1500 ease-out drop-shadow-[0_0_20px_#27e9b5]"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-4xl md:text-6xl font-black text-[#27e9b5] text-glow relative z-10">{percentage}%</span>
          </div>

          <div className="flex flex-col gap-6 md:gap-10 text-center md:text-left">
            <div className="bg-[#051824] p-4 md:p-6 rounded-[16px] md:rounded-[24px] border border-[#3b5265]">
              <p className="text-[#3b5265] text-sm md:text-lg mb-1 md:mb-2 uppercase tracking-widest font-bold">Final Score</p>
              <p className="text-3xl md:text-5xl font-black text-white">{score} <span className="text-xl md:text-3xl text-[#3b5265]">/ {total}</span></p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mt-4 md:mt-8">
          <button
            onClick={goBack}
            className="px-6 md:px-10 py-4 md:py-5 rounded-[16px] md:rounded-[20px] bg-[#051824] text-white border-2 border-[#3b5265] hover:border-[#27e9b5] hover:text-[#27e9b5] font-black text-base md:text-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 btn-press"
          >
            <Home size={20} strokeWidth={3} /> القائمة الرئيسية
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
