import { ReactNode } from 'react';
import LandingFilters from '@/app/(landing)/components/filters/filters.server';
import { LandingPageProps } from '@/app/page';
import LandingWriting from '@/app/(landing)/components/writing';
import LandingInfo from '@/app/(landing)/components/info/info.server';

export default function Landing({ searchParams }: LandingPageProps) {
  console.log(searchParams);
  return (
    <LandingContainer>
      <div className="relative grow-[1]">
        <LandingWriting/>
        <LandingInfo/>
      </div>
      <LandingFilters/>
    </LandingContainer>
  );
}

function LandingContainer({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-[calc(100vh-2*var(--height-md)-2*var(--border))] max-h-[calc(100vh-2*var(--height-md)-2*var(--border))] min-h-[calc(100vh-2*var(--height-md)-2*var(--border))] flex-col">
      {children}
    </main>
  );
}
