import cx from 'classnames';
import { ReactNodeProps } from '@/types/types';
import { useTranslations } from 'next-intl';

export type TagPlainProps = ReactNodeProps & {
  prefix?: string;
  title: string;
  withBorder?: boolean;
};

export default function TagPlain({
  className,
  prefix,
  title,
  withBorder = false,
}: TagPlainProps) {
  const t = useTranslations('Tags');
  return (
    <div
      className={cx(
        'flex h-tag w-fit min-w-0 max-w-full items-center rounded-border bg-secondary text-primary',
        withBorder && 'border-border border-primary',
        className,
      )}
    >
      <div
        className={cx(
          'w-fit min-w-0 max-w-full truncate px-gutter-sm text-xxs',
        )}
      >
        {prefix ? `${prefix}:` : ''} {t(title)}
      </div>
    </div>
  );
}
