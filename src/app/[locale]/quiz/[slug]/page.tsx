import { QuizGender } from '@/features/quiz/quiz-gender/quiz-gender';
import { QuizLanguage } from '@/features/quiz/quiz-language/quiz-language';
import { QuizAge } from '@/features/quiz/quiz-age/quiz-age';
import { quizSteps } from '@/shared/constants/quiz';
import { QuizStep } from '@/shared/types/quiz';
import { QuizHate } from '@/features/quiz/quiz-hate/quiz-hate';

const steps = {
  [quizSteps.language]: <QuizLanguage />,
  [quizSteps.gender]: <QuizGender />,
  [quizSteps.age]: <QuizAge />,
  [quizSteps.hate]: <QuizHate />,
};

export default async function QuizPage({
  params,
}: {
  params: Promise<{ slug: QuizStep }>;
}) {
  const { slug } = await params;

  return <>{steps[slug]}</>;
}
