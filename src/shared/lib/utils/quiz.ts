import { QuizStep } from '@/shared/types/quiz';
import { quizInformation } from '@/shared/constants/quizInformtaion';

export const getQuizNav = (quizId: QuizStep) => {
  const quiz = quizInformation[quizId];
  const quizNumber = quiz.order;

  const prevStep = quiz.prevQuestion;

  return { quizNumber, prevStep };
};
