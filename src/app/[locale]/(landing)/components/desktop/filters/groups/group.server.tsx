import { Filter, ReactNodeProps } from '@/types/types';
import ContextTagLink from '@/components/contextTag/link';
import ContextTag from '@/components/contextTag/contextTag.server';

export type FilterGroupProps = {
  filters: Filter[];
};

export default function LandingFiltersGroup({ filters }: FilterGroupProps) {
  return (
    <LandingFiltersGroupContainer>
      {filters.map((filter) => (
        <ContextTag key={filter.id} type="link" context={filter} />
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
