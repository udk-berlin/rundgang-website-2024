'use client';
import { IntlError, IntlErrorCode, NextIntlClientProvider } from 'next-intl';

function getMessageFallback({
  key,
}: {
  error: IntlError;
  key: string;
  namespace?: string;
}) {
  return key;
}

function onError(error: IntlError) {
  if (error.code !== IntlErrorCode.MISSING_MESSAGE) {
    console.error(error);
  }
}

export default function IntlProvider({ messages, locale, children }: any) {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      getMessageFallback={getMessageFallback}
      onError={onError}
      timeZone="UTC"
    >
      {children}
    </NextIntlClientProvider>
  );
}
