import { ReactNode } from 'react';
import LandingFilters from '@/app/landing/components/filters/filters.server';
import { LandingPageProps } from '@/app/page';
import LandingInfo from '@/app/landing/components/info/info.server';

export default function Landing({ searchParams }: LandingPageProps) {
  console.log(searchParams);
  return (
    <LandingContainer>
      <LandingInfo />
      <LandingFilters />
    </LandingContainer>
  );
}

function LandingContainer({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-min-content-height flex-col desktop:min-h-desktop-min-content-height">
      {children}
    </main>
  );
}
