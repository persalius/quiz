'use client';

import Image from 'next/image';
import { useRouter } from '@/i18n/navigation';
import { Button } from '@/shared/ui/button';
import { routes } from '@/shared/constants/routes';

const variants = [
  {
    image: '/female.png',
    value: 'female',
  },
  {
    image: '/male.png',
    value: 'male',
  },
  {
    image: '/smile.png',
    value: 'other',
  },
];

export const List = () => {
  const router = useRouter();

  const handleClick = (gender: string) => {
    console.log(gender);
    router.push(routes.quiz('age'));
  };

  return (
    <ul className="flex justify-between gap-3">
      {variants.map(({ image, value }) => (
        <li key={value} className="flex-1">
          <Button className="h-36 w-full" onClick={() => handleClick(value)}>
            <Image src={image} alt="female" width={52} height={52} />
          </Button>
        </li>
      ))}
    </ul>
  );
};
