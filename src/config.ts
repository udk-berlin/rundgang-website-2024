import { Pathnames } from 'next-intl/navigation';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;

export const defaultLocale = 'en' as const;
export const locales = ['en', 'de'] as const;

export const pathnames = {
  '/': '/',
  '/contact': {
    en: '/contact',
    de: '/kontakt',
  },
  '/design': {
    en: '/design',
    de: '/design',
  },
  '/imprint': {
    en: '/imprint',
    de: '/impressum',
  },
  '/info': {
    en: '/info',
    de: '/info',
  },
  '/locations': {
    en: '/locations',
    de: '/orte',
  },
  '/locations/[place]': {
    en: '/locations/[place]',
    de: '/orte/[place]',
  },
  '/program': {
    en: '/program',
    de: '/programm',
  },
  '/project': {
    en: '/project',
    de: '/projekt',
  },
  '/project/[id]': {
    en: '/project/[id]',
    de: '/projekt/[id]',
  },
  '/project/[id]': {
    en: '/project/[id]',
    de: '/project/[id]',
  },
  '/timeline': {
    en: '/timeline',
    de: '/zeitplan',
  },
  '/saved': {
    en: '/saved',
    de: '/gemerkt',
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
