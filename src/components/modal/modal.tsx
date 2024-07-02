'use client';

import {
  type ElementRef,
  useEffect,
  useRef,
  useCallback,
  useState,
} from 'react';
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
  const [isClosed, setIsClosed] = useState(false);
  const animation = isClosed ? 'animate-hideModal' : 'animate-showModal';

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.show();
    }
  }, []);

  const onDismiss = useCallback(() => {
    setIsClosed(true);
    setTimeout(() => router.back(), 1000);
  }, [router]);

  return createPortal(
    <div className="fixed bottom-footer left-0 z-50 h-content w-full backdrop-blur-sm">
      <dialog
        ref={dialogRef}
        className={cx(
          'fixed bottom-0 left-0 z-50 overflow-y-scroll overscroll-contain rounded-md border-x-border border-primary sm:w-1/3',
          margin,
          animation,
        )}
        onClose={onDismiss}
      >
        <div className="absolute right-0 top-0 p-8 text-primary">
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
