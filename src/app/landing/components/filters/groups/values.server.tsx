import { ReactNode } from 'react';
import { ResponsiveDiv } from '@/components/html/div';
import LandingFiltersGroupValues from '@/app/landing/components/filters/groups/group/values.server';
import { landingFilters } from '@/app/constants';

export default function LandingFiltersGroupsValues() {
  return (
    <LandingFiltersGroupsValuesContainer>
      {landingFilters.map((filter) => (
        <LandingFiltersGroupValues key={filter.header.en} filter={filter} />
      ))}
    </LandingFiltersGroupsValuesContainer>
  );
}

function LandingFiltersGroupsValuesContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ResponsiveDiv className="grid grid-cols-3 bg-black p-[2px]">
      {children}
    </ResponsiveDiv>
  );
}
