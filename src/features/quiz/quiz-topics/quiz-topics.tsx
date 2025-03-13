'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { Typography } from '@/shared/ui/typography';
import { List } from './components/list';
import { Button } from '@/shared/ui/button';
import { routes } from '@/shared/constants/routes';

export const QuizTopics = () => {
  const router = useRouter();
  const tCommon = useTranslations('Common');
  const t = useTranslations('QuizTopics');

  const handleClick = () => {
    router.push(routes.quiz('topics'));
  };

  return (
    <section className="flex flex-1 flex-col justify-between gap-4 pb-4">
      <div>
        <div className="font-nunito mb-6 flex flex-col items-center gap-4 text-center">
          <Typography variant="h1">{t('title')}</Typography>
          <Typography className="text-regal-grey-200">
            {t('description')}
          </Typography>
        </div>

        <List />
      </div>

      <Button
        variant="secondary"
        size="sm"
        className="w-full"
        onClick={handleClick}
      >
        {tCommon('next')}
      </Button>
    </section>
  );
};
