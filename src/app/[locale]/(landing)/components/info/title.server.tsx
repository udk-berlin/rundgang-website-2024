import { ReactNode } from 'react';
import { ResponsiveH1 } from '@/components/html/h1';
import { ResponsiveBr } from '@/components/html/br';
import { ResponsiveH2 } from '@/components/html/h2';
import { getTranslations } from 'next-intl/server';

export default async function LandingInfoTitle() {
  const t = await getTranslations('Landing');
  return (
    <LandingTitleContainer>
      <ResponsiveH1 className="font-medium" textSize="xl">
        {t('udk_berlin')}
      </ResponsiveH1>
      <div>
        <ResponsiveBr textSize="xl" />
        <ResponsiveH2 textSize="xl">{t('date')}</ResponsiveH2>
      </div>
    </LandingTitleContainer>
  );
}

function LandingTitleContainer({ children }: { children: ReactNode }) {
  return <div className="flex justify-center">{children}</div>;
}
