'use client';
import { InfoContentInfoItemProps } from '@/app/info/components/content/info/item/item.client';
import { cn } from '@/lib/utils';
import { HtmlProps } from '@/components/html/html';
import { ResponsiveH5 } from '@/components/html/h5';

export default function InfoContentInfoItemTitle({
  item,
}: InfoContentInfoItemProps) {
  return (
    <InfoContentInfoItemTitleContainer>
      {item.title}
    </InfoContentInfoItemTitleContainer>
  );
}

function InfoContentInfoItemTitleContainer({ className, children }: HtmlProps) {
  return (
    <ResponsiveH5
      className={cn('flex h-content-header items-center', className)}
      textSize="m"
    >
      {children}
    </ResponsiveH5>
  );
}
