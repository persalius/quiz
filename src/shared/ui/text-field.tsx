import { FC, useId } from 'react';
import { cn } from '../lib/utils/cn';

interface Props {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  className?: string;
  classNames?: {
    root?: string;
    input?: string;
  };
  errorMessage?: string;
  isInvalid?: boolean;
}

export const TextField: FC<Props> = ({
  value,
  onChange,
  onBlur,
  placeholder,
  className,
  classNames,
  isInvalid = false,
  errorMessage,
}) => {
  const alertId = useId();

  console.log(errorMessage);

  return (
    <div
      className={cn('fle-col flex flex-col gap-1', className, classNames?.root)}
    >
      <input
        aria-invalid={isInvalid}
        aria-describedby={alertId}
        type="text"
        tabIndex={0}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        className={cn(
          'bg-main-300 h-19 rounded-2xl px-5',
          'text-regal-grey-200 placeholder:text-regal-grey-200/50 text-[17px] font-medium',
          'focus-visible:inset-ring-regal-pink-400 focus-visible:inset-ring-2 focus-visible:outline-0',
          isInvalid &&
            'inset-ring-2 inset-ring-red-600 focus-visible:inset-ring-red-600',
          classNames?.input
        )}
      />

      {!!errorMessage && (
        <span id={alertId} role="alert" className="pl-8 text-sm text-red-600">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
