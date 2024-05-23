'use client';
import cx from 'classnames';
import { ReactNodeProps } from '@/types/types';

import { useAppStore } from '@/lib/useAppContext';

export default function ProjectCardContainer({
  children,
  itemId,
}: ReactNodeProps & { itemId: string }) {
  const isSaved = useAppStore((state) => state.savedItems.includes(itemId));
  return (
    <div
      className={cx(
        'inline-block w-full border border-primary',
        isSaved ? 'bg-primary' : '',
      )}
    >
      <div
        className={cx(
          'w-full rounded-md hover:bg-highlight',
          isSaved ? 'bg-highlight text-black' : 'bg-secondary',
        )}
      >
        {children}
      </div>
    </div>
  );
}
