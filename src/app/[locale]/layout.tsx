import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Locale, routing } from '@/shared/lib/i18n/routing';
import { QueryProvider, TranslateProvider } from '../providers';
import { albertSans, niconne, nunitoSans } from '../fonts';
import '../globals.css';

export const metadata: Metadata = {
  title: {
    template: 'Quiz | %s',
    default: 'Quiz',
    absolute: 'Quiz',
  },
  description: 'Quiz app',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${albertSans.variable} ${nunitoSans.variable} ${niconne.variable} bg-main-500 container mx-auto flex h-dvh flex-col px-5 antialiased lg:max-w-3xl`}
      >
        <QueryProvider>
          <TranslateProvider>{children}</TranslateProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
