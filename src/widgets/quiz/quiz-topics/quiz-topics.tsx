'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Typography } from '@/shared/ui/typography';
import { List } from './components/list';
import { Button } from '@/shared/ui/button';
import { FormType, schema } from './schema';
import { SearchCollections } from '../search-collections/search-collections';
import { CheckQuiz } from '../../../features/quiz/ui/check-quiz';
import { useQuiz } from '../../../entities/quiz/model/useQuiz';

export const QuizTopics = () => {
  const [isViewSearch, setIsViewSearch] = useState(false);
  const tCommon = useTranslations('Common');
  const t = useTranslations('QuizTopics');

  const { handleUpdateQuiz } = useQuiz({
    currentStep: 'topics',
    onSuccess: () => setIsViewSearch(true),
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
    <CheckQuiz prevStep="hate">
      <section className="flex flex-1 flex-col gap-4 pb-5">
        <div className="font-nunito mb-6 flex flex-col items-center gap-4 text-center">
          <Typography variant="h1">{t('title')}</Typography>
          <Typography className="text-regal-grey-200">
            {t('description')}
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

      {isViewSearch && <SearchCollections />}
    </CheckQuiz>
  );
};
