'use client';

import { useTranslations } from 'next-intl';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('errors.page');
  return (
    <div className="bg-primary">
      <div className="flex h-content max-h-content min-h-content w-screen flex-col items-center justify-center rounded-border border-x-border bg-secondary ">
        <h2>{t('messsage')}</h2>
        <button onClick={() => reset()}>{t('action')}</button>
      </div>
    </div>
  );
}
