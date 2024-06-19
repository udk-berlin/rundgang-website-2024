import { useTranslations } from 'next-intl';
import NavigationLink from '../navigationLink';
import { HtmlProps } from '@/components/html/html';

export default function Footer() {
  const t = useTranslations('Navigation');
  return (
    <FooterContainer>
      <NavigationLink href="/contact" isFooter>
        {t('contact')}
      </NavigationLink>
      <NavigationLink href="/imprint" isFooter>
        {t('imprint')}
      </NavigationLink>
      <NavigationLink href="/design" isFooter>
        {t('design')}
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
