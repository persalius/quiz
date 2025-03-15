'use client';

import { motion } from 'motion/react';

export const Checkmark = () => {
  return (
    <motion.div
      className="flex h-27 w-27 items-center justify-center rounded-full bg-green-100"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
    >
      <motion.svg
        width="65"
        height="65"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="4"
        className="stroke-green-500"
        initial={{ strokeDasharray: 50, strokeDashoffset: 50 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <path d="M7 16l6 6L25 8" />
      </motion.svg>
    </motion.div>
  );
};
