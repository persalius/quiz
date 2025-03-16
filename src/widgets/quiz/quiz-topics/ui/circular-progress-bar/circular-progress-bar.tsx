import { FC, useEffect } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'motion/react';

type Props = {
  progress: number;
  onAnimationComplete: () => void;
};

const size = 252;
const strokeWidth = 12;
const radius = (size - strokeWidth) / 2;
const circumference = 2 * Math.PI * radius;

const duration = 5;

export const CircularProgressBar: FC<Props> = ({
  progress,
  onAnimationComplete,
}) => {
  const offset = circumference - (progress / 100) * circumference;

  const count = useMotionValue(0);
  const rounded = useTransform(() => `${Math.round(count.get())}%`);

  useEffect(() => {
    const controls = animate(count, 100, { duration });
    return () => controls.stop();
  }, [count]);

  return (
    <div className="relative size-63">
      <svg className="size-63 -rotate-90 transform">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          className="stroke-regal-grey-100 fill-none"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="stroke-regal-pink fill-none"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ type: 'tween', duration }}
          onAnimationComplete={onAnimationComplete}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
        <motion.pre className="font-albert text-[52px] font-extrabold text-white">
          {rounded}
        </motion.pre>
      </div>
    </div>
  );
};
