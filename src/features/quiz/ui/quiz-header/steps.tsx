import { FC } from 'react';
import { quizStepsLength } from '@/shared/constants/routes';
import { cn } from '@/shared/lib/utils/cn';
import { Typography } from '@/shared/ui/typography';

interface Props {
  quizId: number;
}

const className = 'text-regal-grey text-lg leading-5 font-bold';

export const Steps: FC<Props> = ({ quizId }) => {
  return (
    <div className="flex items-center">
      <Typography className={cn(className, 'text-regal-pink')}>
        {quizId}
      </Typography>
      <Typography className={cn(className, 'font-medium')}>/</Typography>
      <Typography className={className}>{quizStepsLength}</Typography>
    </div>
  );
};
