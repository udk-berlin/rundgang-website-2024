'use server';
import { Filter } from '@/types/types';
import ProgramFiltersGroupHeader from '@/app/program/components/filters/groups/group/header';
import ProgramFiltersGroupFilters from '@/app/program/components/filters/groups/group/filters';

export type FilterGroupProps = {
  translation: 'faculty' | 'format' | 'language';
  filters: Filter[];
};

export default async function ProgramFiltersGroup({
  translation,
  filters,
}: FilterGroupProps) {
  return (
    <div className="w-full">
      <ProgramFiltersGroupHeader
        key="filter-group-title"
        translation={translation}
      />
      <ProgramFiltersGroupFilters key="filter-group-filters" filters={filters} />
    </div>
  );
}
