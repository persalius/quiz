import { Link as NavLink } from '@/i18n/navigation';
import { AnchorHTMLAttributes, FC } from 'react';
import { cn } from '../lib/utils/cn';
import { buttonClasses } from './button';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export const Link: FC<Props> = ({ className, ...props }) => {
  return <NavLink className={cn(buttonClasses, className)} {...props} />;
};
