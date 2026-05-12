import { useState } from 'react';
import type { EssayQuestion } from '../../types';

interface Props {
  question: EssayQuestion;
  onAnswer: (isCorrect: boolean) => void;
}

export const EssayView = ({ question, onAnswer }: Props) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleSelfGrade = (isCorrect: boolean) => {
    onAnswer(isCorrect);
  };

  return (
    <div className="flex flex-col items-center gap-8 md:gap-12 w-full text-center animate-fade-in">
      <h3 className="text-xl md:text-3xl lg:text-4xl font-bold leading-[1.6] text-white max-w-4xl mx-auto">
        {question.q}
      </h3>

      {!showAnswer ? (
        <button
          onClick={() => setShowAnswer(true)}
          className="mt-4 px-8 md:px-12 py-4 md:py-5 rounded-[20px] bg-[#27e9b5] text-[#051824] shadow-[0_0_30px_rgba(39,233,181,0.3)] hover:shadow-[0_0_50px_rgba(39,233,181,0.6)] hover:scale-105 transition-all duration-300 font-black tracking-wider text-lg md:text-2xl btn-press"
        >
          إظهار الإجابة
        </button>
      ) : (
        <div className="w-full flex flex-col items-center gap-6 md:gap-10 animate-fade-in">
          <div className="w-full max-w-4xl premium-glass border-2 border-[#27e9b5] p-6 md:p-10 rounded-[24px] shadow-[0_0_40px_rgba(39,233,181,0.15)] bg-[#051824]/80">
            <p className="text-lg md:text-2xl lg:text-3xl text-[#27e9b5] font-black leading-relaxed">{question.a}</p>
          </div>

          <div className="premium-glass p-6 md:p-10 rounded-[24px] w-full max-w-2xl border-2 border-[#3b5265]">
            <h4 className="text-lg md:text-2xl font-bold mb-6 md:mb-8 text-white">هل كانت إجابتك صحيحة؟</h4>
            <div className="flex gap-4 md:gap-6 justify-center">
              <button
                onClick={() => handleSelfGrade(true)}
                className="flex-1 py-4 md:py-5 rounded-[20px] font-black text-lg md:text-2xl transition-all duration-300 btn-press bg-[#27e9b5] text-[#051824] shadow-[0_0_20px_rgba(39,233,181,0.3)] hover:shadow-[0_0_30px_rgba(39,233,181,0.6)] hover:-translate-y-1 active:scale-95"
              >
                نعم
              </button>
              <button
                onClick={() => handleSelfGrade(false)}
                className="flex-1 py-4 md:py-5 rounded-[20px] font-black text-lg md:text-2xl transition-all duration-300 border-2 btn-press bg-[#051824] border-red-500 text-red-500 hover:bg-red-500 hover:text-white hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:-translate-y-1 active:scale-95"
              >
                لا
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
