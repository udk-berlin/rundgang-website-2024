'use client';

import { usePathname } from '@/navigation';
import { ReactNodeProps } from '@/types/types';
import cx from 'classnames';
import { useShallow } from 'zustand/react/shallow';
import { useProgrammSidebarStore } from '@/lib/stores/sidebar/programm';

export default function LayoutMovableContentContainer({
  children,
}: ReactNodeProps) {
  const [sidebarIsOpen] = useProgrammSidebarStore(
    useShallow((state) => [state.isOpen]),
  );
  const pathname = usePathname();
  const projectIsSelected = pathname === '/project/[id]';

  return (
    <div
      className={cx(
        'fixed grid h-content max-h-content min-h-content bg-primary transition-[left] duration-700',
        projectIsSelected
          ? 'left-[0vw] w-[266.666vw] grid-cols-8 md:left-[-20vw] md:w-[120vw] md:grid-cols-6'
          : sidebarIsOpen
            ? 'left-[calc(-166.66vw+1px)] w-[266.666vw] grid-cols-8 md:left-[0vw] md:w-[140vw] md:grid-cols-7'
            : 'left-[-100vw] w-[266.666vw] grid-cols-8 md:left-[0vw] md:w-[140vw] md:grid-cols-7',
      )}
    >
      {children}
    </div>
  );
}
