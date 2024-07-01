import InfoContentInfo from '@/app/info/components/content/info/info.server';
import { HtmlProps } from '@/components/html/html';
import InfoContentAbout from '@/app/info/components/content/about.server';

export default function InfoContent() {
  return (
    <InfoContentContainer>
      <InfoContentAbout />
      <InfoContentInfo />
    </InfoContentContainer>
  );
}

function InfoContentContainer({ children }: HtmlProps) {
  return (
    <div className="wrap grid h-content max-h-content min-h-content grid-cols-1 gap-border overflow-y-auto border-x-border md:h-content-body md:max-h-content-body md:min-h-content-body md:grid-cols-5 md:overflow-hidden">
      {children}
    </div>
  );
}
