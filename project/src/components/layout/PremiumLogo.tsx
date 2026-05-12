import { HeartPulse } from 'lucide-react';

export const PremiumLogo = () => (
  <div className="flex flex-col items-center justify-center mb-6 md:mb-10 pt-6 md:pt-10 fade-up relative z-10">
    <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#162936] border border-[#27e9b5] flex items-center justify-center mb-4 md:mb-6 shadow-[0_0_30px_rgba(39,233,181,0.2)]">
      <HeartPulse size={32} color="#27e9b5" className="md:w-12 md:h-12" />
    </div>
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-6 tracking-wide text-white neon-anim"> صلِّ على النبي</h1>
    <h2 className="text-sm md:text-xl lg:text-2xl text-[#27e9b5] font-semibold tracking-wide text-center max-w-2xl px-4">
      Biochemistry Comprehensive Exam
    </h2>
  </div>
);
