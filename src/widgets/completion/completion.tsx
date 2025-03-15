'use client';

import { Typography } from '@/shared/ui/typography';
import { useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Checkmark } from './components/checkmark';
import { DownloadIcon } from '@/shared/icons';
import { routes } from '@/shared/constants/routes';
import { CheckQuiz } from '@/features/quiz/ui/check-quiz';
import { useClearQuiz } from '@/entities/quiz/api/hooks';
import { Button } from '@/shared/ui/button';
import { useDownloadCSV } from '@/entities/quiz/model/useDownloadCSV';

export const Completion = () => {
  const t = useTranslations('Completion');
  const router = useRouter();

  const { onDownloadCSV } = useDownloadCSV();

  const { mutate } = useClearQuiz({
    onSuccess: () => router.replace(routes.quiz('language')),
  });

  return (
    <CheckQuiz prevStep="email">
      <section className="flex h-full flex-col items-center justify-between pt-24">
        <div className="flex flex-col items-center">
          <Typography
            variant="h1"
            className="font-niconne text-regal-grey text-4xl leading-none font-normal"
          >
            {t('title')}
          </Typography>
          <Typography className="font-albert mb-12.5 font-semibold">
            {t('description')}
          </Typography>

          <Checkmark />
        </div>

        <div className="flex w-full flex-col items-center gap-7.5">
          <Button
            variant="link"
            size="link"
            className="w-full max-w-96"
            onClick={onDownloadCSV}
          >
            <DownloadIcon />
            {t('download')}
          </Button>

          <Button
            variant="secondary"
            onClick={() => mutate()}
            className="w-full max-w-96"
          >
            {t('retakeQuiz')}
          </Button>
        </div>
      </section>
    </CheckQuiz>
  );
};
