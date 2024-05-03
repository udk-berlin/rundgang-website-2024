import { usePathname } from 'next/navigation';
import { useState } from 'react';
import cx from 'classnames';
import Link from 'next/link';
import NavigationItem from './navigationItem';
import MenuMobile from '../../mobileMenu/menuMobile';

const menuItems = [
  {
    href: '/',
    logo: '/media/rng',
    title: '',
  },
  {
    href: '/info',
    logo: '',
    title: 'Info',
  },
];

export default function NavigationMobile() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false); // make global state

  return (
    <div className="hidden overflow-hidden md:flex">
      <div className="grid h-10 w-screen grid-cols-3">
        <NavigationItem
          item={menuItems[0]}
          active={pathname == menuItems[0].href && !menuOpen}
        />
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className={cx(
            'border-2 border-primary bg-primarybg hover:bg-secondary hover:text-black',
            menuOpen ? 'rounded-t-md border-b-0' : 'rounded-md',
          )}
        >
          <div className="h-9 content-around text-center">{'='}</div>
        </div>
        <NavigationItem
          item={menuItems[1]}
          active={pathname == menuItems[1].href && !menuOpen}
        />
      </div>
    </div>
  );
}
