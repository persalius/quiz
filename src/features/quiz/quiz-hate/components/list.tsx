'use client';

import { useTranslations } from 'next-intl';
import { Checkbox, CheckboxLabel } from '@/shared/ui/checkbox/';
import { hateVariants } from '../../constants';

export const List = () => {
  const t = useTranslations('QuizHate');

  return (
    <ul className="flex flex-col gap-3">
      {hateVariants.map(({ value, translateValue }) => (
        <li key={value}>
          <Checkbox>
            <CheckboxLabel>{t(translateValue)}</CheckboxLabel>
          </Checkbox>
        </li>
      ))}
    </ul>
  );
};
