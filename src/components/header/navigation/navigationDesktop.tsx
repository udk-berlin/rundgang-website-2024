import { useTranslations } from 'next-intl';
import { ColorSchemePreference } from './colorSchemePreference';
import NavigationLink from '../../navigationLink';
import SavedItems from './savedItems';
import RundgangLogo from './rundgangLogo';
import LocaleSwitcher from './localeSwitcher';

export default function NavigationDesktop() {
  const t = useTranslations('Navigation');
  return (
    <nav className="hidden h-md w-screen grid-cols-5 overflow-hidden md:grid ">
      <NavigationLink href="/">
        <RundgangLogo />
      </NavigationLink>
      <NavigationLink href="/program">{t('program')}</NavigationLink>
      <NavigationLink href="/locations">{t('locations')}</NavigationLink>
      <NavigationLink href="/timeline">{t('timeline')}</NavigationLink>
      <div className="grid w-full grid-cols-headerinfo">
        <NavigationLink href="/info">{t('info')}</NavigationLink>
        <SavedItems />
        <LocaleSwitcher />
        <ColorSchemePreference />
      </div>
    </nav>
  );
}
