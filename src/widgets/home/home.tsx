import { useTranslations } from 'next-intl';
import { Typography } from '@/shared/ui/typography';
import { Link } from '@/shared/ui/link';
import { routes } from '@/shared/constants/routes';
import { quizSteps } from '@/shared/constants/quiz';

export const Home = () => {
  const t = useTranslations('HomePage');

  return (
    <>
      <Typography variant="h1">{t('title')}</Typography>
      <Link
        variant="secondary"
        className="w-full max-w-3xs"
        href={routes.quiz(quizSteps.language)}
      >
        Got to quiz
      </Link>
    </>
  );
};
