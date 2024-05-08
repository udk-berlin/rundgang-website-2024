import Link from 'next/link';
import { Filter } from '@/types/graphql';
import cx from 'classnames';

export type FilterTagProps = {
  filter: Filter;
  isSelected?: boolean;
  isReverse?: boolean;
};

export default function FilterTag({
  filter,
  isSelected = false,
  isReverse = false,
}: FilterTagProps) {
  return (
    <Link
      href={{
        pathname: '/program', // change to programmatic
        query: {
          [filter.template]: filter?.id,
        },
      }}
    >
      <div
        className={cx(
          'w-fit rounded-md border border-black  px-1',
          isReverse ? 'border-primary bg-primarybg text-primary' : '',
          isSelected
            ? 'bg-secondary text-black hover:border-white hover:bg-black hover:text-white'
            : 'hover:border-black hover:bg-secondary hover:text-black',
        )}
      >
        {filter.name}
      </div>
    </Link>
  );
}
