'use client';
import { useTranslations } from 'next-intl';
import cx from 'classnames';
import NavigationLink from '@/components/navigationLink';
import RundgangLogo from '@/components/header/navigation/rundgangLogo';
import HeaderNavigationMobileMenu from '@/components/header/navigation/mobile/menu';
import { useCallback, useEffect, useState } from 'react';
import { usePathname } from '@/navigation';
export default function HeaderNavigationMobile() {
  const t = useTranslations('Navigation');
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
            'mx-xs my-border justify-center bg-secondary hover:bg-highlight hover:text-black',
            menuOpen ? 'mb-0 rounded-t-border' : 'rounded-border',
          )}
        >
          <div className="justify-center text-center">=</div>
        </button>
        <NavigationLink href="/info" isLast>
          {t('info')}
        </NavigationLink>
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
