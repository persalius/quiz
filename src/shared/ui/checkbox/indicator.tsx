'use client';

import { FC } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/shared/lib/utils/cn';

const tickVariants = {
  checked: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.2,
    },
  },
  unchecked: {
    pathLength: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

interface Props {
  isHidden: boolean;
  id: string;
  isChecked: boolean;
  onToggle: () => void;
}

export const CheckboxIndicator: FC<Props> = ({
  isHidden,
  id,
  isChecked,
  onToggle,
}) => {
  return (
    <div className={cn('relative flex items-center', isHidden && 'hidden')}>
      <input
        tabIndex={-1}
        type="checkbox"
        checked={isChecked}
        className="border-regal-pink-300 bg-main-200 checked:bg-regal-pink-300 relative h-6 w-6 cursor-pointer appearance-none rounded-lg border-2 transition-all duration-500"
        onChange={onToggle}
        id={id}
      />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3.5"
          stroke="currentColor"
          className="h-3.5 w-3.5"
          initial={false}
          animate={isChecked ? 'checked' : 'unchecked'}
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
            variants={tickVariants}
          />
        </motion.svg>
      </div>
    </div>
  );
};
