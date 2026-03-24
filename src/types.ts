export type ThemeMode = 'light' | 'dark';
export type AccentColor = 'blue' | 'teal' | 'purple' | 'rose' | 'amber';

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
  category: string;
  explanation?: string;
}

export interface QuizSet {
  id: string;
  title: string;
  description: string;
  icon: string;
  questions: Question[];
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  showResult: boolean;
  answers: (number | null)[];
  isGameOver: boolean;
}
