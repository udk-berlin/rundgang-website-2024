'use client';
import { useTranslations } from 'next-intl';
import { useUIStore } from '@/lib/uiStore';
import { useStore } from 'zustand';
import Cross from '@/components/icons/cross';

export default function SavedHeaderRemoveAll() {
  const removeAll = useStore(useUIStore, (state) => state.removeAll);
  const t = useTranslations('Saved');

  return (
    <button
      onClick={removeAll}
      className="col-span-1 flex items-end rounded-b-border bg-secondary px-gutter-sm text-xxs text-grey hover:bg-highlight sm:rounded-border md:px-gutter-m md:text-xs"
    >
      <div className="py-gutter-xs">{t('remove-all')}</div>
      <div className="ml-auto flex h-full items-center justify-center">
        <Cross width={20} height={20} className="rotate-45" />
      </div>
    </button>
  );
}
