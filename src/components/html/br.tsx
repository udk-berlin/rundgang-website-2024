import { cn } from '@/lib/utils';
import { ResponsiveHtmlProps } from '@/components/html/html';
import { sizeToTextClassName } from '@/styles/constants';

export function ResponsiveBr({
  className,
  textSize = 'md',
}: ResponsiveHtmlProps) {
  return <br className={cn(sizeToTextClassName[textSize], className)} />;
}
