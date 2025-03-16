import { FC } from 'react';
import { quizStepsLength } from '@/shared/constants/quiz';
import { cn } from '@/shared/lib/utils/cn';
import { Typography } from '@/shared/ui/typography';

interface Props {
  quizNumber: number;
}

const className = 'text-regal-grey-100 text-lg leading-5 font-bold';

export const Steps: FC<Props> = ({ quizNumber }) => {
  return (
    <div className="flex items-center">
      <Typography className={cn(className, 'text-regal-pink')}>
        {quizNumber}
      </Typography>
      <Typography className={cn(className, 'font-medium')}>/</Typography>
      <Typography className={className}>{quizStepsLength}</Typography>
    </div>
  );
};
