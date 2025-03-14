import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Typography } from '@/shared/ui/typography';
import { routes } from '@/shared/constants/routes';

export const Policy = () => {
  const tCommon = useTranslations('Common');

  return (
    <Typography
      variant="small"
      className="text-regal-grey-300 max-w-70 text-center leading-4.5 font-medium"
    >
      {tCommon.rich('policy', {
        highlighted: (chunks) => (
          <Link
            href={routes.policy}
            className="text-regal-pink-500"
            target="_blank"
          >
            {chunks}
          </Link>
        ),
        highlightedsecond: (chunks) => (
          <Link
            href={routes.terms}
            className="text-regal-pink-500"
            target="_blank"
          >
            {chunks}
          </Link>
        ),
      })}
    </Typography>
  );
};
