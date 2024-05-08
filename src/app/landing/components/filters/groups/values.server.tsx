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
    <ResponsiveDiv className="p-border bg-black">
      <div className="grid max-h-[calc((100vh-20px)*0.2)] grid-cols-3 overflow-y-scroll ">
        {children}
      </div>
    </ResponsiveDiv>
  );
}
