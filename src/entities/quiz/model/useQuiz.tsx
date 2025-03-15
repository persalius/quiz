import { useRouter } from '@/shared/lib/i18n/navigation';
import { useUpdateQuiz } from '../api/hooks';
import { QuizProperty } from '@/shared/types/quiz';
import { quizDefaultData } from '../../../widgets/quiz/constants';
import { Locale } from '@/shared/lib/i18n/routing';

interface Props {
  currentStep: QuizProperty;
  nextPage?: string;
  locale?: Locale;
  onSuccess?: () => void;
}

export const useQuiz = ({ currentStep, nextPage, onSuccess }: Props) => {
  const router = useRouter();

  const { mutate } = useUpdateQuiz({
    onSuccess: () => {
      onSuccess?.();
      if (nextPage) {
        router.push(nextPage);
      }
    },
  });

  const handleUpdateQuiz = (answer: string, onSuccess?: () => void) => {
    mutate(
      {
        [currentStep]: {
          ...quizDefaultData[currentStep],
          answer,
        },
      },
      { onSuccess }
    );
  };

  return { handleUpdateQuiz };
};
