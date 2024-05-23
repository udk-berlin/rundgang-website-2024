import {
  getTranslations,
  unstable_setRequestLocale,
  getMessages,
} from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { noto, jungka } from '../fonts/fonts';
import { locales } from '@/config';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getGraphQLFilters } from '@/api/graphql/filters';
import { AppStoreProvider } from '@/lib/useAppContext';
import { defaultInitState } from '@/lib/appStore';
import { ReactNode } from 'react';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
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
            <div id="modal-root" />
            <Footer />
          </AppStoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
