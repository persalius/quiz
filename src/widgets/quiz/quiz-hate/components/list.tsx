'use client';

import { useTranslations } from 'next-intl';
import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox, CheckboxLabel } from '@/shared/ui/checkbox/';
import { hateVariants } from '../../constants';

export const List = () => {
  const t = useTranslations('QuizHate');
  const { control, getValues, setValue } = useFormContext();

  const handleChange = (data: { value: string; isChecked: boolean }) => {
    const { value, isChecked } = data;
    const selected = getValues('selected');
    const newValue = isChecked
      ? selected.filter((item: string) => item !== value)
      : [...selected, value];
    setValue('selected', newValue, { shouldValidate: true });
  };

  return (
    <ul className="flex flex-col gap-3">
      {hateVariants.map(({ value, translateValue }) => (
        <li key={value}>
          <Controller
            name="selected"
            control={control}
            render={() => (
              <Checkbox value={value} onChange={handleChange}>
                <CheckboxLabel>{t(translateValue)}</CheckboxLabel>
              </Checkbox>
            )}
          />
        </li>
      ))}
    </ul>
  );
};
