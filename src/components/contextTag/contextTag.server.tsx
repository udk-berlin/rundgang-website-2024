import { ItemContext } from '@/types/item';
import { useTranslations } from 'next-intl';

export type ContextTagProps = {
  context: ItemContext;
};

export default function ContextTag({ context }: ContextTagProps) {
  const t = useTranslations();
  let nameDescription;

  if (context.template === 'location-level') {
    nameDescription = t('level');
  } else if (context.template === 'location-room') {
    nameDescription = t('room');
  }

  return (
    <div className="w-fit max-w-full">
      <div className="h-tag flex w-fit max-w-full items-center justify-center truncate rounded-border bg-secondary px-gutter-sm text-xxs hover:bg-highlight">
        {nameDescription ? `${nameDescription}: ` : ''} {context.name}
      </div>
    </div>
  );
}
