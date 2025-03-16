import { additionalQuiz, quizSteps } from '../constants/quiz';

export type QuizStep = (typeof quizSteps)[keyof typeof quizSteps];
export type QdditionalQuizQuestion =
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

export type QuizProperty = QuizStep | QdditionalQuizQuestion;

export type Quiz = Record<QuizProperty, QuizElement>;

type QuizStepInformationValue = QuizElement & {
  prevQuestion?: QuizStep;
  nextQuestion: QuizProperty;
};

export type QuizInformation = Record<QuizStep, QuizStepInformationValue> &
  Record<QdditionalQuizQuestion, Partial<QuizStepInformationValue>>;
