'use client';

import cx from 'classnames';
import { useStore } from 'zustand';

import { ReactNodeProps } from '@/types/types';
import { useUIStore } from '@/lib/uiStore';
import { ProjectCardProps } from '@/components/project/card.server';

export default function ProjectCardContainer({
  children,
  item,
}: ReactNodeProps & ProjectCardProps) {
  const isSaved = useStore(useUIStore, (state) =>
    state.savedItems.includes(item.id),
  );

  return (
    <div
      className={cx(
        'flex flex-col rounded-border p-gutter-xs text-primary hover:bg-highlight',
        isSaved ? 'bg-highlight' : 'bg-secondary',
      )}
    >
      {children}
    </div>
  );
}
