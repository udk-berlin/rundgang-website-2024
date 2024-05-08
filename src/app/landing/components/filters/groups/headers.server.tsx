import { ReactNode } from 'react';
import { landingFilters } from '@/app/constants';
import LandingFiltersGroupsHeader from '@/app/landing/components/filters/groups/group/header.server';
import BorderContainer from '@/components/containers/border';

export default function LandingFiltersGroupsHeaders() {
  return (
    <LandingFiltersGroupsHeadersContainer>
      {landingFilters.map((filter) => (
        <LandingFiltersGroupsHeader key={filter.header.en} filter={filter} />
      ))}
    </LandingFiltersGroupsHeadersContainer>
  );
}

function LandingFiltersGroupsHeadersContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <BorderContainer innerClassName="grid grid-cols-3" borders={['x']}>
      {children}
    </BorderContainer>
  );
}
