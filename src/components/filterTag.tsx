'use client';
import Link from 'next/link';
import { useSearchParams, useSelectedLayoutSegment } from 'next/navigation';
import { Filter } from '@/types/graphql';
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
  const selectedLayoutSegment = useSelectedLayoutSegment();
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
    >
      <div
        className={cx(
          'w-fit rounded-md border border-primary p-1',
          isReverse ? 'border-primary bg-secondary text-primary' : '',
          isSelected
            ? 'bg-highlight text-black hover:border-white hover:bg-black hover:text-white'
            : 'hover:border-black hover:bg-highlight hover:text-black',
          disabled ? 'opacity-15' : '',
        )}
      >
        {filter.name}
      </div>
    </Link>
  );
}
