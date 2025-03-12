import { FC, JSX } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';

const typographyVariants = cva('text-white', {
  variants: {
    variant: {
      h1: 'text-4xl font-bold',
      h2: 'text-3xl font-semibold',
      h3: 'text-2xl font-medium',
      body: 'text-[17px] leading-6',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

type TypographyProps = VariantProps<typeof typographyVariants> &
  React.ComponentPropsWithoutRef<'p'>;

const variantToTag: Record<
  NonNullable<TypographyProps['variant']>,
  keyof JSX.IntrinsicElements
> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body: 'p',
};

export const Typography: FC<TypographyProps> = ({
  variant = 'body',
  className,
  children,
}) => {
  const Tag = variant ? variantToTag[variant] : variantToTag.body;

  return (
    <Tag className={cn(typographyVariants({ variant }), className)}>
      {children}
    </Tag>
  );
};
