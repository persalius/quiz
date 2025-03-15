'use client';

import { FC, PropsWithChildren, useEffect } from 'react';
import { useRouter } from '@/i18n/navigation';
import { QuizProperty } from '@/shared/types/quiz';
import { routes } from '@/shared/constants/routes';
import { useGetQuiz } from '@/entities/quiz/api/hooks';

interface Props {
  prevStep: QuizProperty;
}

export const CheckQuiz: FC<PropsWithChildren<Props>> = ({
  children,
  prevStep,
}) => {
  const router = useRouter();
  const { data: quiz, isLoading } = useGetQuiz();

  useEffect(() => {
    // === This check should be done on the server side when the DB is ready. ===
    if (!isLoading && !quiz?.[prevStep]) {
      router.replace(routes.quiz('language'));
    }
  }, [quiz, isLoading, router, prevStep]);

  if (isLoading || !Object.keys(quiz || {}).length) {
    return null;
  }

  return <>{children}</>;
};
