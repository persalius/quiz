'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from '@/shared/lib/i18n/navigation';
import { Typography } from '@/shared/ui/typography';
import { routes } from '@/shared/constants/routes';
import { CheckQuiz } from '@/features/quiz/ui/check-quiz';
import { useQuiz } from '@/entities/quiz/model/useQuiz';
import { quizSteps } from '@/shared/constants/quiz';
import { List } from './ui/list';
import { useEffect } from 'react';

export const QuizGender = () => {
  const t = useTranslations('QuizGender');
  const router = useRouter();

  const { handleUpdateQuiz } = useQuiz({
    currentStep: quizSteps.gender,
    nextPage: routes.quiz(quizSteps.age),
  });

  useEffect(() => {
    router.prefetch(routes.quiz(quizSteps.age));
  }, [router]);

  return (
    <CheckQuiz prevStep={quizSteps.language}>
      <section>
        <div className="font-nunito mb-6 flex flex-col items-center gap-4 text-center">
          <Typography variant="h1">{t('title')}</Typography>
          <Typography className="text-regal-grey-200">
            {t('description')}
          </Typography>
        </div>

        <List onClick={handleUpdateQuiz} />
      </section>
    </CheckQuiz>
  );
};
