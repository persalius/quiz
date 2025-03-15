import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import { Typography } from '@/shared/ui/typography';
import { CircularProgressBar } from '../circular-progress-bar/circular-progress-bar';

export const SearchCollections = () => {
  const t = useTranslations('SearchCollections');

  return (
    <motion.section
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'spring' }}
      className="bg-main-500 fixed top-0 left-0 z-30 flex h-dvh w-screen flex-col items-center justify-center gap-10"
    >
      <CircularProgressBar progress={100} />
      <Typography className="font-albert max-w-52 text-center">
        {t('title')}
      </Typography>
    </motion.section>
  );
};
