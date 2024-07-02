import { getGraphQLFilters } from '@/api/graphql/filters';
import LandingFiltersGroup from '@/app/(landing)/components/mobile/filters/groups/group.server';

const fetchers: {
  translationKey: 'format' | 'faculty' | 'language';
  filtersKey: 'formats' | 'faculties' | 'languages';
}[] = [
  { translationKey: 'format', filtersKey: 'formats' },
  { translationKey: 'faculty', filtersKey: 'faculties' },
  { translationKey: 'language', filtersKey: 'languages' },
];

export default async function LandingFiltersGroups() {
  const filters = await getGraphQLFilters();
  return (
    <>
      {fetchers.map((fetcher) => (
        <LandingFiltersGroup
          key={fetcher.translationKey}
          translationKey={fetcher.translationKey}
          filters={filters[fetcher.filtersKey]}
        />
      ))}
    </>
  );
}
