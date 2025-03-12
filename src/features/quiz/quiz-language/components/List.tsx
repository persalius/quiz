'use client';

import { routing } from '@/i18n/routing';
import { Button } from '@/shared/ui/button';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { routes } from '@/shared/constants/routes';

export const List = () => {
  const t = useTranslations('LocaleSwitcher');
  const router = useRouter();

  const handleClick = (language: string) => {
    console.log('language', language);
    router.push(routes.quiz('gender'));
  };

  return (
    <ul className="flex flex-col justify-center gap-3 md:grid md:grid-cols-2">
      {routing.locales.map((language) => (
        <li key={language}>
          <Button className="w-full" onClick={() => handleClick(language)}>
            {t('locale', { locale: language })}
          </Button>
        </li>
      ))}
    </ul>
  );
};
