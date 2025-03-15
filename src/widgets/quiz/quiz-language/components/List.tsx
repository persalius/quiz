'use client';

import { FC } from 'react';
import { LocaleKey, locales } from '@/i18n/routing';
import { Button } from '@/shared/ui/button';
import { useTranslations } from 'next-intl';

interface Props {
  onClick: (languageValue: string, languageId: string) => void;
}

export const List: FC<Props> = ({ onClick }) => {
  const t = useTranslations('QuizLanguage');

  return (
    <ul className="flex flex-col justify-center gap-3 md:grid md:grid-cols-2">
      {(Object.keys(locales) as LocaleKey[]).map((language) => (
        <li key={language}>
          <Button
            className="w-full"
            onClick={() => onClick(locales[language].value, language)}
          >
            {t('locale', { locale: language })}
          </Button>
        </li>
      ))}
    </ul>
  );
};
