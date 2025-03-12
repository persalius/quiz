'use client';

import { CSSProperties, FC } from 'react';
import { motion } from 'motion/react';
import { quizStepsLength } from '@/shared/constants/quiz';
import { QuizStep } from '@/shared/types/quiz';
import { getQuizNumber } from '@/shared/lib/utils/quiz';

interface Props {
  quizId: QuizStep;
}

export const Progress: FC<Props> = ({ quizId }) => {
  const quizIndex = getQuizNumber(quizId);
  const percent = (100 / quizStepsLength) * quizIndex;

  return (
    <div
      role="meter"
      aria-valuemin={1}
      aria-valuemax={quizStepsLength}
      aria-valuenow={quizIndex}
      className="bg-regal-grey-100 h-1 w-full overflow-hidden rounded-full"
    >
      <motion.div
        style={{ '--width': `${percent}%` } as CSSProperties}
        className="bg-regal-pink h-full w-[var(--width)]"
        layout
        layoutId="progress"
        transition={{ type: 'spring' }}
        initial={{ width: `${percent}%` }}
        animate={{ width: `${percent}%` }}
      />
    </div>
  );
};
