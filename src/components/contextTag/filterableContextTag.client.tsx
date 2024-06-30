'use client';
import { useCallback } from 'react';
import cx from 'classnames';
import useQuery from '@/lib/useQuery';
import { useSearchParams } from 'next/navigation';
import { ItemFilterableContext } from '@/types/item';

export type FilterTagProps = {
  context: ItemFilterableContext;
  disabled?: boolean;
};

export default function FilterableContextTag({
  context,
  disabled = false,
}: FilterTagProps) {
  const searchParams = useSearchParams();
  const selectedId = searchParams.get(context.searchParam);
  const { changeParameter } = useQuery(context.searchParam);
  const handleClickFilter = useCallback(() => {
    changeParameter(context.id);
  }, [context.id, changeParameter]);

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
          selectedId == context.id
            ? 'bg-highlight text-black'
            : 'bg-secondary text-primary hover:bg-highlight hover:text-black',
          disabled && 'pointer-events-none opacity-35',
        )}
      >
        {context.name}
      </div>
    </div>
  );
}
