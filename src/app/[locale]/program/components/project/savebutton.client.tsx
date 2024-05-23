'use client';

import { useAppStore } from '@/lib/useAppContext';
import { MouseEvent, useCallback } from 'react';
export default function SaveButton({ itemId }: any) {
  const saveItem = useAppStore((state) => state.saveItem);

  const onSaveItem = useCallback(
    (e: MouseEvent) => {
      saveItem(itemId);
      e.preventDefault();
      e.stopPropagation();
    },
    [itemId, saveItem],
  );

  return (
    <button
      onClick={onSaveItem}
      className="group absolute bottom-gutter-xxs right-gutter-xxs h-10 w-10 rounded-tl-md bg-secondary text-md hover:bg-primary hover:text-highlight"
    >
      <span>+</span>
      <div className="bg-transparent group-hover:bg-transparent absolute -top-4 right-0 h-4 w-2 rounded-br-md shadow-[0_8px_0_0_rgb(var(--secondary))] group-hover:shadow-none"></div>
      <div className="bg-transparent group-hover:bg-transparent absolute -left-4 bottom-0 h-2 w-4 rounded-br-md shadow-[8px_0_0_0_rgb(var(--secondary))] group-hover:shadow-none"></div>
    </button>
  );
}
