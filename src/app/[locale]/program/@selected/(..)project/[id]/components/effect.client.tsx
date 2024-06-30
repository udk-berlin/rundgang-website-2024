'use client';
import { useEffect } from 'react';

export default function ProgramSelectedProjectEffect() {
  useEffect(() => {
    const contentEl = window.document.getElementById('movable-content');
    if (contentEl) {
      contentEl.style.left = '-40vw';
    }
  }, []);

  return <></>;
}
