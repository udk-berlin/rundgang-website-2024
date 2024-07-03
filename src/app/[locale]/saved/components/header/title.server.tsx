import { useTranslations } from 'next-intl';
import { ReactNodeProps } from '@/types/types';

export default function SavedHeaderTitle() {
  const t = useTranslations('Saved');
  return <SavedHeaderTitleContainer>{t('title')}</SavedHeaderTitleContainer>;
}

function SavedHeaderTitleContainer({ children }: ReactNodeProps) {
  return (
    <div className="col-span-2 flex items-end rounded-border bg-secondary px-gutter-sm py-gutter-xs text-xxs text-grey md:col-span-4 md:px-gutter-m md:text-xs">
      {children}
    </div>
  );
}
