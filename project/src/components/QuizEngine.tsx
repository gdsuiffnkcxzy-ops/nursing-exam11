import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { DynamicBackground } from './layout/DynamicBackground';
import { Footer } from './layout/Footer';
import { MCQView } from './questions/MCQView';
import { EssayView } from './questions/EssayView';
import { ResultScreen } from './screens/ResultScreen';
import type { Question, CategoryId } from '../types';

interface Props {
  categoryId: CategoryId;
  questions: Question[];
  goBack: () => void;
  onFinishQuiz: (categoryId: CategoryId, score: number, total: number) => void;
}

export const QuizEngine = ({ categoryId, questions, goBack, onFinishQuiz }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const question = questions[currentIndex];
  const progressPercent = currentIndex === 0 ? 0 : Math.round((currentIndex / questions.length) * 100);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore(s => s + 1);
    setShowNext(true);

    const currentQuestion = questions[currentIndex];
    if (currentQuestion.type === 'essay') {
      setTimeout(() => {
        advanceToNext(isCorrect);
      }, 800);
    }
  };

  const advanceToNext = (isCorrect: boolean) => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
      setShowNext(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onFinishQuiz(categoryId, score + (isCorrect ? 1 : 0), questions.length);
      setIsFinished(true);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
      setShowNext(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onFinishQuiz(categoryId, score, questions.length);
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return <ResultScreen score={score} total={questions.length} goBack={goBack} />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-3 md:p-8 relative">
      <DynamicBackground />

      <div className="w-full max-w-5xl flex flex-col gap-4 md:gap-8 z-10 fade-up">
        {/* Top Bar */}
        <div className="premium-glass p-4 md:p-8 rounded-[16px] md:rounded-[24px] flex flex-col gap-3 md:gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex justify-between items-center text-base md:text-xl font-bold">
            <div className="flex items-center gap-2 md:gap-3">
              <span className="bg-[#051824] px-3 md:px-5 py-1.5 md:py-2 rounded-lg md:rounded-xl border border-[#3b5265] text-white flex items-center gap-1 md:gap-2 text-sm md:text-base">
                Score: <span className="text-[#27e9b5] text-lg md:text-2xl">{score}</span>
              </span>
            </div>

            <div className="text-[#3b5265] font-black uppercase tracking-widest text-xs md:text-lg">
              <span className="md:hidden">Q{currentIndex + 1}/{questions.length}</span>
              <span className="hidden md:inline">Question {currentIndex + 1} of {questions.length}</span>
            </div>

            <div className="flex items-center gap-1.5 md:gap-3">
              <div className="relative w-8 h-8 md:w-12 md:h-12 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="50%" cy="50%" r="40%" fill="transparent" stroke="#162936" strokeWidth="4" />
                  <circle
                    cx="50%" cy="50%" r="40%" fill="transparent"
                    stroke="#27e9b5" strokeWidth="4"
                    strokeDasharray="125.6"
                    strokeDashoffset={125.6 - (125.6 * progressPercent) / 100}
                    className="transition-all duration-700 ease-out"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="text-[#27e9b5] text-lg md:text-2xl font-black drop-shadow-[0_0_10px_rgba(39,233,181,0.5)] w-10 md:w-14">
                {progressPercent}%
              </div>
            </div>
          </div>

          <div className="w-full h-3 md:h-4 bg-[#051824] rounded-full overflow-hidden border border-[#162936] shadow-inner">
            <div className="h-full bg-gradient-to-r from-[#1a9a78] to-[#27e9b5] transition-all duration-700 ease-out shadow-[0_0_20px_#27e9b5]" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="premium-glass p-5 md:p-14 rounded-[20px] md:rounded-[32px] min-h-[300px] md:min-h-[500px] flex flex-col relative shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
          <div className="flex-grow flex items-center justify-center">
            {(question.type === 'mcq' || question.type === 'tf') && <MCQView key={currentIndex} question={question} onAnswer={handleAnswer} />}
            {question.type === 'essay' && <EssayView key={currentIndex} question={question} onAnswer={handleAnswer} />}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-between items-center mt-2 md:mt-4">
          <button
            onClick={goBack}
            className="px-4 md:px-8 py-3 md:py-4 rounded-[16px] md:rounded-[20px] bg-transparent text-[#3b5265] border-2 border-[#3b5265] hover:border-white hover:text-white transition-all duration-300 font-bold text-sm md:text-xl btn-press"
          >
            رجوع للقائمة
          </button>

          <button
            onClick={nextQuestion}
            disabled={!showNext}
            className={`px-6 md:px-14 py-3 md:py-4 rounded-[16px] md:rounded-[20px] font-black transition-all duration-300 flex items-center gap-2 md:gap-3 text-base md:text-2xl btn-press
              ${showNext
                ? 'bg-[#27e9b5] text-[#051824] shadow-[0_0_30px_rgba(39,233,181,0.4)] hover:shadow-[0_0_50px_rgba(39,233,181,0.7)] hover:-translate-y-1'
                : 'bg-[#162936] text-[#3b5265] border-2 border-[#3b5265] opacity-50 cursor-not-allowed'
              }`}
          >
            التالي <ArrowLeft size={20} className="md:w-7 md:h-7" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
