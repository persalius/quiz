import { routes } from '@/shared/constants/routes';
import { Link } from '@/shared/ui/link';
import { Typography } from '@/shared/ui/typography';

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <Typography variant="h1">Error: Quiz Not Found</Typography>
      <Typography>The specified quiz does not exist.</Typography>
      <Link href={routes.home}>Go back</Link>
    </div>
  );
}
