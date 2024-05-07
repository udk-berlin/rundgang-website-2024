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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
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
}: Readonly<Props>) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages({ locale });
  return (
    <html lang={locale}>
      <body
        className={`${jungka.variable} ${noto.variable} ${jungka.className}`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          {modal}
          <div id="modal-root" />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
