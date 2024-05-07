import LandingTitle from '@/app/landing/components/title.server';
import { ReactNode } from 'react';
import LandingFilters from '@/app/landing/components/filters/filters.server';

export default function Landing() {
  return (
    <LandingContainer>
      <LandingTitle />
      <LandingFilters />
    </LandingContainer>
  );
}

function LandingContainer({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-min-content-height desktop:min-h-desktop-min-content-height flex flex-col">
      {children}
    </main>
  );
}
