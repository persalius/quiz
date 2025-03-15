import { useTranslations } from 'next-intl';
import { Typography } from '@/shared/ui/typography';
import { CircularProgressBar } from '../circular-progress-bar/circular-progress-bar';
import { Transition } from '@/shared/ui/transition';

export const SearchCollections = () => {
  const t = useTranslations('SearchCollections');

  return (
    <Transition
      variant="translate"
      className="bg-main-500 fixed top-0 left-0 z-30 flex h-dvh w-screen flex-col items-center justify-center gap-10"
    >
      <CircularProgressBar progress={100} />
      <Typography className="font-albert max-w-52 text-center">
        {t('title')}
      </Typography>
    </Transition>
  );
};
