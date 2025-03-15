import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/shared/ui/button';
import { ageVariants } from '../../constants';

interface Props {
  onClick: (age: string) => void;
}

export const List: FC<Props> = ({ onClick }) => {
  const t = useTranslations('QuizAge');

  return (
    <ul className="flex flex-col justify-center gap-3 md:grid md:grid-cols-2">
      {ageVariants.map(({ value, translateValue }) => (
        <li key={value}>
          <Button size="lg" className="w-full" onClick={() => onClick(value)}>
            {t('age', { age: value, translateValue })}
          </Button>
        </li>
      ))}
    </ul>
  );
};
