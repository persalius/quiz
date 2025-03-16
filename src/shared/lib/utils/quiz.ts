import { quizSteps } from '@/shared/constants/quiz';
import { QuizStep } from '@/shared/types/quiz';

const keysSteps = Object.values(quizSteps) as QuizStep[];

export const getQuizNumber = (quizId: QuizStep) => {
  const quizNumber = keysSteps.indexOf(quizId) + 1;
  const prevStep = keysSteps[quizNumber - 2];

  return { quizNumber, prevStep };
};
