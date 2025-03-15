import { QuizGender } from '@/widgets/quiz/quiz-gender/quiz-gender';
import { QuizLanguage } from '@/widgets/quiz/quiz-language/quiz-language';
import { QuizAge } from '@/widgets/quiz/quiz-age/quiz-age';
import { quizSteps } from '@/shared/constants/quiz';
import { QuizStep } from '@/shared/types/quiz';
import { QuizHate } from '@/widgets/quiz/quiz-hate/quiz-hate';
import { QuizTopics } from '@/widgets/quiz/quiz-topics/quiz-topics';

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
