import { Link as NavLink } from '@/i18n/navigation';
import { AnchorHTMLAttributes, FC } from 'react';
import { cn } from '../lib/utils/cn';
import { buttonVariants, Variant, Size } from './button';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
};

export const Link: FC<Props> = ({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  return (
    <NavLink
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
};
