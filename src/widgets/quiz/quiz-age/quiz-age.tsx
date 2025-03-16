'use client';

import { useEffect } from 'react';
import { useRouter } from '@/shared/lib/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Typography } from '@/shared/ui/typography';
import { CheckQuiz } from '@/features/quiz/ui/check-quiz';
import { useQuiz } from '@/entities/quiz/model/useQuiz';
import { routes } from '@/shared/constants/routes';
import { quizSteps } from '@/shared/constants/quiz';
import { List } from './ui/list';
import { quizInformation } from '@/shared/constants/quizInformtaion';

export const QuizAge = () => {
  const t = useTranslations('QuizAge');
  const router = useRouter();

  const { handleUpdateQuiz } = useQuiz({
    currentStep: quizSteps.age,
    nextPage: routes.quiz(quizInformation.age.nextQuestion),
  });

  useEffect(() => {
    router.prefetch(routes.quiz(quizInformation.age.nextQuestion));
  }, [router]);

  return (
    <CheckQuiz prevStep={quizInformation.age.prevQuestion}>
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
