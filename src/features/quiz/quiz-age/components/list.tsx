'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/shared/ui/button';
import { ageVariants } from '../../constants';
import { useRouter } from '@/i18n/navigation';
import { routes } from '@/shared/constants/routes';

export const List = () => {
  const t = useTranslations('QuizAge');
  const router = useRouter();

  const handleClick = (age: string) => {
    console.log('age', age);
    router.push(routes.quiz('hate'));
  };

  return (
    <ul className="flex flex-col justify-center gap-3 md:grid md:grid-cols-2">
      {ageVariants.map(({ value, translateValue }) => (
        <li key={value}>
          <Button
            size="lg"
            className="w-full"
            onClick={() => handleClick(value)}
          >
            {t('age', { age: value, translateValue })}
          </Button>
        </li>
      ))}
    </ul>
  );
};
