'use client';

import cx from 'classnames';
import { useStore } from 'zustand';
import { ReactNodeProps } from '@/types/types';
import { useUIStore } from '@/lib/uiStore';
import { Item } from '@/types/item';

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

  return (
    <div
      className={cx(
        'flex flex-col rounded-border p-gutter-xs text-primary md:hover:bg-highlight',
        isSaved ? 'bg-highlight' : 'bg-secondary',
      )}
    >
      {children}
    </div>
  );
}
