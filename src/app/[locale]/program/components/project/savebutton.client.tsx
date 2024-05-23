'use client';
import cx from 'classnames';
import { useAppStore } from '@/lib/useAppContext';
import { MouseEvent, useCallback } from 'react';
import SmoothButton from '@/components/smoothbutton';

export default function SaveButton({ itemId }: any) {
  const saveItem = useAppStore((state) => state.saveItem);
  const removeItem = useAppStore((state) => state.removeItem);
  const isSaved = useAppStore((state) => state.savedItems.includes(itemId));

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
    <SmoothButton onButtonClick={onSaveItem} bottom>
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
