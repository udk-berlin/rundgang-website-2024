import { getExistingGraphQLFilters } from '@/api/graphql/filters';
import LandingFiltersGroup from '@/app/(landing)/components/desktop/filters/groups/group.server';
import { getFilteredGraphQLItems } from '@/api/graphql/items';

const keys: ('formats' | 'faculties' | 'languages')[] = [
  'formats',
  'faculties',
  'languages',
];

export const revalidate = 3600;

export default async function LandingFiltersGroupsSuspend() {
  const items = await getFilteredGraphQLItems({});
  const contextGroups = await getExistingGraphQLFilters(items, {}, true);
  return (
    <>
      {keys.map((key) => (
        <LandingFiltersGroup key={key} filters={contextGroups[key]} />
      ))}
    </>
  );
}
