import { quizSteps } from '@/shared/constants/quiz';
import { QuizStep } from '@/shared/types/quiz';

const keys = Object.keys(quizSteps) as QuizStep[];

export const getQuizNumber = (quizId: QuizStep) => keys.indexOf(quizId) + 1;
