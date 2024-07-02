import { useTranslations } from 'next-intl';

import { HtmlProps } from '@/components/html/html';
import NavigationLink from '@/components/navigationLink';
import RundgangLogo from '@/components/header/navigation/rundgangLogo';
import SavedItems from '@/components/header/navigation/desktop/savedItems';
import LocaleSwitcher from '@/components/header/navigation/desktop/localeSwitcher';
import ColorSchemeSwitcher from '@/components/header/navigation/colorSchemeSwitcher';

export default function HeaderNavigationDesktop() {
  const t = useTranslations('Navigation');
  return (
    <NavigationDesktopContainer>
      <NavigationLink href="/" isFirst noContentAround>
        <RundgangLogo />
      </NavigationLink>
      <NavigationLink href="/program">{t('program')}</NavigationLink>
      <NavigationLink href="/locations">{t('locations')}</NavigationLink>
      <NavigationLink href="/timeline">{t('timeline')}</NavigationLink>
      <div className="grid grid-cols-[1fr_50px_50px_50px]">
        <NavigationLink href="/info">{t('info')}</NavigationLink>
        <SavedItems />
        <LocaleSwitcher />
        <ColorSchemeSwitcher />
      </div>
    </NavigationDesktopContainer>
  );
}

function NavigationDesktopContainer({ children }: HtmlProps) {
  return <nav className="hidden h-header grid-cols-5 md:grid">{children}</nav>;
}
