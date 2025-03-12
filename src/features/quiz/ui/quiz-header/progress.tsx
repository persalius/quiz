'use client';

import { CSSProperties, FC, useEffect, useRef } from 'react';
import { quizStepsLength } from '@/shared/constants/routes';

interface Props {
  quizId: number;
}

export const Progress: FC<Props> = ({ quizId }) => {
  const percent = (100 / quizStepsLength) * quizId;
  const prevState = useRef(0);

  useEffect(() => {
    prevState.current = quizId;
  }, [quizId]);

  return (
    <div
      role="meter"
      aria-valuemin={1}
      aria-valuemax={quizStepsLength}
      aria-valuenow={quizId}
      //   className="bg-regal  -grey h-1 w-full overflow-hidden rounded-full"
    >
      <button onClick={() => console.log(prevState)}>Click</button>
      <div
        style={{ '--width': `${percent}%` } as CSSProperties}
        className="bg-main-100 h-full w-[var(--width)] transition-all"
      />
    </div>
  );
};
