import { Typography } from '@/shared/ui/typography';
import { useTranslations } from 'next-intl';
import { List } from './components/list';

export const QuizAge = () => {
  const t = useTranslations('QuizAge');

  return (
    <section>
      <div className="font-nunito mb-6 flex flex-col items-center gap-4 text-center">
        <Typography
          variant="h1"
          className="font-albert text-3xl font-extrabold text-white"
        >
          {t('title')}
        </Typography>
      </div>

      <List />
    </section>
  );
};
