import { useState, useMemo } from 'react';
import type { MatchingQuestion } from '../../types';

interface Props {
  question: MatchingQuestion;
  onAnswer: (isCorrect: boolean) => void;
}

interface Match {
  leftIndex: number;
  rightIndex: number;
  color: string;
}

const COLORS = ["#27e9b5", "#eab308", "#d946ef", "#14b8a6", "#8b5cf6", "#f97316"];

export const MatchingView = ({ question, onAnswer }: Props) => {
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [selectedRight, setSelectedRight] = useState<number | null>(null);
  const [matches, setMatches] = useState<Match[]>([]);
  const [isEvaluating, setIsEvaluating] = useState(false);

  const shuffledRight = useMemo(() => {
    return question.pairs
      .map((p, i) => ({ text: p.right, originalIndex: i }))
      .sort(() => Math.random() - 0.5);
  }, [question]);

  const checkMatch = (leftI: number | null, rightI: number | null) => {
    if (leftI === null || rightI === null) return;

    const isCorrect = question.pairs[leftI].right === shuffledRight[rightI].text;

    if (isCorrect) {
      const matchColor = COLORS[matches.length % COLORS.length];
      const newMatches = [...matches, { leftIndex: leftI, rightIndex: rightI, color: matchColor }];
      setMatches(newMatches);
      setSelectedLeft(null);
      setSelectedRight(null);

      if (newMatches.length === question.pairs.length) {
        setIsEvaluating(true);
        setTimeout(() => onAnswer(true), 1500);
      }
    } else {
      const leftEl = document.getElementById(`left-${leftI}`);
      const rightEl = document.getElementById(`right-${rightI}`);
      if (leftEl) leftEl.classList.add('border-red-500', 'bg-red-500/10', 'text-red-500');
      if (rightEl) rightEl.classList.add('border-red-500', 'bg-red-500/10', 'text-red-500');

      setTimeout(() => {
        if (leftEl) leftEl.classList.remove('border-red-500', 'bg-red-500/10', 'text-red-500');
        if (rightEl) rightEl.classList.remove('border-red-500', 'bg-red-500/10', 'text-red-500');
        setSelectedLeft(null);
        setSelectedRight(null);
      }, 800);
    }
  };

  const handleLeftClick = (index: number) => {
    if (matches.find(m => m.leftIndex === index) || isEvaluating) return;
    setSelectedLeft(index);
    checkMatch(index, selectedRight);
  };

  const handleRightClick = (index: number) => {
    if (matches.find(m => m.rightIndex === index) || isEvaluating) return;
    setSelectedRight(index);
    checkMatch(selectedLeft, index);
  };

  return (
    <div className="flex flex-col gap-10 w-full animate-fade-in">
      <div className="flex justify-between font-black text-[#27e9b5] text-3xl px-12 border-b-2 border-[#3b5265] pb-6">
        <span>A</span>
        <span>B</span>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-16 w-full">
        <div className="flex flex-col gap-6 w-full lg:w-[48%]">
          {question.pairs.map((p, i) => {
            const match = matches.find(m => m.leftIndex === i);
            const isSelected = selectedLeft === i;
            return (
              <button
                id={`left-${i}`}
                key={`l-${i}`}
                onClick={() => handleLeftClick(i)}
                className={`p-6 rounded-[20px] border-2 text-left transition-all duration-300 flex items-center justify-between min-h-[100px] btn-press
                  ${match
                    ? 'opacity-80'
                    : isSelected
                    ? 'bg-[#051824] border-[#27e9b5] shadow-[0_0_20px_rgba(39,233,181,0.3)] text-[#27e9b5] scale-[1.02]'
                    : 'bg-[#051824] text-white border-[#3b5265] hover:border-[#27e9b5] hover:shadow-[0_0_15px_rgba(39,233,181,0.15)]'
                  }`}
                style={match ? { borderColor: match.color, backgroundColor: `${match.color}15`, color: match.color, boxShadow: `0 0 15px ${match.color}30` } : {}}
              >
                <span className="text-xl md:text-2xl font-bold pr-6 leading-snug">{i + 1}. {p.left}</span>
                <span
                  className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-lg font-black
                    ${match ? 'text-white' : isSelected ? 'bg-[#27e9b5] text-[#051824]' : 'bg-[#3b5265] text-white'}`}
                  style={match ? { backgroundColor: match.color } : {}}
                >
                  {i + 1}
                </span>
              </button>
            );
          })}
        </div>
        <div className="flex flex-col gap-6 w-full lg:w-[48%]">
          {shuffledRight.map((r, renderIndex) => {
            const match = matches.find(m => m.rightIndex === renderIndex);
            const isSelected = selectedRight === renderIndex;
            return (
              <button
                id={`right-${renderIndex}`}
                key={`r-${renderIndex}`}
                onClick={() => handleRightClick(renderIndex)}
                className={`p-6 rounded-[20px] border-2 text-left transition-all duration-300 flex items-center justify-between flex-row-reverse min-h-[100px] btn-press
                  ${match
                    ? 'opacity-80'
                    : isSelected
                    ? 'bg-[#051824] border-[#27e9b5] shadow-[0_0_20px_rgba(39,233,181,0.3)] text-[#27e9b5] scale-[1.02]'
                    : 'bg-[#051824] text-white border-[#3b5265] hover:border-[#27e9b5] hover:shadow-[0_0_15px_rgba(39,233,181,0.15)]'
                  }`}
                style={match ? { borderColor: match.color, backgroundColor: `${match.color}15`, color: match.color, boxShadow: `0 0 15px ${match.color}30` } : {}}
              >
                <span className="text-xl md:text-2xl font-bold pl-6 leading-snug">{r.text}</span>
                <span
                  className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-lg font-black uppercase
                    ${match ? 'text-white' : isSelected ? 'bg-[#27e9b5] text-[#051824]' : 'bg-[#3b5265] text-white'}`}
                  style={match ? { backgroundColor: match.color } : {}}
                >
                  {String.fromCharCode(97 + renderIndex)}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
