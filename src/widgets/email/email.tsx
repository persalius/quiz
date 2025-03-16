'use client';

import { useEffect } from 'react';
import { useRouter } from '@/shared/lib/i18n/navigation';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { Button } from '@/shared/ui/button';
import { TextField } from '@/shared/ui/text-field';
import { Typography } from '@/shared/ui/typography';
import { routes } from '@/shared/constants/routes';
import { CheckQuiz } from '@/features/quiz/ui/check-quiz';
import { useQuiz } from '@/entities/quiz/model/useQuiz';
import { additionalQuiz } from '@/shared/constants/quiz';
import { useSchema } from './model/schema';
import { Policy } from './ui/policy';
import { quizInformation } from '@/shared/constants/quizInformtaion';

export const Email = () => {
  const tCommon = useTranslations('Common');
  const t = useTranslations('Email');
  const schema = useSchema();

  const router = useRouter();

  useEffect(() => {
    router.prefetch(routes.completion);
  }, [router]);

  const { handleUpdateQuiz } = useQuiz({
    currentStep: additionalQuiz.email,
    nextPage: routes.completion,
  });

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<z.infer<typeof schema>>({
    // This is for demonstration. Need to change to onTouched
    mode: 'all',
    shouldFocusError: true,
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = ({ email }: z.infer<typeof schema>) => {
    handleUpdateQuiz(email);
  };

  return (
    <CheckQuiz prevStep={quizInformation.email.prevQuestion}>
      <section className="mx-auto flex h-full w-full max-w-xl flex-1 flex-col items-center pt-18">
        <div className="flex flex-col items-center gap-3">
          <Typography
            variant="h1"
            className="font-albert text-3xl leading-9.5 font-extrabold"
          >
            {tCommon('email')}
          </Typography>
          <Typography className="text-regal-grey-200 font-albert text-[15px] font-medium">
            {t('description')}
          </Typography>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-1 flex-col items-center justify-between gap-4 pt-14"
        >
          <div className="flex w-full flex-1 flex-col items-center gap-14">
            <Controller
              name="email"
              control={control}
              render={({ field, formState }) => (
                <TextField
                  {...field}
                  placeholder={t('placeholder')}
                  errorMessage={formState.errors.email?.message}
                  isInvalid={!!formState.errors.email}
                  className="w-full"
                />
              )}
            />

            <Policy />
          </div>

          <Button
            type="submit"
            variant="secondary"
            size="sm"
            disabled={!isValid}
            className="w-full max-w-96"
          >
            {tCommon('next')}
          </Button>
        </form>
      </section>
    </CheckQuiz>
  );
};
