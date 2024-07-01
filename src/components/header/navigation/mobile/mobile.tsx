'use client';
import { useTranslations } from 'next-intl';
import cx from 'classnames';
import NavigationLink from '@/components/navigationLink';
import RundgangLogo from '@/components/header/navigation/rundgangLogo';
import HeaderNavigationMobileMenu from '@/components/header/navigation/mobile/menu';
import { useCallback, useState } from 'react';
export default function HeaderNavigationMobile() {
  const t = useTranslations('Navigation');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [menuOpen]);

  return (
    <div className="flex overflow-hidden md:hidden">
      <nav className="grid h-header w-screen grid-cols-3">
        <NavigationLink href="/" isFirst>
          <RundgangLogo />
        </NavigationLink>
        <button
          onClick={toggleMenuOpen}
          className={cx(
            'mx-xs my-border content-around bg-secondary hover:bg-highlight hover:text-black',
            menuOpen ? 'mb-0 rounded-t-border' : 'rounded-border',
          )}
        >
          <div className="content-around text-center">=</div>
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
