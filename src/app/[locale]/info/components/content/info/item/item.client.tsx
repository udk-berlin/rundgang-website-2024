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
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = (_: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsHovered(true);
  };

  const onMouseLeave = (_: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsHovered(false);
  };

  return (
    <InfoContentInfoItemContainer
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <InfoContentInfoItemTitle item={item} isHovered={isHovered} />
      {isHovered && (
        <ResponsiveMultiLineText
          className="pb-gutter-sm"
          text={item.content}
          textSize="sm"
        />
      )}
    </InfoContentInfoItemContainer>
  );
}

function InfoContentInfoItemContainer({
  onMouseEnter,
  onMouseLeave,
  children,
}: HtmlProps & {
  onMouseEnter: (_: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseLeave: (_: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
  return (
    <ClientResponsiveDiv
      className={cn(
        'px-gutter-md md:hover:bg-highlight cursor-pointer rounded-md bg-white',
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </ClientResponsiveDiv>
  );
}
