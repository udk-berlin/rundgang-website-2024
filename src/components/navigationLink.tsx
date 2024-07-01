'use client';

import cx from 'classnames';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Link, usePathname } from '@/navigation';

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
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = usePathname();
  const selPathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';

  const isActive = pathname === href || selPathname == href;
  const activeStyle = isFooter
    ? 'rounded-b-border mt-0'
    : 'rounded-t-border -mb-xs';

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      scroll={true}
      className={cx(
        'm-xs border-0 bg-secondary hover:bg-highlight hover:text-primary',
        isFooter ? 'my-border' : 'my-border',
        isActive ? activeStyle : 'rounded-border',
        isFirst && 'ml-border',
        isLast && 'mr-border',
      )}
      replace={
        (pathname == '/imprint' && href == '/contact') ||
        (pathname == '/contact' && href == '/imprint')
      }
      href={href}
    >
      <div className="h-full content-around text-center">{children}</div>
    </Link>
  );
}
