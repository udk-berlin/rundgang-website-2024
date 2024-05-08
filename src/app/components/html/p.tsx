import { cn } from '@/lib/utils';
import { ResponsiveHtmlProps } from '@/app/components/html/html';
import { sizeToTextClassName } from '@/app/components/html/constants';

export function ResponsiveP({
  className,
  textSize = 'sm',
  children,
}: ResponsiveHtmlProps) {
  return (
    <p className={cn(sizeToTextClassName[textSize], className)}>{children}</p>
  );
}
