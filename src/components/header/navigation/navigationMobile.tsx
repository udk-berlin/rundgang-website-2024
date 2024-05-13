import { useTranslations } from 'next-intl';
import { useState } from 'react';
import cx from 'classnames';
import NavigationLink from '../../navigationLink';
import MenuMobile from './mobileMenu/menuMobile';
import RundgangLogo from './rundgangLogo';

export default function NavigationMobile() {
  const t = useTranslations('Navigation');
  const [menuOpen, setMenuOpen] = useState(false); // make global state

  return (
    <div className="hidden overflow-hidden md:flex">
      <nav className="grid h-10 w-screen grid-cols-3">
        <NavigationLink href="/">
          <RundgangLogo />
        </NavigationLink>
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className={cx(
            'border border-primary bg-secondary hover:bg-highlight hover:text-black',
            menuOpen ? 'rounded-t-md border-b-0' : 'rounded-md',
          )}
        >
          <div className="h-9 content-around text-center">{'='}</div>
        </div>
        <NavigationLink href="/info">{t('info')}</NavigationLink>
      </nav>
    </div>
  );
}
