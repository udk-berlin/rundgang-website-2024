import { useAppStore } from '@/lib/useAppContext';
import cx from 'classnames';
import { Link } from '@/navigation';
import { ColorSchemeSwitcher } from '../colorSchemeSwitcher';
import SmoothButton from '@/components/smoothbutton';

export type MenuMobileProps = {};
export type MobileMenuItemProps = {
  title: string | number;
  href: any;
  isTop?: boolean;
  active?: boolean;
};

const mobileMenuItems = [
  { title: 'Program', href: '/program', isTop: true, active: false },
  { title: 'Locations', href: '/locations', isTop: true, active: false },
  { title: 'Timeline', href: '/timeline', isTop: true, active: false },
  { title: 'Contact', href: '/contact', isTop: false, active: false },
  { title: 'Imprint', href: '/imprint', isTop: false, active: false },
  { title: 'Design', href: '/design', isTop: false, active: false },
];

export default function HeaderNavigationMobileMenu({}: MenuMobileProps) {
  const setMenuOpen = useAppStore((state) => state.setMenuOpen);
  const menuOpen = useAppStore((state) => state.menuOpen);
  const numberSaved = useAppStore((state) => state.savedItems.length);
  return (
    <div
      className={cx(
        'fixed left-0 top-[40px] h-screen w-full content-around bg-secondary text-center text-primary',
        menuOpen ? 'rounded-t-md border-b-0' : 'rounded-md',
      )}
    >
      <SmoothButton onButtonClick={setMenuOpen} color="primary" top>
        <div
          className={cx(
            'rotate-45 text-[30px] text-secondary transition-transform ease-in group-hover:text-secondary',
          )}
        >
          +
        </div>
      </SmoothButton>
      {mobileMenuItems.map((item) => (
        <MobileMenuItem key={item.href} {...item} />
      ))}
      <MobileMenuItem
        key="/saved"
        title={`saved: ${numberSaved}`}
        href="/saved"
      />
      <div className="m-auto my-gutter-sm h-10 w-10">
        <ColorSchemeSwitcher />
      </div>
    </div>
  );
}

function MobileMenuItem({
  title,
  href,
  isTop = true,
  active = false,
}: MobileMenuItemProps) {
  return (
    <Link href={href}>
      <div
        className={cx(
          'w-full py-gutter-sm',
          isTop ? 'text-md' : 'text-default',
        )}
      >
        {active ? '>' : ''}
        {title}
      </div>
    </Link>
  );
}
