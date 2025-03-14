import { QuizStep } from '../types/quiz';

export const routes = {
  home: '/',
  quiz: (id: QuizStep) => `/quiz/${id}`,
  email: '/email',
};
