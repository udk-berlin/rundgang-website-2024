import { ReactNode } from 'react';
import LandingFiltersGroups from '@/app/(landing)/components/filters/groups/groups.server';

export default function LandingFilters() {
  return (
    <LandingFiltersContainer>
      <LandingFiltersGroups />
    </LandingFiltersContainer>
  );
}

function LandingFiltersContainer({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
