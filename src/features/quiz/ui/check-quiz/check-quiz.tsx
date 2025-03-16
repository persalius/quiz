'use client';

import { FC, PropsWithChildren, useEffect } from 'react';
import { useRouter } from '@/shared/lib/i18n/navigation';
import { QuizProperty } from '@/shared/types/quiz';
import { routes } from '@/shared/constants/routes';
import { useGetQuiz } from '@/entities/quiz/api/hooks';
import { quizSteps } from '@/shared/constants/quiz';

interface Props {
  prevStep?: QuizProperty;
}

export const CheckQuiz: FC<PropsWithChildren<Props>> = ({
  children,
  prevStep,
}) => {
  const router = useRouter();
  const { data: quiz, isLoading } = useGetQuiz();

  useEffect(() => {
    // === Important ===
    // === This check should be done on the server side when the DB is ready. ===
    if (!isLoading && prevStep && !quiz?.[prevStep]) {
      router.replace(routes.quiz(quizSteps.language));
    }
  }, [quiz, isLoading, router, prevStep]);

  if ((isLoading || !Object.keys(quiz || {}).length) && prevStep) {
    return null;
  }

  return <>{children}</>;
};
