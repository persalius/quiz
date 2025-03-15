import { defineRouting } from 'next-intl/routing';

export const locales = {
  en: { value: 'English' },
  fr: { value: 'French' },
  de: { value: 'German' },
  es: { value: 'Spanish' },
};

export type LocaleKey = keyof typeof locales;

export const routing = defineRouting({
  locales: Object.keys(locales),
  defaultLocale: 'en',
});

export type Locale = (typeof routing.locales)[number];
