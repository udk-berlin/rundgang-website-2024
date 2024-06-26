import { getTranslations } from 'next-intl/server';
import FilterGroup from './filterGroup';
import { Filters } from '@/types/types';
import { Suspense } from 'react';

export default async function FilterMenu({ filters }: { filters: Filters }) {
  const t = await getTranslations('Filtering');

  return (
    <div className="col-span-1 h-[calc(100vh-var(--header-height)-var(--footer-height))] overflow-y-scroll bg-primary">
      <div className="h-fit w-full">
        <div className="hidden w-full pr-1 text-secondary md:block">
          {t('filter')}:
        </div>
        <Suspense>
          <FilterGroup title="faculties" filters={filters.faculties} />
          <FilterGroup title="formats" filters={filters.formats} />
          <FilterGroup title="languages" filters={filters.languages} />
        </Suspense>
      </div>
    </div>
  );
}
