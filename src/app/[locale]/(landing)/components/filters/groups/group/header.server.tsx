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
      className="px-gutter-xs desktop:px-desktop-gutter-xs py-gutter-xxs desktop:py-desktop-gutter-xxs text-grey"
      textSize="sm"
    >
      {children}
    </ResponsiveDiv>
  );
}
