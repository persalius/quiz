import { Typography } from '@/shared/ui/typography';
import { useTranslations } from 'next-intl';
import { Checkmark } from './components/checkmark';
import { DownloadIcon } from '@/shared/icons';
import { Link } from '@/shared/ui/link';
import { routes } from '@/shared/constants/routes';
import { CheckQuiz } from '@/features/quiz/ui/check-quiz';

export const Completion = () => {
  const t = useTranslations('Completion');

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
          <Typography className="font-albert flex gap-2 font-semibold">
            <DownloadIcon />
            {t('download')}
          </Typography>

          <Link variant="secondary" href={routes.home} className="w-full">
            {t('retakeQuiz')}
          </Link>
        </div>
      </section>
    </CheckQuiz>
  );
};
