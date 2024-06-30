'use client';
import { useTranslations } from 'next-intl';
import { useUIStore } from '@/lib/uiStore';
import { useStore } from 'zustand';
import Cross from '@/components/icons/cross';

export default function SavedHeader(props: any) {
  const savedItems = useStore(useUIStore, (state) => state.savedItems);
  const removeAll = useStore(useUIStore, (state) => state.removeAll);
  const t = useTranslations('Saved');

  return (
    <div className="flex h-content-header w-full items-center justify-between rounded-md border-border border-t-0 border-primary bg-secondary text-left text-lg">
      <span className="p-gutter-sm">{t('saved_items')}</span>
      {savedItems?.length ? (
        <button
          className="flex rounded-md border-l-border border-primary  p-gutter-sm"
          onClick={removeAll}
        >
          <span className="pr-4">{t('remove_all')} </span>
          <Cross className="h-[30px] rotate-45" />
        </button>
      ) : null}
    </div>
  );
}
