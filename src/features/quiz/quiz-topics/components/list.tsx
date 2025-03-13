import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { topicsVariants } from '../../constants';
import { Checkbox } from '@/shared/ui/checkbox';
import { Typography } from '@/shared/ui/typography';

export const List = () => {
  const t = useTranslations('QuizTopics');

  return (
    <div className="flex items-center justify-center">
      <ul className="grid grid-cols-3 gap-2">
        {topicsVariants.map(({ value, image, translateValue }) => (
          <li key={value} className="nth-[3n+2]:translate-y-5">
            <Checkbox variant="circle">
              <Image src={image} alt={value} width={25} height={25} />
              <Typography variant="small" className="text-center font-semibold">
                {t(translateValue)}
              </Typography>
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
};
