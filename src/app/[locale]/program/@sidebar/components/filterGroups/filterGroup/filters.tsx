'use server';
import FilterTag from '@/components/filterTag';
import { Filter, ReactNodeProps } from '@/types/types';

export type SidebarFilterGroupFiltersProps = {
  filters: Filter[];
};

export default async function SidebarFilterGroupFilters({
  filters,
}: SidebarFilterGroupFiltersProps) {
  return (
    <SidebarFilterGroupFiltersContainer>
      {filters.map((item) => (
        <FilterTag key={item.id} filter={item} disabled={!item.exists} />
      ))}
    </SidebarFilterGroupFiltersContainer>
  );
}

function SidebarFilterGroupFiltersContainer({ children }: ReactNodeProps) {
  return (
    <div className="w-full border-l-xs border-r-xs border-t-border bg-primary">
      <div className="flex w-full flex-col gap-border">{children}</div>
    </div>
  );
}
