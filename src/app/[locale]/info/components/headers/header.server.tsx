import { ResponsiveH1 } from '@/components/html/h1';
import { HtmlProps } from '@/components/html/html';
import { cn } from '@/lib/utils';
import {useTranslations} from "next-intl";

export type InfoHeaderProps = {
  className?: string;
  translation: 'about' | 'information';
};

export default function InfoHeader({ className, translation }: InfoHeaderProps) {
  const t = useTranslations('Info');
  return (
    <InfoHeaderContainer className={className}>{t(translation)}</InfoHeaderContainer>
  );
}

function InfoHeaderContainer({ className, children }: HtmlProps) {
  return (
    <ResponsiveH1
      className={cn(
        'px-gutter-m pb-gutter-xs col-span-2 flex items-end text-grey',
        className,
      )}
      textSize="xs"
    >
      {children}
    </ResponsiveH1>
  );
}
