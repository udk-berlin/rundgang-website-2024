import { ReactNode } from 'react';
import { LandingFilter } from '@/types/types';
import LandingFiltersGroupValue from '@/app/landing/components/filters/groups/group/value.server';

export type LandingFiltersGroupValuesProps = {
  filter: LandingFilter;
};

export default function LandingFiltersGroupValues({
  filter,
}: LandingFiltersGroupValuesProps) {
  return (
    <LandingFiltersGroupValuesContainer>
      {filter.values.map((value) => (
        <LandingFiltersGroupValue key={value.en} value={value} />
      ))}
    </LandingFiltersGroupValuesContainer>
  );
}

function LandingFiltersGroupValuesContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-wrap content-start gap-[2px]">{children}</div>
  );
}
