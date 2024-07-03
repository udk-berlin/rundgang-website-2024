import ProgramFiltersGroup from '@/app/program/components/filters/groups/group/group';
import { Filters, ReactNodeProps } from '@/types/types';

const filterGroupFetchers: {
  translation: 'format' | 'faculty' | 'language';
  data: 'formats' | 'faculties' | 'languages';
}[] = [
  { translation: 'format', data: 'formats' },
  { translation: 'faculty', data: 'faculties' },
  { translation: 'language', data: 'languages' },
];

export default function ProgramFiltersGroups({
  filters,
}: {
  filters: Filters;
}) {
  return (
    <ProgramFiltersGroupsContainer>
      {filterGroupFetchers.map((fetcher) => (
        <ProgramFiltersGroup
          key={fetcher.translation}
          translation={fetcher.translation}
          filters={filters[fetcher.data]}
        />
      ))}
    </ProgramFiltersGroupsContainer>
  );
}

function ProgramFiltersGroupsContainer({ children }: ReactNodeProps) {
  return (
    <div className="min-h-content-body w-full border-l-0 border-r-border bg-primary md:border-l-border md:border-r-xs">
      {children}
    </div>
  );
}
