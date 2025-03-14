'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Typography } from '@/shared/ui/typography';
import { List } from './components/list';
import { Button } from '@/shared/ui/button';
import { routes } from '@/shared/constants/routes';
import { FormType, schema } from './schema';

export const QuizTopics = () => {
  const router = useRouter();
  const tCommon = useTranslations('Common');
  const t = useTranslations('QuizTopics');

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
    console.log(value);
    router.push(routes.quiz('topics'));
  };

  return (
    <section className="flex flex-1 flex-col gap-4 pb-4">
      <div className="font-nunito mb-6 flex flex-col items-center gap-4 text-center">
        <Typography variant="h1">{t('title')}</Typography>
        <Typography className="text-regal-grey-200">
          {t('description')}
        </Typography>
      </div>

      <FormProvider {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-1 flex-col justify-between"
        >
          <List />

          <Button
            type="submit"
            variant="secondary"
            size="sm"
            className="w-full"
            disabled={!isValid}
          >
            {tCommon('next')}
          </Button>
        </form>
      </FormProvider>
    </section>
  );
};
