'use client';
import FilterTag from '@/components/filterTag';
import { useTranslations } from 'next-intl';
import useSelectedTags from '@/lib/useSelectedTags';
import { ReactNodeProps } from '@/types/types';
import Search from './search';
import { useShallow } from 'zustand/react/shallow';
import { useSearchStore } from '@/lib/stores/searchStore';

export default function FilterBar() {
  const t = useTranslations('Filtering');
  const filterItems = useSelectedTags();
  const searchOpen = useSearchStore(useShallow((state) => state.searchOpen));
  const setSearchOpen = useSearchStore(
    useShallow((state) => state.setSearchOpen),
  );

  return (
    <FilterBarContainer>
      <div
        onClick={() => setSearchOpen(!searchOpen)}
        className="pr-gutter-xs text-xs text-grey hover:text-highlight"
      >
        {t('filter')}:
      </div>
      {searchOpen ? <Search /> : null}
      {filterItems.map((item) => (
        <FilterTag
          key={`selected-filter-${item.id}`}
          filter={item}
          withBorder
        />
      ))}
    </FilterBarContainer>
  );
}

function FilterBarContainer({ children }: ReactNodeProps) {
  return (
    <div className="fixed left-0 right-0 top-0 z-10 mt-content-header h-content-header w-full bg-primary">
      <div className="flex h-full w-full max-w-full items-center gap-gutter-xs rounded-md border-x-border border-b-border bg-secondary px-gutter-sm">
        {children}
      </div>
    </div>
  );
}
