import { useTranslations } from 'next-intl';
import { Typography } from '@/shared/ui/typography';
import { List } from './components/list';
import { Button } from '@/shared/ui/button';
// import { useRouter } from 'next/router';
// import { routes } from '@/shared/constants/routes';

export const QuizHate = () => {
  // const router = useRouter();
  const tCommon = useTranslations('Common');
  const t = useTranslations('QuizHate');

  // const handleClick = () => {
  //   console.log('hate', hate);
  //   router.push(routes.quiz('topics'));
  // };

  return (
    <section className="flex flex-1 flex-col justify-between gap-4 pb-4">
      <div>
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

        <List />
      </div>

      <Button variant="secondary" size="sm" className="w-full">
        {tCommon('next')}
      </Button>
    </section>
  );
};
