import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { cn } from '../lib/utils/cn';
import { cva } from 'class-variance-authority';

export type Variant = 'primary' | 'secondary';
export type Size = 'sm' | 'md' | 'lg';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
};

const buttonVariants = cva(
  'disabled:opacity-40 transition-opacity duration-300 flex justify-center items-center focus:outline-none focus-visible:ring-2 cursor-pointer transition-colors disabled:cursor-default font-albert text-[17px] leading-6 text-white px-5',
  {
    variants: {
      variant: {
        primary:
          'bg-main-300 hover:bg-main-300/75 active:bg-main-300/65 rounded-2xl font-medium',
        secondary:
          'bg-regal-pink hover:bg-regal-pink/75 active:bg-regal-pink/65 font-extrabold justify-center rounded-full',
      },
      size: {
        sm: 'h-14',
        md: 'h-15',
        lg: 'h-19',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  return (
    <button
      type="button"
      tabIndex={0}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button, buttonVariants };
