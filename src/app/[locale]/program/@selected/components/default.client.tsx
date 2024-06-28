'use client';
import { useEffect } from 'react';
import { useStore } from 'zustand';
import { useSelectedStore } from '@/lib/selectedStore';

export default function DefaultClient() {
  const setIsSelected = useStore(
    useSelectedStore(),
    (state) => state.setIsSelected,
  );

  useEffect(() => {
    const contentEl = window.document.getElementById('movable-content');
    if (contentEl) {
      contentEl.style.left = '0vw';
    }
    setIsSelected(false);
  }, []);

  return (
    <div className="order-3 col-span-2 w-full">
      <div className="fixed h-content max-h-content min-h-content w-[66.666vw] overflow-y-scroll md:w-[20vw]" />
    </div>
  );
}
