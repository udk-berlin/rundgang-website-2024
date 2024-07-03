'use client';
import { ReactNodeProps } from '@/types/types';
import { usePathname } from '@/navigation';
import cx from 'classnames';

export default function ProgramMovableContentContainer({
  children,
}: ReactNodeProps) {
  const pathname = usePathname();

  return (
    <div
      className={cx(
        'relative z-40 order-2 col-span-3 h-content max-h-content min-h-content w-full md:order-2',
        pathname === '/project/[id]' ? 'md:col-span-3' : 'md:col-span-4',
      )}
    >
      {children}
    </div>
  );
}
