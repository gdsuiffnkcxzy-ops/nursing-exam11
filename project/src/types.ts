export interface EssayQuestion {
  type: 'essay';
  q: string;
  a: string;
}

export interface MCQQuestion {
  type: 'mcq';
  q: string;
  options: string[];
  a: string;
}

export interface TFQuestion {
  type: 'tf';
  q: string;
  a: 'True' | 'False';
}

export interface MatchingPair {
  left: string;
  right: string;
}

export interface MatchingQuestion {
  type: 'matching';
  pairs: MatchingPair[];
}

export interface FIBQuestion {
  type: 'fib';
  q: string;
  a: string;
}

export type Question = EssayQuestion | MCQQuestion | TFQuestion | MatchingQuestion | FIBQuestion;

export type CategoryId = 'choose' | 'truefalse' | 'account' | 'full';

export interface CategoryStat {
  score: number;
  total: number;
}

export type GlobalStats = Record<string, CategoryStat>;
