import { cn } from '@/lib/utils';
import { ResponsiveHtmlProps } from '@/app/components/html/html';
import { sizeToTextClassName } from '@/app/components/html/constants';

export function ResponsiveDiv({
  className,
  textSize = 'md',
  children,
}: ResponsiveHtmlProps) {
  return (
    <div className={cn(sizeToTextClassName[textSize], className)}>
      {children}
    </div>
  );
}
