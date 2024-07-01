'use client';
import { useCallback } from 'react';
import { Filter } from '@/types/types';
import cx from 'classnames';
import useQuery from '@/lib/useQuery';
import { useSearchParams } from 'next/navigation';

export type FilterTagProps = {
  filter: Filter;
  disabled?: boolean;
};

export default function FilterTag({
  filter,
  disabled = false,
}: FilterTagProps) {
  const searchParams = useSearchParams();
  const selectedId = searchParams.get(filter?.searchParam ?? '');
  const { changeParameter } = useQuery(filter.searchParam);

  const handleClickFilter = useCallback(() => {
    changeParameter(filter?.id);
  }, [filter?.id, changeParameter]);

  return (
    <div
      onClick={handleClickFilter}
      className={cx(
        'w-fit max-w-full cursor-pointer',
        disabled && 'pointer-events-none',
      )}
    >
      <div
        className={cx(
          'relative w-fit max-w-full truncate rounded-md border-white px-[13px] py-[8px] text-xxs ring-2 ring-primary',
          selectedId == filter.id
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
