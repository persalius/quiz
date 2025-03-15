import { notFound } from 'next/navigation';
import { QuizHeader } from '@/widgets/quiz/ui/quiz-header/quiz-header';
import { quizSteps } from '@/shared/constants/quiz';
import { QuizStep } from '@/shared/types/quiz';
import { Transition } from '@/shared/ui/transition';

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ slug: QuizStep }>;
}>) {
  const { slug } = await params;

  if (!quizSteps[slug]) {
    notFound();
  }

  return (
    <>
      <QuizHeader quizId={slug} />
      <main className="flex flex-1 flex-col pt-11">
        <Transition>{children}</Transition>
      </main>
    </>
  );
}
