import { FC } from 'react';
import { Steps } from './steps';
import Link from 'next/link';
import { routes } from '@/shared/constants/routes';
import { ArrowIcon } from '@/shared/icons';
import { Progress } from './progress';

interface Props {
  quizId: number;
}

export const QuizHeader: FC<Props> = ({ quizId }) => {
  return (
    <header className="pt-2">
      <div className="mb-5 flex items-center justify-between">
        {quizId > 1 ? (
          <Link
            href={routes.quiz(quizId - 1)}
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
