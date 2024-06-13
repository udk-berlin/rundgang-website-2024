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
    <div className="sticky left-0 right-0 top-[var(--footer-height)] z-10 flex h-md w-full rounded-md border border-t-0 bg-primary bg-secondary p-2">
      <div className="pr-1">{t('filter')}</div>
      {filterItems.map((item) => (
        <div className="pl-1" key={`selected-filter-${item.id}`}>
          <FilterTag filter={item} isSelected />
        </div>
      ))}
    </div>
  );
}
