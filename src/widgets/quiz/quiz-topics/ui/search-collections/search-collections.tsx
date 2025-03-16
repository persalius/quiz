import { useTranslations } from 'next-intl';
import { useRouter } from '@/shared/lib/i18n/navigation';
import { Typography } from '@/shared/ui/typography';
import { CircularProgressBar } from '../circular-progress-bar/circular-progress-bar';
import { Transition } from '@/shared/ui/transition';
import { routes } from '@/shared/constants/routes';

const mockProgress = 100;

export const SearchCollections = () => {
  const t = useTranslations('SearchCollections');
  const router = useRouter();

  const handleAnimationComplete = () => {
    router.push(routes.email);
  };

  return (
    <Transition
      variant="translate"
      className="bg-main-500 fixed top-0 left-0 z-30 flex h-dvh w-screen flex-col items-center justify-center gap-10"
    >
      <CircularProgressBar
        onAnimationComplete={handleAnimationComplete}
        progress={mockProgress}
      />
      <Typography className="font-albert max-w-52 text-center">
        {t('title')}
      </Typography>
    </Transition>
  );
};
