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
  const activeStyle = isFooter ? 'rounded-b-md mt-0' : 'rounded-t-md mb-0';
  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={cx(
        'm-[1px] border-0 bg-secondary hover:bg-highlight hover:text-black',
        isActive ? activeStyle : 'rounded-md',
      )}
      href={href}
    >
      <div className="h-full content-around text-center">{children}</div>
    </Link>
  );
}
