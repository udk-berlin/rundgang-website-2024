import React from 'react';
import { cn } from '@/lib/utils';
import { ResponsiveHtmlProps } from '@/components/html/html';
import { sizeToTextClassName } from '@/styles/constants';

export function ResponsiveDiv({
  className,
  textSize = 'md',
  children,
}: ResponsiveHtmlProps) {
  return (
    <div className={cn(sizeToTextClassName[textSize], className)}>
      {children}
    </div>
  );
}

export function ClientResponsiveDiv({
  className,
  textSize = 'md',
  onMouseEnter = (_) => {},
  onMouseLeave = (_) => {},
  children,
}: ResponsiveHtmlProps & {
  onMouseEnter?: (_: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseLeave?: (_: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
  return (
    <div
      className={cn(sizeToTextClassName[textSize], className)}
      onMouseEnter={(e) => onMouseEnter(e)}
      onMouseLeave={(e) => onMouseLeave(e)}
    >
      {children}
    </div>
  );
}
