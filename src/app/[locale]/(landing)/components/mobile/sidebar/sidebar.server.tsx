import { Suspense } from 'react';
import { ReactNodeProps } from '@/types/types';
import LandingFiltersGroups from '@/app/(landing)/components/mobile/filters/groups/groups.server';

export default async function LandingSidebar() {
  return (
    <LandingSidebarContainer>
      <Suspense>
        <LandingFiltersGroups />
      </Suspense>
    </LandingSidebarContainer>
  );
}

function LandingSidebarContainer({ children }: ReactNodeProps) {
  return (
    <div className="col-span-2 flex h-content max-h-content min-h-content flex-col gap-border overflow-y-auto bg-primary">
      {children}
    </div>
  );
}
