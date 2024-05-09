import { cn } from '@/lib/utils';
import { ResponsiveHtmlProps } from '@/components/html/html';
import { sizeToTextClassName } from '@/styles/constants';

export function ResponsiveH3({
  className,
  textSize = 'lg',
  children,
}: ResponsiveHtmlProps) {
  return (
    <h3 className={cn(sizeToTextClassName[textSize], className)}>{children}</h3>
  );
}
