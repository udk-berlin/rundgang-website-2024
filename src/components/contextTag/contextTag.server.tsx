import { ItemContext, ItemFilterableContext } from '@/types/item';
import ContextTagPlain from '@/components/contextTag/plain.server';
import ContextTagLink from '@/components/contextTag/link.server';
import ContextTagButton from '@/components/contextTag/button.client';

export type ContextTagType = 'plain' | 'link' | 'button';

export type ContextTagProps = {
  type?: ContextTagType;
  context: ItemContext | ItemFilterableContext;
  withBorder?: boolean;
};

export default function ContextTag({
  type = 'plain',
  context,
  withBorder = false,
}: ContextTagProps) {
  switch (type) {
    case 'plain':
      return <ContextTagPlain context={context} withBorder={withBorder} />;
    case 'link':
      return <ContextTagLink context={context} withBorder={withBorder} />;
    case 'button':
      return <ContextTagButton context={context} withBorder={withBorder} />;
    default:
      return <ContextTagPlain context={context} withBorder={withBorder} />;
  }
}
