'use client';
import { useTranslations } from 'next-intl';
import cx from 'classnames';
import { useAppStore } from '@/lib/useAppContext';
import NavigationLink from '@/components/navigationLink';
import RundgangLogo from '@/components/header/navigation/rundgangLogo';
import HeaderNavigationMobileMenu from '@/components/header/navigation/mobile/menu';

export default function HeaderNavigationMobile() {
  const t = useTranslations('Navigation');
  const setMenuOpen = useAppStore((state) => state.setMenuOpen);
  const menuOpen = useAppStore((state) => state.menuOpen);

  return (
    <div className="flex overflow-hidden md:hidden">
      <nav className="grid grid-cols-3 h-header w-screen">
        <NavigationLink href="/" isFirst>
          <RundgangLogo />
        </NavigationLink>
        <div
          onClick={setMenuOpen}
          className={cx(
            'bg-secondary hover:bg-highlight hover:text-black mx-[1px] my-border content-around',
            menuOpen ? 'rounded-t-border mb-0' : 'rounded-border',
          )}
        >
          <div className="content-around text-center">=</div>
        </div>
        <NavigationLink href="/info" isLast>{t('info')}</NavigationLink>
      </nav>
      {menuOpen && <HeaderNavigationMobileMenu />}
    </div>
  );
}
