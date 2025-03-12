import { notFound } from 'next/navigation';
import { QuizHeader } from '@/features/quiz/ui/quiz-header/quiz-header';
import { quizSteps } from '@/shared/constants/quiz';
import { QuizStep } from '@/shared/types/quiz';

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
      <main className="flex-1 pt-11">{children}</main>
    </>
  );
}
