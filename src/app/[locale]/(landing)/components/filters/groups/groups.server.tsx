import { ReactNode } from 'react';
import LandingFiltersGroupsHeaders from '@/app/(landing)/components/filters/groups/headers.server';
import LandingFiltersGroupsValues from '@/app/(landing)/components/filters/groups/values.server';

export default function LandingFiltersGroups() {
  return (
    <LandingFiltersGroupsContainer>
      <LandingFiltersGroupsHeaders />
      <LandingFiltersGroupsValues />
    </LandingFiltersGroupsContainer>
  );
}

function LandingFiltersGroupsContainer({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
