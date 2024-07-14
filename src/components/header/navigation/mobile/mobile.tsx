'use client';

import cx from 'classnames';
import NavigationLink from '@/components/navigationLink';
import RundgangLogo from '@/components/header/navigation/rundgangLogo';
import HeaderNavigationMobileMenu from '@/components/header/navigation/mobile/menu';
import { useCallback, useEffect, useState } from 'react';
import { usePathname } from '@/navigation';
import MenuBurger from '@/components/icons/menu';
import SavedItems from '@/components/header/navigation/savedItems';

export default function HeaderNavigationMobile() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const toggleMenuOpen = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [menuOpen]);

  return (
    <div className="z-50 flex overflow-hidden md:hidden">
      <nav className="grid h-header w-screen grid-cols-3">
        <NavigationLink href="/" isFirst>
          <RundgangLogo />
        </NavigationLink>
        <button
          onClick={toggleMenuOpen}
          className={cx(
            'border-x-xs border-t-border border-primary bg-secondary hover:bg-highlight hover:text-primary',
            menuOpen
              ? 'rounded-t-md border-b-secondary pb-border'
              : 'rounded-border border-b-border',
          )}
        >
          <div className="h-4 justify-center text-center">
            <MenuBurger />
          </div>
        </button>
        <SavedItems isLast />
      </nav>
      {menuOpen && (
        <HeaderNavigationMobileMenu
          toggleMenuOpen={toggleMenuOpen}
          menuOpen={menuOpen}
        />
      )}
    </div>
  );
}
