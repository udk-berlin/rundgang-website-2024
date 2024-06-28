import { HtmlProps } from '@/components/html/html';
import { ResponsiveMultiLineText } from '@/components/texts/multiLine';
import { infoAbout } from '@/data';
import {ResponsiveH1} from "@/components/html/h1";
import {useTranslations} from "next-intl";

export default function InfoContentAbout() {
    const t = useTranslations('Info')
  return (
    <InfoContentAboutContainer>
      <ResponsiveH1 className="md:hidden text-grey mb-gutter-xs" textSize="xs">{t('about')}</ResponsiveH1>
      <ResponsiveMultiLineText text={infoAbout.en} textSize="m" />
      <ResponsiveH1 className="md:hidden text-grey mt-auto pt-gutter-lg pb-gutter-xs" textSize="xs">{t('information')}</ResponsiveH1>
    </InfoContentAboutContainer>
  );
}

function InfoContentAboutContainer({ children }: HtmlProps) {
  return (
    <div className="md:col-span-2 h-fit md:h-content-body md:max-h-content-body md:min-h-content-body md:overflow-y-scroll rounded-b-border rounded-tl-border md:rounded-border bg-secondary pt-gutter-lg px-gutter-m md:py-gutter-lg md:px-gutter-m">
      {children}
    </div>
  );
}
