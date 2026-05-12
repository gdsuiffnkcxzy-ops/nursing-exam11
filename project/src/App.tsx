import { useState } from 'react';
import { customStyles } from './styles/globalStyles';
import { quizData } from './data/quizData';
import { SplashScreen } from './components/screens/SplashScreen';
import { MainMenu } from './components/screens/MainMenu';
import { StatisticsScreen } from './components/screens/StatisticsScreen';
import { QuizEngine } from './components/QuizEngine';
import type { CategoryId, GlobalStats, Question } from './types';

type Screen = 'splash' | 'home' | 'quiz' | 'stats';

export default function App() {
  const [screen, setScreen] = useState<Screen>('splash');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | null>(null);
  const [globalStats, setGlobalStats] = useState<GlobalStats>({});

  const startQuiz = (cat: CategoryId) => {
    setSelectedCategory(cat);
    setScreen('quiz');
    window.scrollTo(0, 0);
  };

  const handleFinishQuiz = (categoryId: CategoryId, score: number, total: number) => {
    setGlobalStats(prev => ({ ...prev, [categoryId]: { score, total } }));
  };

  const getQuestions = (): Question[] => {
    if (!selectedCategory) return [];

    if (selectedCategory === 'full') {
      const all: Question[] = [
        ...quizData.choose,
        ...quizData.truefalse,
        ...quizData.account
      ];
      return all.sort(() => Math.random() - 0.5);
    }

    const categoryQuestions = [...(quizData[selectedCategory] ?? [])];
    return categoryQuestions.sort(() => Math.random() - 0.5) as Question[];
  };

  return (
    <>
      <style>{customStyles}</style>

      {screen === 'splash' && <SplashScreen onFinish={() => setScreen('home')} />}

      {screen === 'home' && (
        <MainMenu
          onSelectCategory={startQuiz}
          onShowStats={() => { setScreen('stats'); window.scrollTo(0, 0); }}
        />
      )}

      {screen === 'quiz' && selectedCategory && (
        <QuizEngine
          categoryId={selectedCategory}
          questions={getQuestions()}
          onFinishQuiz={handleFinishQuiz}
          goBack={() => { setScreen('home'); window.scrollTo(0, 0); }}
        />
      )}

      {screen === 'stats' && (
        <StatisticsScreen
          stats={globalStats}
          goBack={() => { setScreen('home'); window.scrollTo(0, 0); }}
        />
      )}
    </>
  );
}
