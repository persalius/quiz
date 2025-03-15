import { quizSteps } from '../constants/quiz';

export type QuizStep = keyof typeof quizSteps;

export type QuizType =
  | 'single-select'
  | 'single-select-image'
  | 'multiple-select'
  | 'bubble'
  | 'email';

export interface QuizElement {
  question: string;
  answer: string;
  type: QuizType;
}

export type QuizProperty = QuizStep | 'email';

export type Quiz = Record<QuizProperty, QuizElement>;
