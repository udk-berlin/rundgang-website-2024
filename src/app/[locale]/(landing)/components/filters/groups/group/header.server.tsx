import { ReactNode } from 'react';
import { ResponsiveDiv } from '@/components/html/div';
import { LandingFilter } from '@/types/types';

export type LandingFiltersGroupsHeaderProps = {
  filter: LandingFilter;
};

export default function LandingFiltersGroupsHeader({
  filter,
}: LandingFiltersGroupsHeaderProps) {
  return (
    <LandingFiltersGroupsHeaderContainer>
      {filter.header.en}
    </LandingFiltersGroupsHeaderContainer>
  );
}

function LandingFiltersGroupsHeaderContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ResponsiveDiv
      className="px-gutter-xs py-gutter-xxs text-grey"
      textSize="xs"
    >
      {children}
    </ResponsiveDiv>
  );
}
