import { HtmlProps } from '@/components/html/html';
import { ResponsiveMultiLineText } from '@/components/texts/multiLine';
import { infoAbout } from '@/data';
import { ResponsiveH1 } from '@/components/html/h1';
import { useTranslations } from 'next-intl';

export default function InfoContentAbout() {
  const t = useTranslations('Info');
  return (
    <InfoContentAboutContainer>
      <ResponsiveH1 className="mb-gutter-xs text-grey md:hidden" textSize="xs">
        {t('about')}
      </ResponsiveH1>
      <ResponsiveMultiLineText text={t.raw('abouttext')} textSize="m" />
      <ResponsiveH1
        className="mt-auto pb-gutter-xs pt-gutter-lg text-grey md:hidden"
        textSize="xs"
      >
        {t('information')}
      </ResponsiveH1>
    </InfoContentAboutContainer>
  );
}

function InfoContentAboutContainer({ children }: HtmlProps) {
  return (
    <div className="h-fit rounded-b-border rounded-tl-border bg-secondary px-gutter-m pt-gutter-lg md:col-span-2 md:h-content-body md:max-h-content-body md:min-h-content-body md:overflow-y-scroll md:rounded-border md:px-gutter-m md:py-gutter-lg">
      {children}
    </div>
  );
}
