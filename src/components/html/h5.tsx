import { cn } from '@/lib/utils';
import { ResponsiveHtmlProps } from '@/components/html/html';
import { sizeToTextClassName } from '@/styles/constants';

export function ResponsiveH5({
  className,
  textSize = 'md',
  children,
}: ResponsiveHtmlProps) {
  return (
    <h5 className={cn(sizeToTextClassName[textSize], className)}>{children}</h5>
  );
}
