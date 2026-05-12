import { useEffect } from 'react';
import { HeartPulse } from 'lucide-react';

interface Props {
  onFinish: () => void;
}

export const SplashScreen = ({ onFinish }: Props) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2800);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#051824] z-50 p-4">
      <div className="relative flex flex-col items-center justify-center w-52 h-52 md:w-72 md:h-72 rounded-full border-2 border-[#3b5265] bg-[#162936] shadow-[0_0_80px_rgba(39,233,181,0.15)]">
        <HeartPulse size={48} color="#27e9b5" className="md:w-20 md:h-20 mb-2 md:mb-4 drop-shadow-[0_0_15px_#27e9b5]" />
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white text-center leading-tight mt-1 md:mt-2">جاهز للاختبار !</h1>
        <p className="text-xs md:text-sm text-[#27e9b5] tracking-widest text-center px-6 mt-2 md:mt-3 font-bold">متنساش تدعيلي</p>
        <svg className="absolute inset-0 w-full h-full animate-[spin_4s_linear_infinite]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="none" stroke="#27e9b5" strokeWidth="1" strokeDasharray="150 150" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
};
