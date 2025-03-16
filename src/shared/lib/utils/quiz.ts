import { QuizStep } from '@/shared/types/quiz';
import { quizInformation } from '@/shared/constants/quiInformtaion';

export const getQuizNav = (quizId: QuizStep) => {
  const quiz = quizInformation[quizId];
  const quizNumber = quiz.order;

  const prevStep = quiz.prevQuestion;

  return { quizNumber, prevStep };
};
