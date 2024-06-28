'use client';

import { type ElementRef, useEffect, useRef, useCallback } from 'react';
import { usePathname, useRouter } from '@/navigation';
import cx from 'classnames';
import { createPortal } from 'react-dom';
import SmoothButton from '../smoothbutton';

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);
  const path = usePathname();
  const margin = path == '/imprint' ? '' : 'm-0';

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.show();
    }
  }, []);

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  return createPortal(
    <div className="fixed bottom-0 left-0 z-50">
      <dialog
        ref={dialogRef}
        className={cx('h-modal fixed bottom-0 left-0 z-50 w-1/3', margin)}
        onClose={onDismiss}
      >
        <div className="absolute right-0 top-0 p-8 text-primary">
          <SmoothButton onButtonClick={onDismiss} top>
            <div className="rotate-45 text-lg text-primary hover:text-black">
              +
            </div>
          </SmoothButton>
        </div>
        {children}
      </dialog>
    </div>,
    document.getElementById('modal-root')!,
  );
}
