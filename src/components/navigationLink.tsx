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
  className?: string;
};

export default function NavigationLink({
  href,
  isFooter = false,
  isFirst = false,
  isLast = false,
  children,
  className,
}: NavigationLinkProps) {
  const pathname = usePathname();
  const isActive = useIsActive(href);
  const activeStyle = isFooter
    ? 'rounded-b-md pt-border'
    : 'rounded-t-md pb-border';

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      scroll={true}
      className={cx(
        'border-x-xs border-primary bg-secondary sm:hover:bg-highlight sm:hover:text-black',
        isFooter ? 'border-b-border' : 'border-t-border',
        isActive
          ? activeStyle
          : isFooter
            ? 'rounded-md border-t-border'
            : 'rounded-md border-b-border',
        isFirst && 'ml-xs',
        isLast && 'mr-xs',
        className,
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
