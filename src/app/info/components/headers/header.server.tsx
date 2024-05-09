import { ResponsiveH1 } from '@/components/html/h1';
import { LocalizesObject } from '@/types/types';
import { HtmlProps } from '@/components/html/html';
import { cn } from '@/lib/utils';

export type InfoHeaderProps = {
  className?: string;
  header: LocalizesObject<string>;
};

export default function InfoHeader({ className, header }: InfoHeaderProps) {
  return (
    <InfoHeaderContainer className={className}>{header.en}</InfoHeaderContainer>
  );
}

function InfoHeaderContainer({ className, children }: HtmlProps) {
  return (
    <ResponsiveH1
      className={cn(
        'px-gutter-md desktop:px-desktop-gutter-md pb-gutter-xs desktop:pb-desktop-gutter-xs col-span-2 flex items-end text-grey',
        className,
      )}
      textSize="sm"
    >
      {children}
    </ResponsiveH1>
  );
}
