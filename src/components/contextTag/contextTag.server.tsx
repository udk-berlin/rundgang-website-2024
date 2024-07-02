import { ItemContext } from '@/types/item';
import { useTranslations } from 'next-intl';
import cx from 'classnames';

export type ContextTagProps = {
  context: ItemContext;
  withBorder?: boolean;
};

export default function ContextTag({
  context,
  withBorder = false,
}: ContextTagProps) {
  const t = useTranslations();
  let nameDescription;

  if (context.template === 'location-level') {
    nameDescription = t('level');
  } else if (context.template === 'location-room') {
    nameDescription = t('room');
  }

  return (
    <div
      className={cx(
        'h-tag flex w-fit min-w-0 max-w-full items-center rounded-border bg-secondary hover:bg-highlight',
        withBorder && 'border-border border-primary',
      )}
    >
      <div
        className={cx(
          'w-fit min-w-0 max-w-full truncate px-gutter-sm text-xxs',
        )}
      >
        {nameDescription ? `${nameDescription}: ${context.name}` : context.name}
      </div>
    </div>
  );
}
