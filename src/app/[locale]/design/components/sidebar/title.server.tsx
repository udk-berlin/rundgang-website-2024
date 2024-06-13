import { HtmlProps } from '@/components/html/html';
import { useTranslations } from 'next-intl';

export default function DesignSidebarTitle() {
  const t = useTranslations('design.description');
  return (
    <DesignSidebarTitleContainer>{t('title')}</DesignSidebarTitleContainer>
  );
}

function DesignSidebarTitleContainer({ children }: HtmlProps) {
  return (
    <div className="h-header min-h-header max-h-header flex items-end px-[1.5rem] py-[0.5rem] text-xxs text-grey">
      {children}
    </div>
  );
}
