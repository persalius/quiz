'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from '@/shared/lib/i18n/navigation';
import { Typography } from '@/shared/ui/typography';
import { routes } from '@/shared/constants/routes';
import { useQuiz } from '@/entities/quiz/model/useQuiz';
import { quizSteps } from '@/shared/constants/quiz';
import { quizInformation } from '@/shared/constants/quizInformtaion';
import { List } from './ui/List';
import { useEffect } from 'react';

export const QuizLanguage = () => {
  const t = useTranslations('QuizLanguage');
  const router = useRouter();

  const { handleUpdateQuiz } = useQuiz({
    currentStep: quizSteps.language,
  });

  useEffect(() => {
    if (quizInformation.language.nextQuestion) {
      router.prefetch(routes.quiz(quizInformation.language.nextQuestion));
    }
  }, [router]);

  const handleUpdate = (languageValue: string, languageId: string) => {
    handleUpdateQuiz(languageValue, () =>
      router.push(routes.quiz(quizInformation.language.nextQuestion), {
        locale: languageId,
      })
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
