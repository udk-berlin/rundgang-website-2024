'use client';
import { ReactNodeProps } from '@/types/types';
import { useSidebarStore } from '@/lib/sidebareStore';
import { useShallow } from 'zustand/react/shallow';
import cx from 'classnames';

export default function SidebarContainer({ children }: ReactNodeProps) {
  const [isOpen] = useSidebarStore(useShallow((state) => [state.isOpen]));
  return (
    <div
      className={cx(
        'fixed grid w-[166.66vw] grid-cols-5 bg-primary transition-[left] duration-700',
        isOpen ? 'left-[-66.66vw]' : 'left-[0vw]',
      )}
    >
      {children}
    </div>
  );
}
