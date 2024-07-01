'use client';
import { ReactNodeProps } from '@/types/types';
import { usePathname } from '@/navigation';
import cx from 'classnames';

export default function SidebarContainer({ children }: ReactNodeProps) {
  const pathname = usePathname();
  return (
    <div
      className={cx(
        'order-3 col-span-2 md:order-1',
        pathname === '/project/[id]' ? 'md:col-span-2' : 'md:col-span-1',
      )}
    >
      <div
        className={cx(
          'fixed h-content max-h-content min-h-content w-[66.666vw] overflow-y-scroll',
          pathname === '/project/[id]' ? 'md:w-[40vw]' : 'md:w-[20vw]',
        )}
      >
        {children}
      </div>
    </div>
  );
}
