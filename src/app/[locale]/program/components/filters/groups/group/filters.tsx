'use server';
import FilterTag from '@/components/filterTag';
import { Filter, ReactNodeProps } from '@/types/types';

export type SidebarFilterGroupFiltersProps = {
  filters: Filter[];
};

export default async function ProgramFiltersGroupFilters({
  filters,
}: SidebarFilterGroupFiltersProps) {
  return (
    <ProgramFiltersGroupFiltersContainer>
      {filters.map((item) => (
        <FilterTag key={item.id} filter={item} disabled={!item.exists} />
      ))}
    </ProgramFiltersGroupFiltersContainer>
  );
}

function ProgramFiltersGroupFiltersContainer({ children }: ReactNodeProps) {
  return (
    <div className="w-full border-r-border border-t-border border-primary bg-primary">
      <div className="flex w-full flex-col gap-border">{children}</div>
    </div>
  );
}
