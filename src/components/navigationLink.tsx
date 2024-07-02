'use client';

import cx from 'classnames';
import { Link, usePathname } from '@/navigation';
import { useIsActive } from '@/lib/useLinkActive';

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
    ? 'rounded-b-md border-t-secondary '
    : 'rounded-t-md border-b-secondary';

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      scroll={true}
      className={cx(
        'border-x-xs border-y-border border-primary bg-secondary hover:bg-highlight hover:text-primary',
        isActive ? activeStyle : 'rounded-md',
        isFirst && 'ml-border',
        isLast && 'mr-border',
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
