'use client';
import FilterTag from '@/components/filterTag';
import { useAppStore } from '@/lib/useAppContext';
import { Filter } from '@/types/types';
import { useTranslations } from 'next-intl';

export type FilterGroupProps = {
  title: 'faculties' | 'formats' | 'languages';
  list: Filter[];
};

export default function FilterGroup({ title, list }: FilterGroupProps) {
  const t = useTranslations('Filtering');
  const selectedId = useAppStore((state) => state[list[0].searchParam]);
  return (
    <div className="w-full pt-4">
      <div className="pr-1 text-secondary">{t(title)}:</div>
      <div className="w-full">
        {list.map((item) => (
          <FilterTag
            key={`filter-${title}-${item.id}`}
            filter={item}
            isReverse
            isSelected={selectedId == item.id}
            disabled={!item.exists}
          />
        ))}
      </div>
    </div>
  );
}
