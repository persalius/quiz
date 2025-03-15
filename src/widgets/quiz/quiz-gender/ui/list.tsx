import { FC } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/shared/ui/button';
import { genderVariants } from '../../constants';
import { Typography } from '@/shared/ui/typography';

interface Props {
  onClick: (gender: string) => void;
}

export const List: FC<Props> = ({ onClick }) => {
  const t = useTranslations('QuizGender');

  return (
    <ul className="flex justify-between gap-3 md:justify-center">
      {genderVariants.map(({ image, value, translateValue }) => (
        <li key={value} className="max-w-40 flex-1">
          <Button
            className="flex h-36 w-full flex-col gap-2.5"
            onClick={() => onClick(value)}
          >
            <Image src={image} alt="female" width={52} height={52} />
            <Typography className="text-[15px] leading-5 font-semibold">
              {t(translateValue)}
            </Typography>
          </Button>
        </li>
      ))}
    </ul>
  );
};
