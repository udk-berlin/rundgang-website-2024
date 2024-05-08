import { cn } from '@/lib/utils';
import { ResponsiveHtmlProps } from '@/app/components/html/html';
import { sizeToTextClassName } from '@/app/components/html/constants';

export function ResponsiveBr({
  className,
  textSize = 'md',
}: ResponsiveHtmlProps) {
  return <br className={cn(sizeToTextClassName[textSize], className)} />;
}
