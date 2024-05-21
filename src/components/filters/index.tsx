import { getTranslations } from 'next-intl/server';
import FilterGroup from './filterGroup';
import { Filters } from '@/types/types';

export default async function FilterMenu({ filters }: { filters: Filters }) {
  const t = await getTranslations('Filtering');

  return (
    <div className="sticky bottom-0 left-0 top-0 col-span-1 overflow-y-scroll bg-primary">
      <div className="w-full">
        <div className="w-full pr-1 text-secondary">{t('filter')}:</div>
        <FilterGroup title="faculties" list={filters.faculties} />
        <FilterGroup title="formats" list={filters.formats} />
        <FilterGroup title="languages" list={filters.languages} />
      </div>
    </div>
  );
}
