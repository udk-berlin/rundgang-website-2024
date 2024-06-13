'use client';
import cx from 'classnames';

import { Link, usePathname } from '@/navigation';
import { ReactNodeProps } from '@/types/types';

import { useAppStore } from '@/lib/useAppContext';

export default function ProjectCardContainer({
  children,
  itemId,
}: ReactNodeProps & { itemId: string }) {
  const isSaved = useAppStore((state) => state.savedItems.includes(itemId));
  const pathname = usePathname();
  return (
    <Link
      href={{
        pathname: `/project/[id]`,
        params: { id: itemId },
      }}
      replace={pathname.includes('project')}
    >
      <div
        className={cx(
          'inline-block w-full border border-primary',
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
