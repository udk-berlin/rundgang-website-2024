import { HtmlProps } from '@/components/html/html';
import { useTranslations } from 'next-intl';
import ToggleMute from './toggleMute.client';

export default function DesignContentHeader() {
  const t = useTranslations('Design');
  return (
    <DesignContentHeaderContainer>{t('title')}</DesignContentHeaderContainer>
  );
}

function DesignContentHeaderContainer({ children }: HtmlProps) {
  return (
    <div className="fixed  hidden h-header max-h-header min-h-header w-[80vw] bg-primary md:flex">
      <div className="border-b-xs border-r-xs flex h-full w-1/2 items-end justify-stretch rounded-border border-border border-t-0 border-primary bg-secondary px-[1.5rem] py-[0.5rem]">
        <h1 className="text-xxs text-grey">{children}</h1>
      </div>
      <ToggleMute />
    </div>
  );
}
