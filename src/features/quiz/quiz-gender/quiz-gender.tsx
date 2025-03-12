import { useTranslations } from 'next-intl';
import { Typography } from '@/shared/ui/typography';
import { List } from './components/list';

export const QuizGender = () => {
  const t = useTranslations('QuizGender');

  return (
    <section>
      <div className="font-nunito mb-6 flex flex-col items-center gap-4 text-center">
        <Typography variant="h1">{t('title')}</Typography>
        <Typography className="text-regal-grey-200">
          {t('description')}
        </Typography>
      </div>

      <List />
    </section>
  );
};
