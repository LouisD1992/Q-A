export type ThemeMode = 'light' | 'dark';
export type AccentColor = 'blue' | 'teal' | 'purple' | 'rose' | 'amber';
export type Language = 'vi' | 'en' | 'zh' | 'ko';

export interface Question {
  id: number;
  text: Record<Language, string>;
  options: Record<Language, string[]>;
  correctAnswer: number; // Index of the correct option
  category: Record<Language, string>;
  explanation?: Record<Language, string>;
}

export interface QuizSet {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
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
