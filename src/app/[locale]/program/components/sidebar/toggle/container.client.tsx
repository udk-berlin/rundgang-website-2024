'use client';

import { useShallow } from 'zustand/react/shallow';
import { useProgrammSidebarStore } from '@/lib/stores/sidebar/programm';
import { ReactNodeProps } from '@/types/types';

export default function SidebarToggleContainer({ children }: ReactNodeProps) {
  const [toggleIsOpen] = useProgrammSidebarStore(
    useShallow((state) => [state.toggleIsOpen]),
  );

  return <div onClick={toggleIsOpen}>{children}</div>;
}
