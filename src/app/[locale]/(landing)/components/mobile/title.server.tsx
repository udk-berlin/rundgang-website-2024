import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

export default function LandingTitle() {
  const t = useTranslations('Landing');
  return (
    <LandingTitleContainer>
      <h1>{t('title')}</h1>
      <h2>{t('date')}</h2>
    </LandingTitleContainer>
  );
}

function LandingTitleContainer({ children }: { children: ReactNode }) {
  return (
    <div className="text-l w-full p-gutter-md text-right font-bold">
      {children}
    </div>
  );
}
