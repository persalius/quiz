import { additionalQuiz, quizSteps } from '../constants/quiz';

export type QuizStep = (typeof quizSteps)[keyof typeof quizSteps];
export type QdditionalQuizQuistion =
  (typeof additionalQuiz)[keyof typeof additionalQuiz];

export type QuizType =
  | 'single-select'
  | 'single-select-image'
  | 'multiple-select'
  | 'bubble'
  | 'email';

export interface QuizElement {
  order: number;
  title: string;
  answer: string;
  type: QuizType;
}

export type QuizProperty = QuizStep | QdditionalQuizQuistion;

export type Quiz = Record<QuizProperty, QuizElement>;
