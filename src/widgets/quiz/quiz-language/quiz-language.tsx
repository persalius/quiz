'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { Typography } from '@/shared/ui/typography';
import { List } from './components/List';
import { routes } from '@/shared/constants/routes';
import { useQuiz } from '../../../entities/quiz/model/useQuiz';

export const QuizLanguage = () => {
  const t = useTranslations('QuizLanguage');
  const router = useRouter();

  const { handleUpdateQuiz } = useQuiz({
    currentStep: 'language',
  });

  const handleUpdate = (languageValue: string, languageId: string) => {
    handleUpdateQuiz(languageValue, () =>
      router.push(routes.quiz('gender'), { locale: languageId })
    );
  };

  return (
    <section>
      <div className="font-nunito mb-6 flex flex-col items-center gap-4 text-center">
        <Typography variant="h1">{t('title')}</Typography>
        <Typography className="text-regal-grey-200">
          {t('description')}
        </Typography>
      </div>

      <List onClick={handleUpdate} />
    </section>
  );
};
