import { getExistingGraphQLFilters } from '@/api/graphql/filters';
import LandingFiltersGroup from '@/app/(landing)/components/mobile/filters/groups/group.server';
import { getFilteredGraphQLItems } from '@/api/graphql/items';

const fetchers: {
  translationKey: 'format' | 'faculty' | 'language';
  filtersKey: 'formats' | 'faculties' | 'languages';
}[] = [
  { translationKey: 'format', filtersKey: 'formats' },
  { translationKey: 'faculty', filtersKey: 'faculties' },
  { translationKey: 'language', filtersKey: 'languages' },
];

export default async function LandingFiltersGroups() {
  const items = await getFilteredGraphQLItems({});
  const contextGroups = await getExistingGraphQLFilters(items, {}, true);
  return (
    <>
      {fetchers.map((fetcher) => (
        <LandingFiltersGroup
          key={fetcher.translationKey}
          translationKey={fetcher.translationKey}
          filters={contextGroups[fetcher.filtersKey]}
        />
      ))}
    </>
  );
}
