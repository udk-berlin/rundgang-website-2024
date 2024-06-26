'use client';
import cx from 'classnames';
import { useUIStore } from '@/lib/uiStore';
import { MouseEvent, useCallback } from 'react';
import SmoothButton from '@/components/smoothbutton';
import { useTranslations } from 'next-intl';
import { useStore } from 'zustand';

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
      onButtonClick={onSaveItem}
      bottom
      title={isSaved ? t('remove') : t('save')}
    >
      <div
        className={cx(
          'text-[30px] transition-transform ease-in group-hover:text-secondary',
          isSaved ? 'rotate-45 text-primary' : 'rotate-0 text-primary',
        )}
      >
        +
      </div>
    </SmoothButton>
  );
}
