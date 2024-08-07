'use client';
import { ReactNodeProps } from '@/types/types';
import { usePathname } from '@/navigation';
import cx from 'classnames';

export default function ProgramProjectsContainer({ children }: ReactNodeProps) {
  const pathname = usePathname();
  return (
    <div className="min-h-content-body border-x-border border-x-primary bg-primary">
      <div
        className={cx(
          'wrap grid grid-cols-2 gap-border',
          pathname === '/project/[id]' ? 'md:grid-cols-3' : 'md:grid-cols-4',
        )}
      >
        {children}
      </div>
    </div>
  );
}
