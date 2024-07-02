'use client';
import React, { useState } from 'react';
import { ClientResponsiveDiv } from '@/components/html/div';
import { InfoItem } from '@/types/types';
import { cn } from '@/lib/utils';
import InfoContentInfoItemTitle from '@/app/info/components/content/info/item/title.client';
import { ResponsiveMultiLineText } from '@/components/texts/multiLine';
import { HtmlProps } from '@/components/html/html';

export type InfoContentInfoItemProps = {
  item: InfoItem;
};

export default function InfoContentInfoItem({
  item,
}: InfoContentInfoItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = (_: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsOpen(!isOpen);
  };

  return (
    <InfoContentInfoItemContainer onClick={onClick}>
      <InfoContentInfoItemTitle item={item} />
      {isOpen && (
        <ResponsiveMultiLineText
          className="pb-[40px] pt-[14px] text-primary group-hover:text-black [&>a]:underline"
          text={item.text}
          textSize="sm"
        />
      )}
    </InfoContentInfoItemContainer>
  );
}

function InfoContentInfoItemContainer({
  onClick,
  children,
}: HtmlProps & {
  onClick: (_: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
  return (
    <ClientResponsiveDiv
      className={cn(
        'group cursor-pointer rounded-md bg-secondary px-gutter-m md:hover:bg-highlight md:hover:text-black',
      )}
      onClick={onClick}
    >
      {children}
    </ClientResponsiveDiv>
  );
}
