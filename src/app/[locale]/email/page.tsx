import { Transition } from '@/shared/ui/transition';
import { Email } from '@/widgets/email';

export default function EmailPage() {
  return (
    <main className="flex-1 py-5">
      <Transition variant="scale">
        <Email />
      </Transition>
    </main>
  );
}
