import { useTranslations } from 'next-intl';

import { HtmlProps } from '@/components/html/html';
import NavigationLink from '@/components/navigationLink';
import RundgangLogo from '@/components/header/navigation/rundgangLogo';
import SavedItems from '@/components/header/navigation/savedItems';
import LocaleSwitcher from '@/components/header/navigation/localeSwitcher';
import ColorSchemeSwitcher from '@/components/header/navigation/colorSchemeSwitcher';

export default function HeaderNavigationDesktop() {
  const t = useTranslations('Navigation');
  return (
    <NavigationDesktopContainer>
      <NavigationLink href="/">
        <RundgangLogo />
      </NavigationLink>
      <NavigationLink href="/program">{t('program')}</NavigationLink>
      <NavigationLink href="/locations">{t('locations')}</NavigationLink>
      <NavigationLink href="/timeline">{t('timeline')}</NavigationLink>
      <NavigationLink href="/info">{t('info')}</NavigationLink>
      <SavedItems />
      <LocaleSwitcher />
      <ColorSchemeSwitcher />
    </NavigationDesktopContainer>
  );
}

function NavigationDesktopContainer({ children }: HtmlProps) {
  return (
    <nav className="hidden h-header w-full grid-cols-header md:grid">
      {children}
    </nav>
  );
}
