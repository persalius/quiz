'use client';

import { FC, PropsWithChildren } from 'react';
import { motion, Variants } from 'motion/react';
import { cn } from '../lib/utils/cn';

type AnimationVariants = 'circle' | 'scale' | 'translate';

interface Props {
  variant?: AnimationVariants;
  className?: string;
}

const variants: Record<AnimationVariants, Variants> = {
  circle: {
    visible: {
      opacity: 1,
      scale: 1,
      clipPath: 'circle(100% at 50% 50%)',
    },
    hidden: {
      opacity: 0,
      scale: 0.9,
      clipPath: 'circle(0% at 50% 50%)',
    },
  },
  scale: {
    visible: {
      opacity: 1,
      translateY: 0,
      scale: 1,
    },
    hidden: {
      opacity: 0,
      translateY: 20,
      scale: 0.9,
    },
  },
  translate: {
    visible: { opacity: 1, translateY: 0 },
    hidden: { opacity: 0, translateY: -50 },
  },
};

export const Transition: FC<PropsWithChildren<Props>> = ({
  variant = 'circle',
  className,
  children,
}) => {
  return (
    <motion.div
      variants={variants[variant]}
      initial="hidden"
      animate="visible"
      transition={{ type: 'spring', duration: 1, bounce: 0 }}
      className={cn('flex h-full flex-1 flex-col', className)}
    >
      {children}
    </motion.div>
  );
};
