import {
  getTranslations,
  unstable_setRequestLocale,
  getMessages,
} from 'next-intl/server';
import IntlProvider from '@/lib/intlProvider';
import { noto, jungka } from '../fonts/fonts';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { getFilters } from '@/api/rest/filters';
import { AppStoreProvider } from '@/lib/useAppContext';
import { defaultInitState } from '@/lib/appStore';
import { ReactNode } from 'react';
import { extractProjectLanguageSearchParam } from '@/app/(landing)/components/desktop/landing.server';
import { ProjectLanguages } from '@/projects';

type RootLayoutProps = {
  children: ReactNode;
  modal: ReactNode;
  params: { locale: string };
};
/* 
export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
} */

export async function generateMetadata({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams?: { lang: ProjectLanguages };
}) {
  const t = await getTranslations({ locale, namespace: 'RootLayout' });

  const lang = extractProjectLanguageSearchParam(searchParams);

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: process.env.BASE_URL
      ? new URL(process.env.BASE_URL)
      : new URL('http://rundgang-frontend-24.dev.medienhaus.udk-berlin.de'),
    alternates: {
      canonical: '/',
      languages: {
        en: '/en',
        de: '/de',
      },
    },
    openGraph: {
      images: [`/assets/ogimages/${lang}.png`],
    },
  };
}

export const revalidate = 600;

export default async function RootLayout({
  children,
  modal,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages({ locale });
  const filters = await getFilters();
  return (
    <html lang={locale}>
      <body
        className={`${jungka.className} ${jungka.variable} ${noto.variable}`}
      >
        <IntlProvider locale={locale} messages={messages}>
          <AppStoreProvider initState={{ ...defaultInitState, ...filters }}>
            <Header />
            <div className="h-content-header w-screen"></div>
            {children}
            {modal}
            <Footer />
            <div id="modal-root" />
          </AppStoreProvider>
        </IntlProvider>
      </body>
    </html>
  );
}
