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

  // Consider moving to static routes for better performance, SEO, and maintainability.
  // Static routes are faster, easier to cache, and more predictable than dynamic routing.
  // Note: This is currently implemented as a test app, so dynamic routing is used for simplicity.
  return <>{steps[slug]}</>;
}
