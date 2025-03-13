'use client';

import {
  FC,
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext,
  useId,
  useMemo,
  useState,
} from 'react';
import { motion } from 'motion/react';
import { Typography } from './typography';
import { cn } from '../lib/utils/cn';

interface CheckboxContext {
  id: string;
  isChecked: boolean;
  onToggle: () => void;
}

const CheckboxContext = createContext<CheckboxContext>({
  id: '',
  isChecked: false,
  onToggle: () => {},
});

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

interface CheckboxProps {
  className?: string;
}

export const Checkbox: FC<PropsWithChildren<CheckboxProps>> = ({
  children,
  className,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const id = useId();

  const value = useMemo(
    () => ({
      id,
      isChecked,
      onToggle: () => setIsChecked((prevState) => !prevState),
    }),
    [id, isChecked]
  );

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <CheckboxContext.Provider value={value}>
        {children}
      </CheckboxContext.Provider>
    </div>
  );
};

export const CheckboxIndicator = () => {
  const { id, isChecked, onToggle } = useContext(CheckboxContext);
  if (!id) {
    throw new Error('CheckboxContext must be used within a CheckboxProvider');
  }

  return (
    <div className="relative flex items-center">
      <input
        tabIndex={0}
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

interface CheckboxLabelProps {
  children: ReactNode;
}

export function CheckboxLabel({ children }: CheckboxLabelProps) {
  const { id } = useContext(CheckboxContext);

  if (!id) {
    throw new Error('CheckboxContext must be used within a CheckboxProvider');
  }

  return (
    <label htmlFor={id}>
      <Typography className="cursor-pointer leading-none font-medium">
        {children}
      </Typography>
    </label>
  );
}
