import { useTranslations } from 'next-intl';
import NavigationLink from '../navigationLink';
import { HtmlProps } from '@/components/html/html';

export default function Footer() {
  const t = useTranslations('Navigation');
  return (
    <FooterContainer>
      <NavigationLink
        className="hidden sm:block"
        href="/contact"
        isFooter
        isFirst
      >
        {t('contact')}
      </NavigationLink>
      <NavigationLink
        className="block sm:hidden"
        href="/program"
        isFooter
        isFirst
      >
        {t('program')}
      </NavigationLink>
      <NavigationLink className="hidden sm:block" href="/imprint" isFooter>
        {t('imprint')}
      </NavigationLink>
      <NavigationLink className="block sm:hidden" href="/locations" isFooter>
        {t('locations')}
      </NavigationLink>
      <NavigationLink
        className="hidden sm:block"
        href="/design"
        isFooter
        isLast
      >
        {t('design')}
      </NavigationLink>
      <NavigationLink
        className="block sm:hidden"
        href="/timeline"
        isFooter
        isLast
      >
        {t('timeline')}
      </NavigationLink>
    </FooterContainer>
  );
}

function FooterContainer({ children }: HtmlProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 w-screen bg-primary">
      <div className="grid h-footer w-full grid-cols-3">{children}</div>
    </div>
  );
}
