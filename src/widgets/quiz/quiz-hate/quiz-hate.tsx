'use client';

import { useTranslations } from 'next-intl';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';
import { routes } from '@/shared/constants/routes';
import { CheckQuiz } from '@/features/quiz/ui/check-quiz';
import { useQuiz } from '@/entities/quiz/model/useQuiz';
import { quizSteps } from '@/shared/constants/quiz';
import { List } from './ui/list';
import { FormType, schema } from './model/schema';

export const QuizHate = () => {
  const tCommon = useTranslations('Common');
  const t = useTranslations('QuizHate');

  const { handleUpdateQuiz } = useQuiz({
    currentStep: quizSteps.hate,
    nextPage: routes.quiz(quizSteps.topics),
  });

  const form = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      selected: [],
    },
  });
  const {
    formState: { isValid },
    handleSubmit,
  } = form;

  const onSubmit = ({ selected }: FormType) => {
    const value = selected.join(', ');
    handleUpdateQuiz(value);
  };

  return (
    <CheckQuiz prevStep={quizSteps.age}>
      <section className="flex flex-1 flex-col gap-4 pb-5">
        <div className="font-nunito mb-6 flex flex-col items-center gap-4 text-center">
          <Typography
            variant="h1"
            className="font-albert text-3xl font-extrabold text-white"
          >
            {t.rich('title', {
              highlighted: (chunks) => (
                <span className="text-regal-pink-300">{chunks}</span>
              ),
            })}
          </Typography>
        </div>

        <FormProvider {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-1 flex-col items-center justify-between"
          >
            <List />

            <Button
              type="submit"
              variant="secondary"
              size="sm"
              className="w-full max-w-96"
              disabled={!isValid}
            >
              {tCommon('next')}
            </Button>
          </form>
        </FormProvider>
      </section>
    </CheckQuiz>
  );
};
