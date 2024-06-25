'use client';
import FilterTag from '@/components/filterTag';
import { useTranslations } from 'next-intl';
import useSelectedTags from '@/lib/useSelectedTags';
import { useState } from 'react';

export default function FilterBar() {
  const t = useTranslations('Filtering');
  const filterItems = useSelectedTags();

  return (
    <div className="sticky left-0 right-0 top-0 z-10 flex h-filter w-full flex-wrap justify-start bg-primary">
      <div className="mx-border mb-border w-full rounded-md bg-secondary p-border">
        <div className="pr-1">{t('filter')}</div>
        {filterItems.map((item) => (
          <div className="flex pl-1" key={`selected-filter-${item.id}`}>
            <FilterTag filter={item} isSelected />
          </div>
        ))}
      </div>
    </div>
  );
}
