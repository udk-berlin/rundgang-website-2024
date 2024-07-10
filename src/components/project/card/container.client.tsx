'use client';

import cx from 'classnames';
import { useStore } from 'zustand';
import { ReactNodeProps } from '@/types/types';
import { useUIStore } from '@/lib/stores/uiStore';
import { Item } from '@/types/item';
import { useShallow } from 'zustand/react/shallow';
import { useSearchStore } from '@/lib/stores/searchStore';

export type ProjectCardContainerProps = ReactNodeProps & {
  item: Item;
};

export default function ProjectCardContainer({
  children,
  item,
}: ProjectCardContainerProps) {
  const isSaved = useStore(useUIStore, (state) =>
    state.savedItems.includes(item.id),
  );
  const search = useSearchStore(useShallow((state) => state.search));
  if (
    search &&
    !item.name.toLowerCase().startsWith(search.toLowerCase()) &&
    !item.name.toLowerCase().includes(` ${search.toLowerCase()}`) &&
    !item.authors.join(' ').toLowerCase().includes(search.toLowerCase())
  )
    return null;
  return (
    <div
      className={cx(
        'flex flex-col rounded-border p-gutter-xs md:hover:bg-highlight md:hover:text-black',
        isSaved ? 'bg-highlight text-black' : 'bg-secondary text-primary',
      )}
    >
      {children}
    </div>
  );
}
