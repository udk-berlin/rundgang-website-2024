import { Filters, ReactNodeProps } from '@/types/types';
import ProgramSidebarContextGroup from '@/app/program/components/sidebar/contextGroups/group/group';

const filterGroupFetchers: {
  translationKey: 'format' | 'faculty' | 'language';
  contextsKey: 'formats' | 'faculties' | 'languages';
}[] = [
  { translationKey: 'format', contextsKey: 'formats' },
  { translationKey: 'faculty', contextsKey: 'faculties' },
  { translationKey: 'language', contextsKey: 'languages' },
];

export default function ProgramSidebarContextGroups({
  contextGroups,
}: {
  contextGroups: Filters;
}) {
  return (
    <ProgramSidebarContextGroupsContainer>
      {filterGroupFetchers.map((fetcher) => (
        <ProgramSidebarContextGroup
          key={fetcher.translationKey}
          translationKey={fetcher.translationKey}
          contexts={contextGroups[fetcher.contextsKey]}
        />
      ))}
    </ProgramSidebarContextGroupsContainer>
  );
}

function ProgramSidebarContextGroupsContainer({ children }: ReactNodeProps) {
  return (
    <div className="min-h-content-body w-full border-l-0 border-r-border bg-primary md:border-l-border md:border-r-xs">
      {children}
    </div>
  );
}
