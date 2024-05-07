'use client';
import { useTranslations } from 'next-intl';
import NavigationLink from '../navigationLink';

export default function Footer() {
  const t = useTranslations('Navigation');
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 w-screen bg-primary">
      <div className="grid w-screen grid-cols-footer overflow-hidden">
        <NavigationLink href="/contact" isFooter>
          {t('contact')}
        </NavigationLink>
        <NavigationLink href="/imprint" isFooter>
          {t('imprint')}
        </NavigationLink>
        <NavigationLink href="/design" isFooter>
          {t('design')}
        </NavigationLink>
      </div>
    </div>
  );
}
