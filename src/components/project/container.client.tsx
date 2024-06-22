'use client';
import cx from 'classnames';

import { Link, usePathname } from '@/navigation';
import { ReactNodeProps } from '@/types/types';

import { useUIStore } from '@/lib/uiStore';
import { useStore } from 'zustand';

export default function ProjectCardContainer({
  children,
  itemId,
}: ReactNodeProps & { itemId: string }) {
  const isSaved = useStore(useUIStore, (state) =>
    state.savedItems.includes(itemId),
  );
  const pathname = usePathname();
  return (
    <Link
      href={{
        pathname: `/project/[id]`,
        params: { id: itemId },
      }}
      replace={pathname.includes('project')}
      className="inline-block "
    >
      <div
        className={cx(
          'col-span-1 inline-block w-full border border-primary',
          isSaved ? 'bg-primary' : '',
        )}
      >
        <div
          className={cx(
            'w-full rounded-md  p-gutter-xs hover:bg-highlight hover:text-black',
            isSaved ? 'bg-highlight text-black' : 'bg-secondary',
          )}
        >
          {children}
        </div>
      </div>
    </Link>
  );
}
