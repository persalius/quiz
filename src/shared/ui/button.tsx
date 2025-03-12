import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { cn } from '../lib/utils/cn';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const buttonClasses = cn(
  'bg-main-300 hover:bg-main-300/75 active:bg-main-300/65 focus:outline-none focus-visible:ring-2',
  'cursor-pointer rounded-2xl transition-colors disabled:cursor-default',
  'font-albert text-[17px] leading-6 font-medium text-white',
  'px-5 py-3'
);

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      tabIndex={0}
      className={cn(buttonClasses, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button, buttonClasses };
