'use client';
import FilterTag from '@/components/filterTag';
import { useTranslations } from 'next-intl';
import useSelectedTags from '@/lib/useSelectedTags';
import { useAppStore } from '@/lib/useAppContext';

export default function FilterBar() {
  const t = useTranslations('Filtering');
  const filterItems = useSelectedTags();

  //const selectedTags = useAppStore((state) => state.selectedTags);

  return (
    <div className="h-filter sticky left-0 right-0 top-0 z-10 flex w-full flex-wrap justify-start rounded-md border border-t-0 bg-secondary">
      <div className="pr-1">{t('filter')}</div>
      {filterItems.map((item) => (
        <div className="flex pl-1" key={`selected-filter-${item.id}`}>
          <FilterTag filter={item} isSelected />
        </div>
      ))}
    </div>
  );
}
