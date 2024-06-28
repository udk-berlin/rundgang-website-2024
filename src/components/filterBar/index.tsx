'use client';
import FilterTag from '@/components/filterTag';
import { useTranslations } from 'next-intl';
import useSelectedTags from '@/lib/useSelectedTags';
import {ReactNodeProps} from "@/types/types";

export default function FilterBar() {
  const t = useTranslations('Filtering');
  const filterItems = useSelectedTags();

  return (
    <FilterBarContainer>
        <div className="text-xs text-grey pr-gutter-xs">{t('filter')}:</div>
        {filterItems.map((item) => (
            <FilterTag key={`selected-filter-${item.id}`} filter={item} isSelected />
        ))}
    </FilterBarContainer>
  );
}

function FilterBarContainer({children}: ReactNodeProps) {
    return (
        <div className="sticky left-0 right-0 top-0 z-10 flex h-content-header w-full bg-primary">
            <div className="w-full max-w-full overflow-x-scroll h-full px-gutter-sm flex gap-gutter-xs items-center bg-secondary border-x-border border-b-border rounded-md">
                {children}
            </div>
        </div>
    );
}
