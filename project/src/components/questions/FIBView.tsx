import React, { useState } from 'react';
import { FIB_WORD_BANK } from '../../data/quizData';
import type { FIBQuestion } from '../../types';

interface Props {
  question: FIBQuestion;
  onAnswer: (isCorrect: boolean) => void;
}

export const FIBView = ({ question, onAnswer }: Props) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [blankValue, setBlankValue] = useState<string | null>(null);
  const [status, setStatus] = useState<'correct' | 'incorrect' | null>(null);

  const handleBlankClick = () => {
    if (!selectedWord || status === 'correct') return;

    setBlankValue(selectedWord);

    if (selectedWord.toLowerCase() === question.a.toLowerCase()) {
      setStatus('correct');
      setTimeout(() => onAnswer(true), 1200);
    } else {
      setStatus('incorrect');
      setTimeout(() => {
        setBlankValue(null);
        setSelectedWord(null);
        setStatus(null);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col gap-12 w-full animate-fade-in">
      <div className="premium-glass p-8 rounded-[24px] border border-[#3b5265] bg-[#051824]/60">
        <p className="text-center text-lg mb-6 text-[#27e9b5] font-bold uppercase tracking-widest">Word Bank</p>
        <div className="flex flex-wrap gap-4 justify-center">
          {FIB_WORD_BANK.map((w, i) => {
            const isSelected = selectedWord === w;
            const isUsed = blankValue === w && status === 'correct';
            if (isUsed) return null;
            return (
              <button
                key={i}
                onClick={() => setSelectedWord(w)}
                className={`px-5 py-3 rounded-xl text-lg font-bold transition-all duration-300 border-2 btn-press
                  ${isSelected
                    ? 'bg-[#27e9b5] text-[#051824] border-[#27e9b5] shadow-[0_0_20px_rgba(39,233,181,0.5)] scale-110'
                    : 'bg-[#162936] text-white border-[#3b5265] hover:border-[#27e9b5] hover:text-[#27e9b5]'
                  }`}
              >
                {w}
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-8 text-center mt-6">
        <h3 className="text-3xl md:text-4xl leading-[2] font-bold text-white">
          {question.q.split('[blank]').map((part, index, array) => (
            <React.Fragment key={index}>
              {part}
              {index < array.length - 1 && (
                <button
                  onClick={handleBlankClick}
                  className={`mx-3 px-8 py-2 min-w-[200px] rounded-xl border-b-4 transition-all duration-300 inline-flex justify-center items-center h-14 font-black
                    ${status === 'correct'
                      ? 'bg-[#27e9b5] text-[#051824] border-[#27e9b5] shadow-[0_0_30px_#27e9b5]'
                      : status === 'incorrect'
                      ? 'bg-red-500/20 text-white border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]'
                      : blankValue
                      ? 'bg-[#162936] text-white border-[#3b5265]'
                      : selectedWord
                      ? 'border-[#27e9b5] bg-[#051824] text-[#27e9b5] shadow-[0_0_15px_rgba(39,233,181,0.3)] cursor-pointer hover:bg-[#27e9b5]/10'
                      : 'border-[#3b5265] bg-[#051824] text-gray-500'
                    }`}
                >
                  {blankValue || "................"}
                </button>
              )}
            </React.Fragment>
          ))}
        </h3>
      </div>
    </div>
  );
};
