import { Albert_Sans, Nunito_Sans, Niconne } from 'next/font/google';

const albertSans = Albert_Sans({
  variable: '--font-albert-sans',
  subsets: ['latin'],
});

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
});

const niconne = Niconne({
  variable: '--font-niconne',
  subsets: ['latin'],
  weight: ['400'],
});

export { albertSans, nunitoSans, niconne };
