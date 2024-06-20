'use client';
import FilterTag from '@/components/filterTag';
import { useAppStore } from '@/lib/useAppContext';
import { Filter } from '@/types/types';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

export type FilterGroupProps = {
  title: 'faculties' | 'formats' | 'languages';
  list: Filter[];
};

export default function FilterGroup({ title, list }: FilterGroupProps) {
  const t = useTranslations('Filtering');
  const searchParams = useSearchParams();
  const selectedId = searchParams.get(list[0]?.searchParam ?? '');
  return (
    <div className="w-full">
      <div className="px-1 pt-1 text-grey">{t(title)}:</div>
      <div className="h-full bg-primary">
        <div className="flex w-full flex-wrap justify-start">
          {list.map((item) => (
            <FilterTag
              key={`filter-${title}-${item.id}`}
              filter={item}
              isSelected={selectedId == item.id}
              disabled={!item.exists}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
