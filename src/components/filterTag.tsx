'use client';
import Link from 'next/link';
import { useSearchParams, useSelectedLayoutSegment } from 'next/navigation';
import { Filter } from '@/types/types';
import cx from 'classnames';

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
  const selectedLayoutSegment = useSelectedLayoutSegment(); // todo: why are we using this instead of usePathname() ?
  const searchParams = useSearchParams();

  return (
    <Link
      href={{
        pathname: selectedLayoutSegment,
        query: {
          // this should be wrapped nicely in some utility function or so?
          ...(filter.searchParam != 'language' && searchParams.get('language')
            ? { language: searchParams.get('language') }
            : {}),
          ...(filter.searchParam != 'faculty' && searchParams.get('faculty')
            ? { faculty: searchParams.get('faculty') }
            : {}),
          ...(filter.searchParam != 'format' && searchParams.get('format')
            ? { format: searchParams.get('format') }
            : {}),
          ...(isSelected ? {} : { [filter.searchParam]: filter?.id }),
          //[filter.searchParam]: filter?.id,
        },
      }}
      className={cx(disabled && 'pointer-events-none')}
    >
      <div
        className={cx(
          'relative w-fit rounded-md px-[13px]  py-[8px] text-xxs text-primary',
          isSelected
            ? 'bg-highlight text-black'
            : 'bg-secondary hover:bg-highlight hover:text-black',
          disabled && 'pointer-events-none opacity-35',
        )}
      >
        {filter.name}
      </div>
    </Link>
  );
}
