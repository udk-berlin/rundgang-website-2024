'use client';
import { HtmlProps } from '@/components/html/html';
import { useState } from 'react';

export default function DesignContentOpenSidebar() {
  return (
    <DesignContentOpenSidebarContainer>
      <div>{'>'}</div>
    </DesignContentOpenSidebarContainer>
  );
}

function DesignContentOpenSidebarContainer({ children }: HtmlProps) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const onClick = (_: any) => {
    const el = window.document.getElementById('design-control-left-element');
    if (el) {
      el.style.left = sidebarIsOpen ? '0vw' : '-66.666666vw';
      setSidebarIsOpen(!sidebarIsOpen);
    }
  };
  return (
    <div
      onClick={onClick}
      className="rounded-bl-border pointer-events-auto absolute right-0 z-50 h-[50px] w-[50px] cursor-pointer bg-primary text-secondary md:hidden"
    >
      <div className="flex h-full items-center justify-center">{children}</div>
    </div>
  );
}
