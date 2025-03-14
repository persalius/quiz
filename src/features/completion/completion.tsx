import { Typography } from '@/shared/ui/typography';
import { useTranslations } from 'next-intl';
import { Checkmark } from './components/checkmark';
import { DownloadIcon } from '@/shared/icons';
import { Link } from '@/shared/ui/link';

export const Completion = () => {
  const t = useTranslations('Completion');

  return (
    <section className="flex flex-col items-center">
      <Typography
        variant="h1"
        className="font-niconne text-regal-grey text-4xl leading-none font-normal"
      >
        {t('title')}
      </Typography>
      <Typography className="font-albert font-semibold">
        {t('description')}
      </Typography>

      <Checkmark />

      <Typography className="font-albert flex gap-2 font-semibold">
        <DownloadIcon />
        {t('download')}
      </Typography>

      <Link variant="secondary" href="/">
        Retake quiz
      </Link>
    </section>
  );
};
