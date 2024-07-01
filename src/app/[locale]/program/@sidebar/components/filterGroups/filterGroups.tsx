'use server';
import { Filters, ReactNodeProps } from '@/types/types';
import SidebarFilterGroup from '@/app/program/@sidebar/components/filterGroups/filterGroup/filterGroup';

const filterGroupFetchers: {
  translation: 'format' | 'faculty' | 'language';
  data: 'formats' | 'faculties' | 'languages';
}[] = [
  { translation: 'format', data: 'formats' },
  { translation: 'faculty', data: 'faculties' },
  { translation: 'language', data: 'languages' },
];

export default async function SidebarFilterGroups({
  filters,
}: {
  filters: Filters;
}) {
  return (
    <SidebarFilterGroupsContainer>
      {filterGroupFetchers.map((fetcher) => (
        <SidebarFilterGroup
          translation={fetcher.translation}
          filters={filters[fetcher.data]}
        />
      ))}
    </SidebarFilterGroupsContainer>
  );
}

function SidebarFilterGroupsContainer({ children }: ReactNodeProps) {
  return (
    <div className="col-span-1">
      <div className="h-content-header max-h-content-header min-h-content-header" />
      <div className="md:border-r-xs min-h-content-body w-full border-l-0 border-r-border bg-primary md:border-l-border">
        {children}
      </div>
    </div>
  );
}
