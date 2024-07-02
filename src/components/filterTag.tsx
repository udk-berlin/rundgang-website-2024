'use client';
import { useCallback } from 'react';
import { Filter } from '@/types/types';
import cx from 'classnames';
import useQuery from '@/lib/useQuery';
import { useSearchParams } from 'next/navigation';

export type FilterTagProps = {
  filter: Filter;
  disabled?: boolean;
  withBorder?: boolean;
};

export default function FilterTag({
  filter,
  disabled = false,
  withBorder = false,
}: FilterTagProps) {
  const searchParams = useSearchParams();
  const selectedId = searchParams.get(filter?.searchParam ?? '');
  const { changeParameter } = useQuery(filter.searchParam);

  const onClick = useCallback(() => {
    changeParameter(filter?.id);
  }, [filter?.id, changeParameter]);

  return (
    <div
      onClick={onClick}
      className={cx(
        'w-fit max-w-full cursor-pointer',
        disabled && 'pointer-events-none',
      )}
    >
      <div
        className={cx(
          'h-tag flex w-fit max-w-full items-center justify-center truncate rounded-border bg-secondary px-gutter-sm text-xxs hover:bg-highlight',
          selectedId == filter.id && '!bg-highlight',
          disabled && 'pointer-events-none opacity-35',
          withBorder && 'border-border',
        )}
      >
        {filter.name}
      </div>
    </div>
  );
}
