import { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import type { MCQQuestion, TFQuestion } from '../../types';

interface Props {
  question: MCQQuestion | TFQuestion;
  onAnswer: (isCorrect: boolean) => void;
}

export const MCQView = ({ question, onAnswer }: Props) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    setTimeout(() => {
      onAnswer(opt === question.a);
    }, 1200);
  };

  if (question.type === 'mcq') {
    return (
      <div className="flex flex-col gap-6 md:gap-10 w-full animate-fade-in">
        <h3 className="text-xl md:text-3xl lg:text-4xl font-bold leading-[1.6] text-white">{question.q}</h3>
        <div className="grid grid-cols-1 gap-3 md:gap-5">
          {question.options.map((opt, i) => {
            let btnClass = "bg-[#051824] border-2 border-[#3b5265] hover:border-[#27e9b5] text-white";
            if (selected) {
              if (opt === question.a) btnClass = "bg-[#27e9b5] text-[#051824] border-[#27e9b5] shadow-[0_0_25px_rgba(39,233,181,0.5)] font-black scale-[1.02]";
              else if (opt === selected) btnClass = "bg-red-500/20 text-white border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]";
              else btnClass = "opacity-40 border-[#3b5265] bg-[#051824]";
            }
            return (
              <button
                key={i}
                disabled={!!selected}
                onClick={() => handleSelect(opt)}
                className={`option-btn p-4 md:p-6 rounded-[14px] md:rounded-[20px] text-left flex items-center gap-3 md:gap-6 text-base md:text-xl lg:text-2xl font-semibold btn-press ${btnClass}`}
              >
                <span className={`flex items-center justify-center min-w-[36px] h-[36px] md:min-w-[48px] md:h-[48px] rounded-full border-2 text-sm md:text-lg font-bold shrink-0
                  ${selected && opt === question.a ? 'border-[#051824] text-[#051824]' : 'border-[#3b5265] text-[#3b5265]'}`}>
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1 leading-snug">{opt}</span>
                {selected && opt === question.a && <CheckCircle2 size={24} className="text-[#051824] md:w-8 md:h-8 shrink-0" />}
                {selected && opt === selected && opt !== question.a && <XCircle size={24} className="text-red-500 md:w-8 md:h-8 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // True/False
  return (
    <div className="flex flex-col gap-6 md:gap-10 w-full animate-fade-in">
      <h3 className="text-xl md:text-3xl lg:text-4xl font-bold leading-[1.6] text-white">{question.q}</h3>
      <div className="grid grid-cols-2 gap-4 md:gap-8 mt-4 md:mt-6">
        {["True", "False"].map(opt => {
          let btnClass = "bg-[#051824] border-2 border-[#3b5265] hover:border-[#27e9b5] text-white";
          if (selected) {
            if (opt === question.a) btnClass = "bg-[#27e9b5] text-[#051824] border-[#27e9b5] shadow-[0_0_25px_rgba(39,233,181,0.5)] font-black scale-[1.05]";
            else if (opt === selected) btnClass = "bg-red-500/20 text-white border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]";
            else btnClass = "opacity-40 border-[#3b5265] bg-[#051824]";
          }
          return (
            <button
              key={opt}
              disabled={!!selected}
              onClick={() => handleSelect(opt)}
              className={`option-btn p-6 md:p-10 rounded-[16px] md:rounded-[24px] text-center text-xl md:text-3xl font-bold flex flex-col items-center justify-center gap-3 md:gap-4 btn-press ${btnClass}`}
            >
              {opt === "True" ? <CheckCircle2 size={32} className="md:w-12 md:h-12" /> : <XCircle size={32} className="md:w-12 md:h-12" />}
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
};
