'use client';
import cx from 'classnames';

export default function TimelineDay({
  name,
  date,
  isSelected,
  scrollToDate,
}: {
  name: string;
  date: number;
  isSelected: boolean;
  scrollToDate: (date: number) => void;
}) {
  return (
    <button
      className={cx(
        'h-full rounded-border border-x-xs text-sm first:border-l-border last:border-r-border md:hover:bg-highlight md:hover:text-black',
        isSelected ? 'bg-highlight text-black' : 'bg-secondary',
      )}
      onClick={() => scrollToDate(date)}
    >
      {name}
    </button>
  );
}
