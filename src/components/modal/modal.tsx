'use client';

import { type ElementRef, useEffect, useRef, useCallback } from 'react';
import { usePathname, useRouter } from '@/navigation';
import cx from 'classnames';
import { createPortal } from 'react-dom';
import SmoothButton from '@/components/smoothButton';
import Cross from '../icons/cross';

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
        className={cx(
          'animate-showModal fixed bottom-0 left-0 z-50 h-modal w-1/3',
          margin,
        )}
        onClose={onDismiss}
      >
        <div className="absolute right-0 top-0 border-r-2 border-primary p-8 text-primary">
          <SmoothButton onClick={onDismiss} top>
            <Cross className="w-gridcell h-gridcell rotate-45 p-2" />
          </SmoothButton>
        </div>
        {children}
      </dialog>
    </div>,
    document.getElementById('modal-root')!,
  );
}
