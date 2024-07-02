import {
  getTranslations,
  unstable_setRequestLocale,
  getMessages,
} from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { noto, jungka } from '../fonts/fonts';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { getGraphQLFilters } from '@/api/graphql/filters';
import { AppStoreProvider } from '@/lib/useAppContext';
import { defaultInitState } from '@/lib/appStore';
import { ReactNode } from 'react';

type RootLayoutProps = {
  children: ReactNode;
  modal: ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'RootLayout' });

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL('https://localhost:3000'),
    alternates: {
      canonical: '/',
      languages: {
        en: '/en',
        de: '/de',
      },
    },
  };
}

export default async function RootLayout({
  children,
  modal,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages({ locale });
  const filters = await getGraphQLFilters();
  return (
    <html lang={locale}>
      <body
        className={`${jungka.className} ${jungka.variable} ${noto.variable}`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppStoreProvider initState={{ ...defaultInitState, ...filters }}>
            <Header />
            {children}
            {modal}
            <Footer />
            <div id="modal-root" />
          </AppStoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
