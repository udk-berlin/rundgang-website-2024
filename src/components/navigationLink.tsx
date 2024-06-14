'use client';

import cx from 'classnames';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Link } from '@/navigation';

export type NavigationLinkProps = {
  href: any;
  isFooter?: boolean;
  children: any;
};
export default function NavigationLink({
  href,
  isFooter = false,
  children,
}: NavigationLinkProps) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';

  const isActive = pathname === href;
  const activeStyle = isFooter
    ? href === '/design'
      ? 'rounded-border'
      : 'rounded-b-border mt-0'
    : 'rounded-t-border mb-0';

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={cx(
        'm-[1px] mb-border border-0 bg-secondary first:ml-border last:mr-border hover:bg-highlight hover:text-primary',
        isActive ? activeStyle : 'rounded-border',
      )}
      href={href}
    >
      <div className="h-full content-around text-center">{children}</div>
    </Link>
  );
}
