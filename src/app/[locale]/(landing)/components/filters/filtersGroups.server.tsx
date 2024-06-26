import FilterGroup from '@/components/filters/filterGroup';
import { getGraphQLFilters } from '@/api/graphql/filters';

export default async function LandingFiltersGroups() {
  const filters = await getGraphQLFilters();
  return (
      <>
        {Object.entries(filters).map(([key, value], index) => (
                <FilterGroup
                    key={key}
                    title={key as 'faculties' | 'formats' | 'languages'}
                    filters={value}
                    hasLeftBorder={index === 0}
                    hasRightBorder={index === Object.keys(filters).length - 1}
                />
            )
        )}
      </>
  );
}
