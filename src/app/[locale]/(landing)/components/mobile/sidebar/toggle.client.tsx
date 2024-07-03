'use client';
import ArrowRight from '@/components/icons/arrowRight';
import { cn } from '@/lib/utils';
import { ReactNodeProps } from '@/types/types';
import { useShallow } from 'zustand/react/shallow';
import { useLandingSidebarStore } from '@/lib/stores/sidebar/landing';

export default function SidebarToggle() {
  const [isOpen, toggleIsOpen] = useLandingSidebarStore(
    useShallow((state) => [state.isOpen, state.toggleIsOpen]),
  );

  return (
    <SidebarToggleContainer onClick={toggleIsOpen}>
      <div
        className={cn(
          'fill-secondary transition-transform duration-700',
          isOpen ? 'rotate-0' : 'rotate-180',
        )}
      >
        <ArrowRight width={11} height={18} />
      </div>
    </SidebarToggleContainer>
  );
}

function SidebarToggleContainer({
  children,
  onClick,
}: ReactNodeProps & { onClick: (_: any) => void }) {
  return (
    <div
      className="pointer-events-auto absolute right-0 z-50 aspect-square h-content-header cursor-pointer rounded-bl-border bg-primary"
      onClick={onClick}
    >
      <div className="flex h-full items-center justify-center">{children}</div>
    </div>
  );
}
