'use client';

import cx from 'classnames';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Link } from '@/navigation';

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
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';

  const isActive = pathname === href;
  const activeStyle = isFooter
    ? href === '/design'
      ? 'rounded-border'
      : 'rounded-b-border mt-0'
    : 'rounded-t-border -mb-1';

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={cx(
        'm-[1px] border-0 bg-secondary hover:bg-highlight hover:text-primary',
        isFooter ? 'my-border' : 'my-border',
        isActive ? activeStyle : 'rounded-border',
          isFirst && 'ml-border',
          isLast && 'mr-border'
      )}
      href={href}
    >
      <div className="h-full text-center content-around">
        {children}
      </div>
    </Link>
  );
}
