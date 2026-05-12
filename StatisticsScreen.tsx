import { ArrowRight } from 'lucide-react';
import { DynamicBackground } from '../layout/DynamicBackground';
import { PremiumLogo } from '../layout/PremiumLogo';
import { Footer } from '../layout/Footer';
import { getCategoryTitle } from '../../data/quizData';
import type { GlobalStats } from '../../types';

interface Props {
  stats: GlobalStats;
  goBack: () => void;
}

export const StatisticsScreen = ({ stats, goBack }: Props) => {
  const statsEntries = Object.entries(stats);

  let overallScore = 0;
  let overallTotal = 0;

  statsEntries.forEach(([key, val]) => {
    if (key !== 'full') {
      overallScore += val.score;
      overallTotal += val.total;
    }
  });

  if (statsEntries.length === 1 && stats.full) {
    overallScore = stats.full.score;
    overallTotal = stats.full.total;
  }

  const overallPercent = overallTotal > 0 ? Math.round((overallScore / overallTotal) * 100) : 0;

  let overallMessage = "لم يتم إجراء اختبارات كافية للتقييم";
  if (overallTotal > 0) {
    if (overallPercent === 100) overallMessage = "أحسنت! دحيح الدفعة 🏆⭐";
    else if (overallPercent >= 90) overallMessage = "ممتاز، مذاكر كويس جدًا 👏";
    else overallMessage = "ضعيف، لازم تذاكر أكثر 📚";
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-3 md:p-6 relative">
      <DynamicBackground />
      <PremiumLogo />

      <div className="w-full max-w-5xl fade-up flex justify-start mb-3 md:mb-4 z-10">
        <button
          onClick={goBack}
          className="px-4 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-xl bg-transparent text-[#27e9b5] border border-[#27e9b5] hover:bg-[#27e9b5] hover:text-[#051824] transition-all font-bold flex items-center gap-2 text-sm md:text-base"
        >
          <ArrowRight size={18} /> العودة للقائمة
        </button>
      </div>

      <div className="premium-glass p-5 md:p-10 lg:p-14 rounded-[20px] md:rounded-[40px] w-full max-w-5xl fade-up border-t-4 border-[#27e9b5] shadow-[0_30px_80px_rgba(0,0,0,0.8)] z-10">
        <h2 className="text-2xl md:text-4xl font-black mb-6 md:mb-12 text-center text-white">إحصائيات الأداء الكلية</h2>

        {overallTotal === 0 ? (
          <div className="text-center text-base md:text-xl text-[#3b5265] py-12 md:py-20 font-bold">
            لم تقم بإجراء أي أقسام من الاختبار بعد. ابدأ الآن!
          </div>
        ) : (
          <>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 bg-[#051824] p-5 md:p-10 rounded-[20px] md:rounded-[30px] border border-[#3b5265] mb-8 md:mb-16 shadow-inner">
              <div className="relative w-36 h-36 md:w-56 md:h-56 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90 absolute top-0 left-0">
                  <circle cx="112" cy="112" r="100" fill="transparent" stroke="#162936" strokeWidth="20" />
                  <circle
                    cx="112" cy="112" r="100" fill="transparent"
                    stroke="#27e9b5" strokeWidth="20"
                    strokeDasharray="628"
                    strokeDashoffset={628 - (628 * overallPercent) / 100}
                    className="transition-all duration-1500 ease-out drop-shadow-[0_0_15px_#27e9b5]"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="flex flex-col items-center z-10">
                  <span className="text-3xl md:text-5xl font-black text-[#27e9b5] text-glow">{overallPercent}%</span>
                  <span className="text-xs md:text-sm text-[#3b5265] font-bold mt-1 uppercase">Overall</span>
                </div>
              </div>

              <div className="text-center md:text-left flex flex-col gap-3 md:gap-4">
                <h3 className="text-xl md:text-3xl font-black text-white">{overallMessage}</h3>
                <div className="text-base md:text-xl text-[#3b5265] font-bold">
                  إجمالي النقاط المجمعة: <span className="text-xl md:text-3xl text-white ml-2">{overallScore}</span> / {overallTotal}
                </div>
              </div>
            </div>

            <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-[#27e9b5]">تفاصيل الأقسام التي تم اجتيازها:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
              {statsEntries.map(([key, data]) => {
                const perc = Math.round((data.score / data.total) * 100);
                return (
                  <div key={key} className="bg-[#162936] p-4 md:p-6 rounded-[14px] md:rounded-[20px] border border-[#3b5265] flex items-center justify-between hover:border-[#27e9b5] transition-all">
                    <div className="min-w-0 mr-3">
                      <p className="font-bold text-sm md:text-lg text-white mb-1 truncate">{getCategoryTitle(key)}</p>
                      <p className="text-[#3b5265] font-bold text-xs md:text-base">Score: <span className="text-white">{data.score}</span> / {data.total}</p>
                    </div>
                    <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shrink-0">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="32" cy="32" r="28" fill="transparent" stroke="#051824" strokeWidth="6" />
                        <circle cx="32" cy="32" r="28" fill="transparent" stroke="#27e9b5" strokeWidth="6" strokeDasharray="175.8" strokeDashoffset={175.8 - (175.8 * perc) / 100} strokeLinecap="round" />
                      </svg>
                      <span className="absolute font-black text-xs md:text-sm text-[#27e9b5]">{perc}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};
