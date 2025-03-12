'use client';

import { Typography } from '@/shared/ui/typography';
import { Link } from '@/shared/ui/link';
import { routes } from '@/shared/constants/routes';
import { useTranslations } from 'next-intl';

export const Home = () => {
  const t = useTranslations('HomePage');

  return (
    <>
      <Typography variant="h1">{t('title')}</Typography>
      <Link href={routes.quiz(1)}>Got to quiz</Link>
    </>
  );
};
