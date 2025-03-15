import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { cn } from '../lib/utils/cn';
import { cva } from 'class-variance-authority';

export type Variant = 'primary' | 'secondary';
export type Size = 'sm' | 'md' | 'lg';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'link';
};

const buttonVariants = cva(
  'disabled:opacity-40 active:not-disabled:scale-95 transition duration-300 flex justify-center items-center focus:outline-none focus-visible:ring-2 cursor-pointer disabled:cursor-default font-albert text-[17px] leading-6 text-white px-5 gap-2',
  {
    variants: {
      variant: {
        primary:
          'bg-main-300 hover:bg-main-300/75 active:not-disabled:bg-main-300/65 rounded-2xl font-medium',
        secondary:
          'bg-regal-pink hover:not-disabled:bg-regal-pink/75 active:not-disabled:bg-regal-pink/65 font-extrabold justify-center rounded-full',
        link: 'font-semibold p-0 hover:not-disabled:text-white/70',
      },
      size: {
        sm: 'h-14',
        md: 'h-15',
        lg: 'h-19',
        link: 'h-auto',
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
