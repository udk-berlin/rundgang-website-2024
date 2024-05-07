import { cn } from '@/lib/utils';
import { ResponsiveHtmlProps } from '@/app/components/html/html';
import { sizeToTextClassName } from '@/app/components/html/constants';

export function ResponsiveH1({
  className,
  textSize = 'lg',
  children,
}: ResponsiveHtmlProps) {
  return (
    <h1 className={cn('font-bold', sizeToTextClassName[textSize], className)}>
      {children}
    </h1>
  );
}
