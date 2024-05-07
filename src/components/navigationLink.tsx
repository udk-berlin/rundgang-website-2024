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
    ? 'rounded-b-md border-t-0'
    : 'rounded-t-md border-b-0';
  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={cx(
        'border border-primary bg-primarybg hover:bg-secondary hover:text-black',
        isActive ? activeStyle : 'rounded-md',
      )}
      href={href}
    >
      <div className="h-9 content-around text-center">{children}</div>
    </Link>
  );
}
