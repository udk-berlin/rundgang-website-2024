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
import SmoothButton from '@/components/smoothButton';
import Cross from '../icons/cross';

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);
  const path = usePathname();

  const isActive = ['/imprint', '/contact'].includes(path);
  const margin = path == '/imprint' ? '' : 'm-0';
  const [isClosed, setIsClosed] = useState(false);
  const animation = isClosed
    ? 'sm:animate-hideModal animate-closeMenu'
    : 'sm:animate-showModal animate-showMenu';

  useEffect(() => {
    if (isClosed && isActive) {
      const timer = setTimeout(() => {
        if (history.length > 0) {
          router.back();
        } else {
          router.push('/');
        }
      }, 750);
      return () => {
        setIsClosed(false);
        clearTimeout(timer);
      };
    }
  }, [isClosed, isActive, router]);

  const onDismiss = useCallback(() => {
    setIsClosed(true);
  }, []);

  return (
    isActive && (
      <div
        className="fixed bottom-footer left-0 z-50 h-content w-full overflow-hidden backdrop-blur-sm"
        onClick={onDismiss}
      >
        <dialog
          ref={dialogRef}
          open={isActive}
          className={cx(
            'fixed bottom-0 left-0 z-50 overflow-x-hidden overflow-y-scroll overscroll-contain rounded-md border-x-border border-primary sm:w-1/3',
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
      </div>
    )
  );
}
