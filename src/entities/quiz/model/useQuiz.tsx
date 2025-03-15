import { useRouter } from '@/i18n/navigation';
import { useUpdateQuiz } from '../api/hooks';
import { QuizProperty } from '@/shared/types/quiz';
import { quizDefaultData } from '../../../widgets/quiz/constants';

interface Props {
  currentStep: QuizProperty;
  nextPage?: string;
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

  const handleUpdateQuiz = (answer: string) => {
    mutate({
      [currentStep]: {
        ...quizDefaultData[currentStep],
        answer,
      },
    });
  };

  return { handleUpdateQuiz };
};
