import { HtmlProps } from '@/components/html/html';
import { useTranslations } from 'next-intl';

export default function DesignSidebarText() {
  const t = useTranslations('design.description');
  return <DesignSidebarTextContainer>{t('text')}</DesignSidebarTextContainer>;
}

function DesignSidebarTextContainer({ children }: HtmlProps) {
  return (
    <div className="text-s p-[1.5rem] text-secondary md:text-primary">
      {children}
    </div>
  );
}
