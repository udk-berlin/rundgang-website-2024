import { ItemContext, ItemFilterableContext } from '@/types/item';
import { useTranslations } from 'next-intl';
import { ReactNodeProps } from '@/types/types';
import TagPlain from '@/components/tag/plain.server';

export type ContextTagProps = ReactNodeProps & {
  context: ItemContext | ItemFilterableContext;
  withBorder?: boolean;
};

export default function ContextTagPlain({
  className,
  context,
  withBorder = false,
}: ContextTagProps) {
  const t = useTranslations();
  let prefix;

  if (context.template === 'location-level') {
    prefix = t('level');
  } else if (context.template === 'location-room') {
    prefix = t('room');
  }

  return (
    <TagPlain
      className={className}
      prefix={prefix}
      title={context.name}
      withBorder={withBorder}
    />
  );
}
