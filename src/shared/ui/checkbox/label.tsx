'use client';

import { FC, PropsWithChildren, ReactNode } from 'react';
import { Typography } from '../typography';

const isTextNode = (children: ReactNode): children is string | number => {
  return typeof children === 'string' || typeof children === 'number';
};

export const CheckboxLabel: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {isTextNode(children) ? (
        <Typography className="cursor-pointer leading-none font-medium select-none">
          {children}
        </Typography>
      ) : (
        children
      )}
    </>
  );
};
