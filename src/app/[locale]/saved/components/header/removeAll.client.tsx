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
      className="col-span-1 flex items-end rounded-border bg-secondary px-gutter-sm text-xs text-grey hover:bg-highlight"
    >
      <div className="py-gutter-sm">{t('remove-all')}</div>
      <div className="ml-auto flex h-full items-center justify-center">
        <Cross width={20} height={20} className="rotate-45" />
      </div>
    </button>
  );
}
