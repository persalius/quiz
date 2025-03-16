import { Metadata } from 'next';
import { Transition } from '@/shared/ui/transition';
import { Completion } from '@/widgets/completion';

export const metadata: Metadata = {
  title: 'completion',
};

export default function CompletionPage() {
  return (
    <main className="flex-1 py-5">
      <Transition variant="scale">
        <Completion />
      </Transition>
    </main>
  );
}
