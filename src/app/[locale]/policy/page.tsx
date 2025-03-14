import { Link } from '@/shared/ui/link';
import { Typography } from '@/shared/ui/typography';
import { routes } from '@/shared/constants/routes';

export default function PolicyPage() {
  return (
    <main>
      <div className="flex flex-col items-center gap-5 py-5">
        <Typography variant="h1">Policy</Typography>
        <Link
          href={routes.home}
          variant="secondary"
          className="w-full max-w-64"
        >
          Go back
        </Link>
      </div>
    </main>
  );
}
