import { FC } from 'react';
import { quizStepsLength } from '@/shared/constants/quiz';
import { cn } from '@/shared/lib/utils/cn';
import { Typography } from '@/shared/ui/typography';
import { QuizStep } from '@/shared/types/quiz';
import { getQuizNumber } from '@/shared/lib/utils/quiz';

interface Props {
  quizId: QuizStep;
}

const className = 'text-regal-grey-100 text-lg leading-5 font-bold';

export const Steps: FC<Props> = ({ quizId }) => {
  const quizIndex = getQuizNumber(quizId);

  return (
    <div className="flex items-center">
      <Typography className={cn(className, 'text-regal-pink')}>
        {quizIndex}
      </Typography>
      <Typography className={cn(className, 'font-medium')}>/</Typography>
      <Typography className={className}>{quizStepsLength}</Typography>
    </div>
  );
};
