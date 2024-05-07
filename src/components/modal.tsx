'use client';

import { type ElementRef, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      console.log('open modal');

      dialogRef.current?.showModal();
    }
  }, []);

  const onDismiss = useCallback((e) => {
    router.back();
  }, []);

  return createPortal(
    <div className="bg-primary-bg absolute bottom-0 left-0 right-0 top-0 z-50 flex justify-center">
      <dialog
        ref={dialogRef}
        className="relative flex h-auto w-4/5 justify-center "
        onClose={onDismiss}
      >
        {children}
        <button
          onClick={onDismiss}
          className="absolute right-3 top-3 border-2 border-primary text-primary"
        />
      </dialog>
    </div>,
    document.getElementById('modal-root')!,
  );
}
