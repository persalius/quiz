import { useTranslations } from 'next-intl';
import { Typography } from '@/shared/ui/typography';

export const QuizHate = () => {
  const t = useTranslations('QuizHate');

  return (
    <section>
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
    </section>
  );
};
