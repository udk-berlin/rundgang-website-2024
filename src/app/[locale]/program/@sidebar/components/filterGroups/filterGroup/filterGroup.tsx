'use server';
import { Filter } from '@/types/types';
import SidebarFilterGroupHeader from '@/app/program/@sidebar/components/filterGroups/filterGroup/header';
import SidebarFilterGroupFilters from '@/app/program/@sidebar/components/filterGroups/filterGroup/filters';

export type FilterGroupProps = {
  translation: 'faculty' | 'format' | 'language';
  filters: Filter[];
};

export default async function SidebarFilterGroup({
  translation,
  filters,
}: FilterGroupProps) {
  return (
    <div className="w-full">
      <SidebarFilterGroupHeader
        key="filter-group-title"
        translation={translation}
      />
      <SidebarFilterGroupFilters key="filter-group-filters" filters={filters} />
    </div>
  );
}
