import Image from 'next/image';
import { topicsVariants } from '../../constants';
import { Checkbox } from '@/shared/ui/checkbox';
import { Typography } from '@/shared/ui/typography';

export const List = () => {
  return (
    <div className="flex items-center justify-center">
      <ul className="grid grid-cols-3 gap-2">
        {topicsVariants.map(({ value, image }) => (
          <li key={value} className="nth-[3n+2]:translate-y-5">
            <Checkbox variant="circle">
              <Image src={image} alt={value} width={25} height={25} />
              <Typography variant="small" className="text-center font-semibold">
                {value}
              </Typography>
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
};
