'use client';

import { motion } from 'motion/react';
import { usePathname } from '@/i18n/navigation';

export const Transition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{
        opacity: 0,
        scale: 0.9,
        clipPath: 'circle(0% at 50% 50%)',
      }}
      animate={{
        opacity: 1,
        scale: 1,
        clipPath: 'circle(100% at 50% 50%)',
      }}
      transition={{ type: 'spring', duration: 1, bounce: 0 }}
      className="flex flex-1 flex-col"
    >
      {children}
    </motion.div>
  );
};
