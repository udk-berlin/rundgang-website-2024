'use client';
import FilterTag from '@/components/filterTag';
import { Filter } from '@/types/types';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import cx from 'classnames';

export type FilterGroupProps = {
  title: 'faculties' | 'formats' | 'languages';
  filters: Filter[];
  hasLeftBorder?: boolean;
  hasRightBorder?: boolean;
};

export default function FilterGroup({
  title,
  filters,
  hasLeftBorder = false,
  hasRightBorder = false,
}: FilterGroupProps) {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const selectedId = searchParams.get(filters[0]?.searchParam ?? '');
  return (
    <div className="w-full">
      <div key="title" className="bg-primary">
        <div
          className={cx(
            'w-full border-primary bg-secondary px-1 pt-1 text-grey',
            hasLeftBorder && 'rounded-bl-border border-l-border',
            hasRightBorder && 'rounded-br-border border-r-border',
          )}
        >
          {t(title)}:
        </div>
      </div>
      <div
        key="filters"
        className={cx(
          'border-l-xs border-r-xs h-full w-full border-t-border bg-primary',
          hasLeftBorder && 'border-l-border',
          hasRightBorder && 'border-r-border',
        )}
      >
        <div key="filters" className="flex flex-wrap justify-start gap-border">
          {filters.map((item) => (
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
