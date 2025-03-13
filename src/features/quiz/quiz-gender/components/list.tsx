'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { Button } from '@/shared/ui/button';
import { routes } from '@/shared/constants/routes';
import { genderVariants } from '../../constants';
import { Typography } from '@/shared/ui/typography';

export const List = () => {
  const router = useRouter();
  const t = useTranslations('QuizGender');

  const handleClick = (gender: string) => {
    console.log(gender);
    router.push(routes.quiz('age'));
  };

  return (
    <ul className="flex justify-between gap-3 md:justify-center">
      {genderVariants.map(({ image, value }) => (
        <li key={value} className="max-w-40 flex-1">
          <Button
            className="flex h-36 w-full flex-col gap-2.5"
            onClick={() => handleClick(value)}
          >
            <Image src={image} alt="female" width={52} height={52} />
            <Typography className="text-[15px] leading-5 font-semibold">
              {t(value)}
            </Typography>
          </Button>
        </li>
      ))}
    </ul>
  );
};
