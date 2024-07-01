'use client';
import { useState } from 'react';
import ArrowRight from '@/components/icons/arrowRight';
import { cn } from '@/lib/utils';
import { ReactNodeProps } from '@/types/types';

export default function SidebarToggle() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const onClick = (_: any) => {
    const contentEl = window.document.getElementById('movable-content');
    if (contentEl) {
      contentEl.style.left = sidebarIsOpen ? '0vw' : '-66.666666vw';
      setSidebarIsOpen(!sidebarIsOpen);
    }
  };

  return (
    <SidebarToggleContainer onClick={onClick}>
      <div
        className={cn(
          'transition-transform duration-700',
          sidebarIsOpen ? 'rotate-0' : 'rotate-180',
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
      className="pointer-events-auto absolute right-0 z-50 aspect-square h-content-header cursor-pointer rounded-bl-border bg-primary transition-[right] duration-700 md:hidden"
      onClick={onClick}
    >
      <div className="flex h-full items-center justify-center">{children}</div>
    </div>
  );
}
