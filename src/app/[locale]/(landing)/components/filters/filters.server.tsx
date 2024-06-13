import { getTranslations } from 'next-intl/server';
import FilterGroup from '@/components/filters/filterGroup';
import { Filters } from '@/types/types';
import { Suspense } from 'react';
import { getGraphQLFilters } from '@/api/graphql/filters';

export default async function FiltersLanding() {
  const t = await getTranslations('Filtering');
  const filters = await getGraphQLFilters();

  return (
    <div className="relative">
      <div className="flex w-full">
        <Suspense>
          <FilterGroup title="faculties" list={filters.faculties} />
          <FilterGroup title="formats" list={filters.formats} />
          <FilterGroup title="languages" list={filters.languages} />
        </Suspense>
      </div>
    </div>
  );
}
