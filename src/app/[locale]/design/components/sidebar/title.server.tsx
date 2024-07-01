import { HtmlProps } from '@/components/html/html';
import { useTranslations } from 'next-intl';

export default function DesignSidebarTitle() {
  const t = useTranslations('Design.description');
  return (
    <DesignSidebarTitleContainer>{t('title')}</DesignSidebarTitleContainer>
  );
}

function DesignSidebarTitleContainer({ children }: HtmlProps) {
  return (
    <div className="flex h-header max-h-header min-h-header items-end px-[1.5rem] py-[0.5rem] text-xxs text-grey">
      {children}
    </div>
  );
}
