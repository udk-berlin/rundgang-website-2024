import type { ReactNode } from 'react';
import { ResponsiveSize } from '@/types/types';

export type HtmlProps = {
  className?: string;
  children: ReactNode;
};

export type ResponsiveHtmlProps = HtmlProps & { textSize?: ResponsiveSize };
