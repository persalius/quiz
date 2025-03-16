import { QuizInformation } from '../types/quiz';
import { additionalQuiz, quizSteps } from './quiz';

export const quizInformation: QuizInformation = {
  [quizSteps.language]: {
    order: 1,
    title: 'What is your preferred language?',
    type: 'single-select',
    answer: '',
    nextQuestion: quizSteps.gender,
  },
  [quizSteps.gender]: {
    order: 2,
    title: 'What gender do you identify with?',
    type: 'single-select-image',
    answer: '',
    prevQuestion: quizSteps.language,
    nextQuestion: quizSteps.age,
  },
  [quizSteps.age]: {
    order: 3,
    title: 'What is your age?',
    type: 'single-select',
    answer: '',
    prevQuestion: quizSteps.gender,
    nextQuestion: quizSteps.hate,
  },
  [quizSteps.hate]: {
    order: 4,
    title: 'What do you hate the most in a book?',
    type: 'multiple-select',
    answer: '',
    prevQuestion: quizSteps.age,
    nextQuestion: quizSteps.topics,
  },
  [quizSteps.topics]: {
    order: 5,
    title: 'What are your favorite topics?',
    type: 'bubble',
    answer: '',
    prevQuestion: quizSteps.hate,
    nextQuestion: additionalQuiz.email,
  },
  [additionalQuiz.email]: {
    order: 6,
    title: 'Email',
    type: 'email',
    answer: '',
    prevQuestion: quizSteps.topics,
  },
};
