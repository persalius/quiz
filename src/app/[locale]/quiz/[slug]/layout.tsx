import { notFound } from 'next/navigation';
import { QuizHeader } from '@/features/quiz/ui/quiz-header/quiz-header';
import { quizStepsLength } from '@/shared/constants/routes';

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}>) {
  const { slug } = await params;
  const quizId = Number(slug);

  if (Number.isNaN(quizId) || quizId > quizStepsLength || quizId < 1) {
    notFound();
  }

  return (
    <>
      <QuizHeader quizId={quizId} />
      <main className="flex-1 pt-11">{children}</main>
    </>
  );
}
