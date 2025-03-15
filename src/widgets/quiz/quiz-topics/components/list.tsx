import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Controller, useFormContext } from 'react-hook-form';
import { topicsVariants } from '../../constants';
import { Checkbox } from '@/shared/ui/checkbox';
import { Typography } from '@/shared/ui/typography';

export const List = () => {
  const t = useTranslations('QuizTopics');
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
    <div className="flex w-full items-center justify-center">
      <ul className="grid grid-cols-3 gap-2 transition-all md:gap-6">
        {topicsVariants.map(({ value, image, translateValue }) => (
          <li key={value} className="nth-[3n+2]:translate-y-5">
            <Controller
              name="selected"
              control={control}
              render={() => (
                <Checkbox
                  variant="circle"
                  value={value}
                  onChange={handleChange}
                >
                  <Image src={image} alt={value} width={25} height={25} />
                  <Typography
                    variant="small"
                    className="text-center font-semibold"
                  >
                    {t(translateValue)}
                  </Typography>
                </Checkbox>
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
