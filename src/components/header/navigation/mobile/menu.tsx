import cx from 'classnames';
import { Link } from '@/navigation';
import ColorSchemeSwitcher from '../colorSchemeSwitcher';
import SmoothButton from '@/components/smoothButton';
import { useStore } from 'zustand';
import { useUIStore } from '@/lib/uiStore';
import LocaleSwitcher from './localeSwitcher';
import { useIsActive } from '@/lib/useLinkActive';
import { useCallback, useEffect, useState } from 'react';

export type MenuMobileProps = {
  menuOpen: boolean;
  toggleMenuOpen: () => void;
};
export type MobileMenuItemProps = {
  title: string | number;
  href: any;
  isTop?: boolean;
  active?: boolean;
};

const headerItems = [
  { title: 'Program', href: '/program' },
  { title: 'Locations', href: '/locations' },
  { title: 'Timeline', href: '/timeline' },
];
const footerItems = [
  { title: 'Contact', href: '/contact' },
  { title: 'Imprint', href: '/imprint' },
  { title: 'Design', href: '/design' },
];

export default function HeaderNavigationMobileMenu({
  menuOpen,
  toggleMenuOpen,
}: MenuMobileProps) {
  const numberSaved = useStore(useUIStore, (state) => state.savedItems.length);
  const [showContent, setShowContent] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      setTimeout(() => setShowContent(true), 800);
    }
  }, [menuOpen]);

  const onDismiss = useCallback(() => {
    setShowContent(false);
    setIsClosed(true);
    setTimeout(() => toggleMenuOpen(), 800);
  }, [toggleMenuOpen]);

  return (
    <dialog
      open={menuOpen}
      className={cx(
        'fixed left-0 top-header h-content w-full rounded-md border-x-border border-b-0 bg-secondary pt-header text-center',
        isClosed ? 'animate-closeMenu' : 'animate-showMenu',
      )}
      onClick={onDismiss}
    >
      <div
        className={cx(
          'flex h-full flex-col justify-between transition-opacity',
          showContent ? 'opacity-100' : 'opacity-0',
        )}
      >
        <SmoothButton onClick={onDismiss} color="primary" top>
          <div className="rotate-45 text-[30px] text-secondary">+</div>
        </SmoothButton>
        <div className="flex-grow-2">
          {headerItems.map((item) => (
            <MobileMenuItem key={item.href} {...item} isTop />
          ))}
        </div>
        <div className="flex-grow-2">
          {footerItems.map((item) => (
            <MobileMenuItem key={item.href} {...item} />
          ))}
        </div>
        <LocaleSwitcher />
        <div className="flex w-full flex-shrink items-center justify-center">
          <Link href="/saved">
            <div className="flex h-header w-header items-center justify-center rounded-md bg-highlight pt-[3px] text-lg font-bold text-black">
              {numberSaved}
            </div>
          </Link>
        </div>
        <div className="flex w-full justify-center">
          <div className="h-header w-header rounded-t-md border-border border-primary">
            <ColorSchemeSwitcher />
          </div>
        </div>
      </div>
    </dialog>
  );
}

function MobileMenuItem({ title, href, isTop = false }: MobileMenuItemProps) {
  const isActive = useIsActive(href);
  return (
    <Link href={href}>
      <div
        className={cx(
          'w-full py-gutter-sm',
          isTop ? 'text-lg font-bold' : 'text-md',
        )}
      >
        {isActive ? '>' : ''}
        {title}
      </div>
    </Link>
  );
}
