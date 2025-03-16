import { additionalQuiz, quizSteps } from '../constants/quiz';

export type QuizStep = (typeof quizSteps)[keyof typeof quizSteps];
export type AdditionalQuizQuestion =
  (typeof additionalQuiz)[keyof typeof additionalQuiz];

export type QuizType =
  | 'single-select'
  | 'single-select-image'
  | 'multiple-select'
  | 'bubble'
  | 'email';

export type QuizElement = {
  order: number;
  title: string;
  answer: string;
  type: QuizType;
};

export type QuizProperty = QuizStep | AdditionalQuizQuestion;

export type Quiz = Record<QuizProperty, QuizElement>;

type QuizStepInformationValue = {
  prevQuestion?: QuizStep;
  nextQuestion: QuizProperty;
};

export type QuizInformation = {
  [key in QuizStep]: QuizElement & QuizStepInformationValue;
} & {
  [key in AdditionalQuizQuestion]: QuizElement &
    Partial<QuizStepInformationValue>;
};
