'use client';
import { ReactNodeProps } from '@/types/types';
import { useShallow } from 'zustand/react/shallow';
import cx from 'classnames';
import { useLandingSidebarStore } from '@/lib/stores/sidebar/landing';

export default function SidebarContainer({ children }: ReactNodeProps) {
  const [isOpen] = useLandingSidebarStore(
    useShallow((state) => [state.isOpen]),
  );
  return (
    <div
      className={cx(
        'fixed grid w-[166.66vw] grid-cols-5 bg-primary transition-[left] duration-700',
        isOpen ? 'left-[calc(-66.66vw+1px)]' : 'left-[0vw]',
      )}
    >
      {children}
    </div>
  );
}
