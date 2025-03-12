import { routing } from '@/i18n/routing';
import { Button } from '@/shared/ui/button';
import { useTranslations } from 'next-intl';

export const List = () => {
  const t = useTranslations('LocaleSwitcher');

  return (
    <ul>
      {routing.locales.map((value) => (
        <li key={value}>
          <Button>{t('locale', { locale: value })}</Button>
        </li>
      ))}
    </ul>
  );
};
