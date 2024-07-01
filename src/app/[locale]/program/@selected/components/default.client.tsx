'use client';
import { useEffect } from 'react';

export default function DefaultClient() {
  useEffect(() => {
    const contentEl = window.document.getElementById('movable-content');
    if (contentEl) {
      contentEl.style.left = '0vw';
    }
  }, []);

  return (
    <div className="order-1 col-span-3 md:order-3">
      <div className="fixed h-content max-h-content min-h-content w-[100vw] overflow-y-scroll md:w-[20vw]" />
    </div>
  );
}
