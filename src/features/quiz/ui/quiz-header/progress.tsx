'use client';

import { CSSProperties, FC } from 'react';
import { motion } from 'motion/react';
import { quizStepsLength } from '@/shared/constants/routes';

interface Props {
  quizId: number;
}

export const Progress: FC<Props> = ({ quizId }) => {
  const percent = (100 / quizStepsLength) * quizId;

  return (
    <div
      role="meter"
      aria-valuemin={1}
      aria-valuemax={quizStepsLength}
      aria-valuenow={quizId}
      className="bg-regal-grey h-1 w-full overflow-hidden rounded-full"
    >
      <motion.div
        style={{ '--width': `${percent}%` } as CSSProperties}
        className="bg-regal-pink h-full w-[var(--width)]"
        layout
        initial={{ width: `${percent}%` }}
        animate={{ width: `${percent}%` }}
        layoutId="progress"
      />
    </div>
  );
};
