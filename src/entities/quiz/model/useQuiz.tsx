import { useRouter } from '@/shared/lib/i18n/navigation';
import { QuizProperty } from '@/shared/types/quiz';
import { Locale } from '@/shared/lib/i18n/routing';
import { quizInformation } from '@/shared/constants/quizInformtaion';
import { useUpdateQuiz } from '../api/hooks';

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
          order: quizInformation[currentStep].order,
          title: quizInformation[currentStep].title,
          type: quizInformation[currentStep].type,
          answer,
        },
      },
      { onSuccess }
    );
  };

  return { handleUpdateQuiz };
};
