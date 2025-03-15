'use client';

import { Typography } from '@/shared/ui/typography';
import { useTranslations } from 'next-intl';
import { List } from './ui/list';
import { CheckQuiz } from '../../../features/quiz/ui/check-quiz';
import { useQuiz } from '../../../entities/quiz/model/useQuiz';
import { routes } from '@/shared/constants/routes';

export const QuizAge = () => {
  const t = useTranslations('QuizAge');

  const { handleUpdateQuiz } = useQuiz({
    currentStep: 'age',
    nextPage: routes.quiz('hate'),
  });

  return (
    <CheckQuiz prevStep="gender">
      <section>
        <div className="font-nunito mb-6 flex flex-col items-center gap-4 text-center">
          <Typography
            variant="h1"
            className="font-albert text-3xl font-extrabold text-white"
          >
            {t('title')}
          </Typography>
        </div>

        <List onClick={handleUpdateQuiz} />
      </section>
    </CheckQuiz>
  );
};
