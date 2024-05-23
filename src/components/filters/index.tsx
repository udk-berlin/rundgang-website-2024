import { getTranslations } from 'next-intl/server';
import FilterGroup from './filterGroup';
import { Filters } from '@/types/types';

export default async function FilterMenu({ filters }: { filters: Filters }) {
  const t = await getTranslations('Filtering');

  return (
    <div className="relative left-0 top-0 overflow-y-scroll bg-primary xs:sticky xs:bottom-0 xs:col-span-1">
      <div className="w-full">
        <div className="hidden w-full pr-1 text-secondary md:block">
          {t('filter')}:
        </div>
        <FilterGroup title="faculties" list={filters.faculties} />
        <FilterGroup title="formats" list={filters.formats} />
        <FilterGroup title="languages" list={filters.languages} />
      </div>
    </div>
  );
}
