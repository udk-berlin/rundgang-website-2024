'use client';

import cx from 'classnames';
import { useStore } from 'zustand';

import { ReactNodeProps } from '@/types/types';
import { useUIStore } from '@/lib/uiStore';
import {ProjectCardProps} from "@/components/project/card.server";

export default function ProjectCardContainer({
  children,
  item,
}: ReactNodeProps & ProjectCardProps) {
  const isSaved = useStore(useUIStore, (state) =>
    state.savedItems.includes(item.id),
  );

  return (
      <div className={cx(
          'rounded-border p-gutter-xs hover:bg-highlight text-primary flex-col flex',
          isSaved ? 'bg-highlight' : 'bg-secondary',
      )}>
          {children}
      </div>
  );
}
