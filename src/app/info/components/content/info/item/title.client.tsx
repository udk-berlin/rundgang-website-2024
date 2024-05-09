'use client';
import { sizeToHeightClassName } from '@/styles/constants';
import { InfoContentInfoItemProps } from '@/app/info/components/content/info/item/item.client';
import { cn } from '@/lib/utils';
import { HtmlProps } from '@/components/html/html';
import { ResponsiveH5 } from '@/components/html/h5';

export default function InfoContentInfoItemTitle({
  item,
  isHovered,
}: InfoContentInfoItemProps & { isHovered: boolean }) {
  return (
    <InfoContentInfoItemTitleContainer className={isHovered ? 'font-bold' : ''}>
      {item.title}
    </InfoContentInfoItemTitleContainer>
  );
}

function InfoContentInfoItemTitleContainer({ className, children }: HtmlProps) {
  return (
    <ResponsiveH5
      className={cn(
        'flex items-center',
        sizeToHeightClassName['sm'],
        className,
      )}
      textSize="md"
    >
      {children}
    </ResponsiveH5>
  );
}
