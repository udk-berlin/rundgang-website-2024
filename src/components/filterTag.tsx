'use client';
import { useCallback } from 'react';
import Link from 'next/link';
import { useSearchParams, useSelectedLayoutSegment } from 'next/navigation';
import { Filter } from '@/types/types';
import cx from 'classnames';
import useQuery from '@/lib/useQuery';

export type FilterTagProps = {
  filter: Filter;
  isSelected?: boolean;
  isReverse?: boolean;
  disabled?: boolean;
};

export default function FilterTag({
  filter,
  isSelected = false,
  isReverse = false,
  disabled = false,
}: FilterTagProps) {
  const { changeParameter } = useQuery(filter.searchParam);

  const handleClickFilter = useCallback(() => {
    changeParameter(filter?.id);
  }, [filter?.id, changeParameter]);

  return (
    <div
      onClick={handleClickFilter}
      className={cx(
        'cursor-pointer pl-1 pt-1',
        disabled && 'pointer-events-none',
      )}
    >
      <div
        className={cx(
          'relative w-fit rounded-md border-white px-[13px] py-[8px]  text-xxs ring-2 ring-primary',
          isSelected
            ? 'bg-highlight text-black'
            : 'bg-secondary text-primary hover:bg-highlight hover:text-black',
          disabled && 'pointer-events-none opacity-35',
        )}
      >
        {filter.name}
      </div>
    </div>
  );
}
