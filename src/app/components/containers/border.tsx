import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const borderToMarginMapper: { [key: string]: string } = {
  all: 'm-border',
  x: 'mx-border',
  y: 'my-border',
  t: 'mt-border',
  r: 'mr-border',
  b: 'mb-border',
  l: 'ml-border',
};

export default function BorderContainer({
  className,
  innerClassName,
  borders = ['all'],
  children,
}: {
  className?: string;
  innerClassName?: string;
  borders?: string[];
  children: ReactNode;
}) {
  return (
    <div className={cn('bg-black', className)}>
      <div
        className={cn(
          'rounded-border h-full bg-white',
          borders.map((border) => borderToMarginMapper[border]).join(' '),
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
