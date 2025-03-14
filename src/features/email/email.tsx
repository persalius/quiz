'use client';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from '@/i18n/navigation';
import { z } from 'zod';
import { Button } from '@/shared/ui/button';
import { TextField } from '@/shared/ui/text-field';
import { Typography } from '@/shared/ui/typography';
import { useTranslations } from 'next-intl';
import { useSchema } from './schema';
import { Policy } from './components/policy';
import { routes } from '@/shared/constants/routes';

export const Email = () => {
  const tCommon = useTranslations('Common');
  const t = useTranslations('Email');
  const schema = useSchema();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<z.infer<typeof schema>>({
    mode: 'onTouched',
    shouldFocusError: true,
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
    router.push(routes.completion);
  };

  return (
    <section className="flex h-full flex-1 flex-col items-center pt-18">
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
        className="flex w-full flex-1 flex-col justify-between gap-4 pt-14"
      >
        <div className="flex w-full flex-1 flex-col items-center gap-14">
          <Controller
            name="email"
            control={control}
            render={({ field, formState }) => {
              console.log(formState.errors);
              return (
                <TextField
                  {...field}
                  placeholder={t('placeholder')}
                  errorMessage={formState.errors.email?.message}
                  isInvalid={!!formState.errors.email}
                  className="w-full"
                />
              );
            }}
          />

          <Policy />
        </div>

        <Button type="submit" variant="secondary" disabled={!isValid}>
          {tCommon('next')}
        </Button>
      </form>
    </section>
  );
};
