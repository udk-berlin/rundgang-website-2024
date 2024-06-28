'use client';
import { InfoContentInfoItemProps } from '@/app/info/components/content/info/item/item.client';
import { cn } from '@/lib/utils';
import { HtmlProps } from '@/components/html/html';
import { ResponsiveH5 } from '@/components/html/h5';
import cx from "classnames";

export default function InfoContentInfoItemTitle({
  item,
                                                   isOpen,
}: InfoContentInfoItemProps & { isOpen: boolean }) {
  return (
    <InfoContentInfoItemTitleContainer className={cx('transition-[font-weight] delay-700 duration-0', isOpen ? 'font-bold' : 'font-normal')}>
      {item.title}
    </InfoContentInfoItemTitleContainer>
  );
}

function InfoContentInfoItemTitleContainer({ className, children }: HtmlProps) {
  return (
    <ResponsiveH5 className={cn('h-content-header flex items-center', className)} textSize="sm">
      {children}
    </ResponsiveH5>
  );
}
