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
        scale: 0.95,
        clipPath: 'circle(0% at 50% 50%)',
        filter: 'blur(10px)',
      }}
      animate={{
        opacity: 1,
        scale: 1,
        clipPath: 'circle(100% at 50% 50%)',
        filter: 'blur(0px)',
      }}
      exit={{
        opacity: 0,
        scale: 1.05,
        clipPath: 'circle(0% at 50% 50%)',
        filter: 'blur(10px)',
      }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className="relative flex flex-1 flex-col"
    >
      {children}
    </motion.div>
  );
};

// 'use client';

// import { motion } from 'motion/react';
// import { usePathname } from '@/i18n/navigation';

// export const Transition = ({ children }: { children: React.ReactNode }) => {
//   const pathname = usePathname();

//   return (
//     <motion.div
//       key={pathname}
//       initial={{ opacity: 0, y: 30, filter: 'blur(12px)', scale: 0.98 }}
//       animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
//       exit={{ opacity: 0, y: -30, filter: 'blur(12px)', scale: 0.98 }}
//       transition={{
//         duration: 0.5,
//         ease: [0.33, 1, 0.68, 1],
//       }}
//       className="relative"
//     >
//       {children}
//     </motion.div>
//   );
// };
