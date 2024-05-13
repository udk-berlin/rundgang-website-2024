import { useState } from 'react';
import cx from 'classnames';
import { Link } from '@/navigation';

export type MenuMobileProps = {};
export type MobileMenuItemProps = {
  title: string;
  href: any;
  isTop: boolean;
  active: boolean;
};

const mobileMenuItems = [
  { title: 'Program', href: '/program', isTop: true, active: false },
];

function MobileMenuItem({ title, href, isTop, active }: MobileMenuItemProps) {
  return (
    <Link
      href={href}
      className={cx('w-full', isTop ? 'text-md' : 'text-default')}
    >
      {active ? '>' : ''}
      {title}
    </Link>
  );
}

function MenuPage() {
  return mobileMenuItems.map((item) => (
    <MobileMenuItem key={item.href} {...item} />
  ));
}

export default function MenuMobile({}: MenuMobileProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      onClick={() => setMenuOpen(!menuOpen)}
      className={cx(
        'hover:bg-highlight border border-primary bg-secondary hover:text-black',
        menuOpen ? 'rounded-t-md border-b-0' : 'rounded-md',
      )}
    >
      <div className="h-9 content-around text-center">
        {menuOpen ? <MenuPage /> : '='}
      </div>
    </div>
  );
}
