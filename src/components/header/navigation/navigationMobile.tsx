import { useTranslations } from 'next-intl';
import cx from 'classnames';
import NavigationLink from '../../navigationLink';
import MenuMobile from './mobileMenu/menuMobile';
import RundgangLogo from './rundgangLogo';
import { useAppStore } from '@/lib/useAppContext';

export default function NavigationMobile() {
  const t = useTranslations('Navigation');

  const setMenuOpen = useAppStore((state) => state.setMenuOpen);
  const menuOpen = useAppStore((state) => state.menuOpen);

  return (
    <div className="flex overflow-hidden md:hidden">
      <nav className="grid h-10 w-screen grid-cols-3">
        <NavigationLink href="/">
          <RundgangLogo />
        </NavigationLink>
        <div
          onClick={setMenuOpen}
          className={cx(
            'border border-primary bg-secondary hover:bg-highlight hover:text-black',
            menuOpen ? 'rounded-t-md border-b-0' : 'rounded-md',
          )}
        >
          <div className="h-9 content-around text-center">{'='}</div>
        </div>
        <NavigationLink href="/info">{t('info')}</NavigationLink>
      </nav>
      {menuOpen && <MenuMobile />}
    </div>
  );
}
