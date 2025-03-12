import { QuizGender } from '@/features/quiz/quiz-gender/quiz-gender';
import { QuizLanguage } from '@/features/quiz/quiz-language/quiz-language';
import { quizSteps } from '@/shared/constants/quiz';
import { QuizStep } from '@/shared/types/quiz';

const steps = {
  [quizSteps.language]: <QuizLanguage />,
  [quizSteps.gender]: <QuizGender />,
};

export default async function QuizPage({
  params,
}: {
  params: Promise<{ slug: QuizStep }>;
}) {
  const { slug } = await params;

  return <>{steps[slug]}</>;
}
