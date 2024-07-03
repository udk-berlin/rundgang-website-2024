'use client';

import { usePathname } from '@/navigation';
import { ReactNodeProps } from '@/types/types';
import cx from 'classnames';

export default function LayoutMovableContentContainer({
  children,
}: ReactNodeProps) {
  const pathname = usePathname();
  const isSelectedProject = pathname === '/project/[id]';

  return (
    <div
      id="movable-content"
      className={cx(
        'fixed grid h-content max-h-content min-h-content bg-primary transition-[left] duration-700',
        isSelectedProject
          ? 'left-[0vw] w-[266.666vw] grid-cols-8 md:left-[-20vw] md:w-[120vw] md:grid-cols-6'
          : 'left-[-100vw] w-[266.666vw] grid-cols-8 md:left-[0vw] md:w-[140vw] md:grid-cols-7',
      )}
    >
      {children}
    </div>
  );
}
