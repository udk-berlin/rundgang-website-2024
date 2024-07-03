'use client';

import cx from 'classnames';
import { Link, usePathname } from '@/navigation';
import { useIsActive } from '@/lib/useLinkActive';
import { useCallback } from 'react';
import { createPortal } from 'react-dom';

export type NavigationLinkProps = {
  href: any;
  isFooter?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
  noContentAround?: boolean;
  children: any;
};

export default function NavigationLink({
  href,
  isFooter = false,
  isFirst = false,
  isLast = false,
  children,
}: NavigationLinkProps) {
  const pathname = usePathname();
  const isActive = useIsActive(href);
  const activeStyle = isFooter
    ? 'rounded-b-md border-t-secondary sm:hover:border-t-white'
    : 'rounded-t-md border-b-secondary sm:hover:border-t-white';

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      scroll={true}
      className={cx(
        'border-x-xs border-y-border border-primary bg-secondary sm:hover:bg-highlight sm:hover:text-black',
        isActive ? activeStyle : 'rounded-md',
        isFirst && 'ml-xs',
        isLast && 'mr-xs',
      )}
      replace={
        (pathname == '/imprint' && href == '/contact') ||
        (pathname == '/contact' && href == '/imprint')
      }
      href={href}
    >
      <div className="flex h-full items-center justify-center text-center">
        {children}
      </div>
    </Link>
  );
}
