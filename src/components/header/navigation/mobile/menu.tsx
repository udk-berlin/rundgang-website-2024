import cx from 'classnames';
import { Link } from '@/navigation';
import ColorSchemeSwitcher from '../colorSchemeSwitcher';
import SmoothButton from '@/components/smoothButton';
import { useStore } from 'zustand';
import { useUIStore } from '@/lib/uiStore';
import LocaleSwitcher from './localeSwitcher';
import { useIsActive } from '@/lib/useLinkActive';

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
  return (
    <dialog
      open={menuOpen}
      className={cx(
        'animate-showMenu fixed left-0 top-header flex h-content w-full flex-col justify-between rounded-md border-b-0 bg-secondary pt-header text-center text-primary',
      )}
      onClick={toggleMenuOpen}
    >
      <SmoothButton onClick={toggleMenuOpen} color="primary" top>
        <div className={cx('rotate-45 text-[30px] text-secondary')}>+</div>
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
