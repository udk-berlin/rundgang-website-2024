'use client';
import { HtmlProps } from '@/components/html/html';
import { useState } from 'react';
import ArrowRight from '@/components/icons/arrowRight';
import { cn } from '@/lib/utils';

export default function DesignContentOpenSidebar() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const onClick = (_: any) => {
    const el = window.document.getElementById('design-control-left-element');
    if (el) {
      el.style.left = sidebarIsOpen ? '0vw' : '-66.666666vw';
      setSidebarIsOpen(!sidebarIsOpen);
    }
  };

  return (
    <DesignContentOpenSidebarContainer onClick={onClick}>
      <div
        className={cn(
          'fill-secondary transition-transform duration-700',
          sidebarIsOpen ? 'rotate-0' : 'rotate-180',
        )}
      >
        <ArrowRight width={11} height={18} />
      </div>
    </DesignContentOpenSidebarContainer>
  );
}

function DesignContentOpenSidebarContainer({
  children,
  onClick,
}: HtmlProps & { onClick: (_: any) => void }) {
  return (
    <div
      onClick={onClick}
      className="pointer-events-auto absolute right-0 z-50 h-[50px] w-[50px] cursor-pointer rounded-bl-border bg-primary text-secondary md:hidden"
    >
      <div className="flex h-full items-center justify-center">{children}</div>
    </div>
  );
}
