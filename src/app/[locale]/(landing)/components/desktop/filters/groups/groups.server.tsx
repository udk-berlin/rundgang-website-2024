import { Suspense } from 'react';
import { ReactNodeProps } from '@/types/types';
import LandingFiltersGroupsSuspend from '@/app/(landing)/components/desktop/filters/groups/suspend.server';

export default async function LandingFiltersGroups() {
  return (
    <LandingFiltersGroupsContainer>
      <Suspense>
        <LandingFiltersGroupsSuspend />
      </Suspense>
    </LandingFiltersGroupsContainer>
  );
}

function LandingFiltersGroupsContainer({ children }: ReactNodeProps) {
  return (
    <div className="hidden min-h-[calc(var(--height-tag)+var(--border))] w-full grid-cols-3 gap-border overflow-y-auto border-x-border border-t-border md:grid">
      {children}
    </div>
  );
}
