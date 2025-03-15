'use client';

import { FC, PropsWithChildren, useId, useState } from 'react';
import { cva } from 'class-variance-authority';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils/cn';
import { CheckboxIndicator } from './indicator';

interface CheckboxProps {
  className?: string;
  variant?: 'box' | 'circle';
  value: string;
  onChange?: ({
    value,
    isChecked,
  }: {
    value: string;
    isChecked: boolean;
  }) => void;
}

const variants = cva('bg-main-300 cursor-pointer flex items-center', {
  variants: {
    variant: {
      box: 'justify-between gap-2 h-19 rounded-2xl px-5',
      circle:
        'h-22 w-22 bg-main-300 rounded-full flex-col justify-center overflow-hidden',
    },
    isChecked: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: 'box',
      isChecked: true,
      className: 'inset-ring-regal-pink-300 bg-regal-pink-300/20 inset-ring-2',
    },
    {
      variant: 'circle',
      isChecked: true,
      className: 'inset-ring-regal-pink-300 inset-ring-2',
    },
  ],
  defaultVariants: {
    variant: 'box',
  },
});

export const Checkbox: FC<PropsWithChildren<CheckboxProps>> = ({
  children,
  className,
  variant = 'box',
  value,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const id = useId();

  const onToggle = () => {
    setIsChecked((prevState) => !prevState);
    onChange?.({ value, isChecked });
  };

  return (
    <motion.label
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: variant === 'box' ? 0.9 : 0.8 }}
      whileFocus={{ scale: 1.03 }}
      transition={{ duration: 0.1, type: 'spring', stiffness: 100 }}
      htmlFor={id}
      className={cn(variants({ variant, isChecked }), className)}
      onKeyPress={onToggle}
    >
      {children}
      <CheckboxIndicator
        isHidden={variant !== 'box'}
        id={id}
        isChecked={isChecked}
        onToggle={onToggle}
        value={value}
      />
    </motion.label>
  );
};
