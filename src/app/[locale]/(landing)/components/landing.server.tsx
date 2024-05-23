import { ReactNode } from 'react';
import LandingFilters from '@/app/(landing)/components/filters/filters.server';
import { LandingPageProps } from '@/app/page';
import LandingWriting from '@/app/(landing)/components/writing';
import LandingInfo from '@/app/(landing)/components/info/info.server';

export type LandingProps = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function Landing({ searchParams }: LandingProps) {
  console.log(searchParams);
  return (
    <LandingContainer>
      <div className="relative grow-[1]">
        <LandingWriting />
        <LandingInfo />
      </div>
      <LandingFilters />
    </LandingContainer>
  );
}

function LandingContainer({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-[calc(100vh-var(--header-height)-var(--footer-height))] max-h-[calc(100vh-var(--header-height)-var(--footer-height))] min-h-[calc(100vh-var(--header-height)-var(--footer-height))] flex-col">
      {children}
    </main>
  );
}
