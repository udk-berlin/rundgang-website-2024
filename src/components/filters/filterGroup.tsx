'use client';
import FilterTag from '@/components/filterTag';
import { Filter } from '@/types/types';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import cx from "classnames";

export type FilterGroupProps = {
  title: 'faculties' | 'formats' | 'languages';
  filters: Filter[];
    hasLeftBorder?: boolean;
  hasRightBorder?: boolean;
};

export default function FilterGroup({ title, filters, hasLeftBorder = false, hasRightBorder = false }: FilterGroupProps) {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const selectedId = searchParams.get(filters[0]?.searchParam ?? '');
  return (
    <div className="w-full">
        <div key="title" className="bg-primary">
            <div className={cx("px-1 pt-1 text-grey w-full border-primary bg-secondary", hasLeftBorder && 'border-l-border rounded-bl-border', hasRightBorder && 'border-r-border rounded-br-border')}>
            {t(title)}:
            </div>
        </div>
        <div key="filters" className={cx("w-full h-full bg-primary border-l-[1px] border-r-[1px] border-t-border", hasLeftBorder && 'border-l-border', hasRightBorder && 'border-r-border' )}>
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
