import {
  QuizLanguage,
  QuizGender,
  QuizAge,
  QuizHate,
  QuizTopics,
} from '@/widgets/quiz';

import { quizSteps } from '@/shared/constants/quiz';
import { QuizStep } from '@/shared/types/quiz';

const steps = {
  [quizSteps.language]: <QuizLanguage />,
  [quizSteps.gender]: <QuizGender />,
  [quizSteps.age]: <QuizAge />,
  [quizSteps.hate]: <QuizHate />,
  [quizSteps.topics]: <QuizTopics />,
};

export default async function QuizPage({
  params,
}: {
  params: Promise<{ slug: QuizStep }>;
}) {
  const { slug } = await params;

  return <>{steps[slug]}</>;
}
