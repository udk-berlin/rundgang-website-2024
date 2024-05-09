import { cn } from '@/lib/utils';
import { ResponsiveHtmlWithInnerHtmlProps } from '@/components/html/html';
import { sizeToTextClassName } from '@/styles/constants';

export function ResponsiveP({
  className,
  textSize = 'sm',
  dangerouslySetInnerHTML,
  children,
}: ResponsiveHtmlWithInnerHtmlProps) {
  if (dangerouslySetInnerHTML) {
    return (
      <p
        className={cn(sizeToTextClassName[textSize], className)}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      />
    );
  }

  return (
    <p className={cn(sizeToTextClassName[textSize], className)}>{children}</p>
  );
}
