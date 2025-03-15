import { FC } from 'react';
import Link from 'next/link';
import { routes } from '@/shared/constants/routes';
import { ArrowIcon } from '@/shared/icons';
import { Progress } from './ui/progress';
import { Steps } from './ui/steps';
import { QuizStep } from '@/shared/types/quiz';
import { quizSteps } from '@/shared/constants/quiz';
import { getQuizNumber } from '@/shared/lib/utils/quiz';

interface Props {
  quizId: QuizStep;
}

const keys = Object.keys(quizSteps) as QuizStep[];

export const QuizHeader: FC<Props> = ({ quizId }) => {
  const quizNumber = getQuizNumber(quizId);
  const prevStep = keys[quizNumber - 2];

  return (
    <header className="pt-4">
      <div className="mb-5 flex items-center justify-between">
        {quizNumber !== 1 ? (
          <Link
            href={routes.quiz(prevStep)}
            className="group flex h-6 w-6 items-center justify-start"
          >
            <ArrowIcon />
          </Link>
        ) : (
          <div className="h-6 w-6" />
        )}

        <Steps quizId={quizId} />
        <div className="h-6 w-6" />
      </div>
      <Progress quizId={quizId} />
    </header>
  );
};
