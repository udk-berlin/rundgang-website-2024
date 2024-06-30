'use client';
import cx from 'classnames';
import { useUIStore } from '@/lib/uiStore';
import { MouseEvent, useCallback } from 'react';
import SmoothButton from '@/components/smoothButton';
import { useTranslations } from 'next-intl';
import { useStore } from 'zustand';
import Cross from "@/components/icons/cross";

export default function SaveButton({ itemId }: any) {
  const t = useTranslations('Saved');
  const saveItem = useStore(useUIStore, (state) => state.saveItem);
  const removeItem = useStore(useUIStore, (state) => state.removeItem);
  const isSaved = useStore(useUIStore, (state) =>
    state.savedItems.includes(itemId),
  );

  const onSaveItem = useCallback(
    (e: MouseEvent) => {
      if (isSaved) {
        removeItem(itemId);
      } else {
        saveItem(itemId);
      }
      e.preventDefault();
      e.stopPropagation();
    },
    [itemId, saveItem, isSaved, removeItem],
  );

  return (
    <SmoothButton
      onClick={onSaveItem}
      bottom
      title={isSaved ? t('remove') : t('save')}
      color={isSaved ? 'highlight' : 'secondary'}
    >
        <Cross className={cx("absolute z-50 top-0 w-content-header h-content-header p-gutter-sm transition-transform ease-in", isSaved ? 'rotate-45' : 'rotate-0')}/>
    </SmoothButton>
  );
}
