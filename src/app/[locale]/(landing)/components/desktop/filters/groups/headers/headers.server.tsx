import LandingFiltersGroupsHeader from '@/app/(landing)/components/desktop/filters/groups/headers/header.server';
import { ReactNodeProps } from '@/types/types';

const translationKeys: ('format' | 'faculty' | 'language')[] = [
  'format',
  'faculty',
  'language',
];

export default function LandingFiltersGroupsHeaders() {
  return (
    <LandingFiltersGroupsHeadersContainer>
      {translationKeys.map((translationKey) => (
        <LandingFiltersGroupsHeader
          key={translationKey}
          translationKey={translationKey}
        />
      ))}
    </LandingFiltersGroupsHeadersContainer>
  );
}

function LandingFiltersGroupsHeadersContainer({ children }: ReactNodeProps) {
  return (
    <div className="hidden w-full grid-cols-3 gap-border rounded-b-border border-x-border bg-secondary md:grid">
      {children}
    </div>
  );
}
