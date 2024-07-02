import { getGraphQLFilters } from '@/api/graphql/filters';
import LandingFiltersGroup from '@/app/(landing)/components/desktop/filters/groups/group.server';

const keys: ('formats' | 'faculties' | 'languages')[] = [
  'formats',
  'faculties',
  'languages',
];

export default async function LandingFiltersGroupsSuspend() {
  const filters = await getGraphQLFilters();
  return (
    <>
      {keys.map((key) => (
        <LandingFiltersGroup key={key} filters={filters[key]} />
      ))}
    </>
  );
}
