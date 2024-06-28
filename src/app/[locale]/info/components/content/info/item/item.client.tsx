'use client';
import React, { useState } from 'react';
import { ClientResponsiveDiv } from '@/components/html/div';
import { InfoItem } from '@/types/types';
import { cn } from '@/lib/utils';
import InfoContentInfoItemTitle from '@/app/info/components/content/info/item/title.client';
import { ResponsiveMultiLineText } from '@/components/texts/multiLine';
import { HtmlProps } from '@/components/html/html';
import cx from "classnames";
import { Rect, useRect } from 'react-use-rect';
import {is} from "unist-util-is";

export type InfoContentInfoItemProps = {
  item: InfoItem;
};

export default function InfoContentInfoItem({
  item,
}: InfoContentInfoItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [rect, setRect] = useState<Rect | null>(null);
  const [rectRef] = useRect(setRect);

  const onClick = (_: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsOpen(!isOpen);
  };

  return (
    <InfoContentInfoItemContainer onClick={onClick}>
      <InfoContentInfoItemTitle item={item} isOpen={isOpen} />
        {rect?.height}
      <div ref={rectRef} className={cx("invisible")}>
          <div className={cx("transition-[height] duration-700")} style={{height: isOpen ? (rect?.height ?? 0) : '0px'}}>
              <ResponsiveMultiLineText
                  className="pb-gutter-md"
                  text={item.content}
                  textSize="sm"
              />
          </div>
      </div>
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
        'cursor-pointer rounded-md bg-secondary px-gutter-md md:hover:bg-highlight',
      )}
      onClick={onClick}
    >
      {children}
    </ClientResponsiveDiv>
  );
}
