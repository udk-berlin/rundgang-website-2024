import { HtmlProps } from '@/components/html/html';
import { useTranslations } from 'next-intl';

export default function DesignContentHeader() {
  const t = useTranslations('design');
  return (
    <DesignContentHeaderContainer>{t('title')}</DesignContentHeaderContainer>
  );
}

function DesignContentHeaderContainer({ children }: HtmlProps) {
  return (
    <div className="h-header max-h-header min-h-header fixed hidden w-[80vw] bg-primary md:inline-block">
      <div className="rounded-border border-border flex h-full items-end border-b-[1px] border-r-[1px] border-t-[1px] border-primary bg-secondary px-[1.5rem] py-[0.5rem]">
        <h1 className="text-xxs text-grey">{children}</h1>
      </div>
    </div>
  );
}
