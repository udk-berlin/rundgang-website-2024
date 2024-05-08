import { useTranslations } from 'next-intl';
import { ColorSchemePreference } from './colorSchemePreference';
import NavigationLink from '../../navigationLink';
import SavedItems from './savedItems';
import RundgangLogo from './rundgangLogo';
import LocaleSwitcher from './localeSwitcher';

export default function NavigationDesktop() {
  const t = useTranslations('Navigation');
  return (
    <nav className="grid w-screen grid-cols-5 overflow-hidden md:hidden">
      <NavigationLink href="/">
        <RundgangLogo logo="/public/media/rng.png" />
      </NavigationLink>
      <NavigationLink href="/program">{t('program')}</NavigationLink>
      <NavigationLink href="/locations">{t('locations')}</NavigationLink>
      <NavigationLink href="/timeline">{t('timeline')}</NavigationLink>
      <div className="grid-cols-headerinfo grid w-full">
        <NavigationLink href="/info">{t('info')}</NavigationLink>
        <SavedItems />
        <LocaleSwitcher />
        <ColorSchemePreference />
      </div>
    </nav>
  );
}
