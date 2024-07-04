import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { IntlErrorCode } from 'next-intl';

// Can be imported from a shared config
export const locales = ['en', 'de'];

export default getRequestConfig(async ({ locale }) =>
  !locales.includes(locale as any)
    ? notFound()
    : {
        onError(error) {
          if (error.code !== IntlErrorCode.MISSING_MESSAGE) {
            console.log(error);
          }
        },
        getMessageFallback({ namespace, key, error }) {
          return key;
        },
        timeZone: 'Europe/Berlin',

        messages: (
          await (locale === 'en'
            ? // When using Turbopack, this will enable HMR for `en`
              import('../locales/en.json')
            : import(`../locales/${locale}.json`))
        ).default,
      },
);
