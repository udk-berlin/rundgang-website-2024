import { HtmlProps } from '@/components/html/html';
import { ResponsiveMultiLineText } from '@/components/texts/multiLine';
import { infoAbout } from '@/data';

export default function InfoContentAbout() {
  return (
    <InfoContentAboutContainer>
      <ResponsiveMultiLineText text={infoAbout.en} textSize="md" />
    </InfoContentAboutContainer>
  );
}

function InfoContentAboutContainer({ children }: HtmlProps) {
  return (
    <div className="col-span-2 h-content-body max-h-content-body min-h-content-body overflow-y-scroll rounded-md bg-secondary p-gutter-lg">
      {children}
    </div>
  );
}
