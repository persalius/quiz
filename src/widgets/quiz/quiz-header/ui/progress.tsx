'use client';

import { CSSProperties, FC } from 'react';
import { motion } from 'motion/react';
import { quizStepsLength } from '@/shared/constants/quiz';

interface Props {
  quizNumber: number;
}

export const Progress: FC<Props> = ({ quizNumber }) => {
  const percent = (100 / quizStepsLength) * quizNumber;

  return (
    <div
      role="meter"
      aria-valuemin={1}
      aria-valuemax={quizStepsLength}
      aria-valuenow={quizNumber}
      className="bg-regal-grey-100 h-1 w-full overflow-hidden rounded-full"
    >
      <motion.div
        style={{ '--width': `${percent}%` } as CSSProperties}
        className="bg-regal-pink h-full w-[var(--width)]"
        layout
        layoutId="progress"
        transition={{ type: 'spring', stiffness: 50 }}
        initial={{ width: `${percent}%` }}
        animate={{ width: `${percent}%` }}
      />
    </div>
  );
};
