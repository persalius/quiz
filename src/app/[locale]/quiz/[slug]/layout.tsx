import { notFound } from 'next/navigation';
import { QuizHeader } from '@/widgets/quiz';
import { quizSteps } from '@/shared/constants/quiz';
import { QuizStep } from '@/shared/types/quiz';
import { Transition } from '@/shared/ui/transition';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return {
    title: slug,
  };
}

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
