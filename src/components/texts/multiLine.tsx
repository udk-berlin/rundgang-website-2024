import { ResponsiveP } from '@/components/html/p';
import { ResponsiveSize } from '@/types/types';

export function ResponsiveMultiLineText({
  className,
  text,
  textSize = 'md',
}: {
  className?: string;
  text: string;
  textSize?: ResponsiveSize;
}) {
  return (
    <ResponsiveP
      className={className}
      textSize={textSize}
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
  );
}
