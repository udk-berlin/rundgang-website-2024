import cx from 'classnames';
import { Link } from '@/navigation';
import ColorSchemeSwitcher from '../colorSchemeSwitcher';
import SmoothButton from '@/components/smoothButton';
import { useStore } from 'zustand';
import { useUIStore } from '@/lib/stores/uiStore';
import LocaleSwitcher from './localeSwitcher';
import { useIsActive } from '@/lib/useLinkActive';
import { useCallback, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Cross from '@/components/icons/cross';

export type MenuMobileProps = {
  menuOpen: boolean;
  toggleMenuOpen: () => void;
};

const headerItems = [
  { title: 'program', href: '/program' },
  { title: 'locations', href: '/locations' },
  { title: 'timeline', href: '/timeline' },
] as const;
const footerItems = [
  { title: 'info', href: '/info' },
  { title: 'design', href: '/design' },
  { title: 'contact', href: '/contact' },
  { title: 'imprint', href: '/imprint' },
] as const;

export type MobileMenuItemProps = {
  title:
    | (typeof headerItems)[number]['title']
    | (typeof footerItems)[number]['title'];
  href: any;
  isTop?: boolean;
  active?: boolean;
};

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
        'fixed left-0 top-header h-content w-full border-x-border border-b-0 bg-secondary pt-header text-center text-primary',
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
        <SmoothButton
          className="!rounded-t-[0px]"
          onClick={onDismiss}
          color="primary"
          top
        >
          <Cross
            className="absolute top-0 z-40 h-content-header w-content-header rotate-45 p-gutter-sm"
            color="secondary"
          />
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
          <div className="h-header w-header">
            <ColorSchemeSwitcher />
          </div>
        </div>
      </div>
    </dialog>
  );
}

function MobileMenuItem({ title, href, isTop = false }: MobileMenuItemProps) {
  const isActive = useIsActive(href);
  const t = useTranslations('Navigation');
  return (
    <Link href={href}>
      <div
        className={cx(
          'w-full py-gutter-sm',
          isTop ? 'text-lg font-bold' : 'text-md',
        )}
      >
        {isActive ? '> ' : ''}
        {t(title)}
      </div>
    </Link>
  );
}
