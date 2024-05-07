import { ReactNode } from 'react';
import { landingFilters } from '@/app/constants';
import LandingFiltersGroupsHeader from '@/app/landing/components/filters/groups/group/header.server';

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
  return <div className="grid grid-cols-3">{children}</div>;
}
