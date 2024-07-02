import { Filter, ReactNodeProps } from '@/types/types';
import ContextTagLink from '@/components/contextTag/link';

export type FilterGroupProps = {
  filters: Filter[];
};

export default function LandingFiltersGroup({ filters }: FilterGroupProps) {
  return (
    <LandingFiltersGroupContainer>
      {filters.map((filter) => (
        <ContextTagLink key={filter.id} context={filter} />
      ))}
    </LandingFiltersGroupContainer>
  );
}

function LandingFiltersGroupContainer({ children }: ReactNodeProps) {
  return (
    <div className="flex h-full w-full flex-wrap gap-border bg-primary">
      {children}
    </div>
  );
}
