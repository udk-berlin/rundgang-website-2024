import InfoContentInfo from '@/app/info/components/content/info/info.server';
import { HtmlProps } from '@/components/html/html';
import InfoContentAbout from '@/app/info/components/content/about.server';

export default function InfoContent() {
  return (
    <InfoContentContainer>
      <InfoContentInfo />
      <InfoContentAbout />
    </InfoContentContainer>
  );
}

function InfoContentContainer({ children }: HtmlProps) {
  return (
    <div className="h-content-body max-h-content-body min-h-content-body border-x-border grid grid-cols-5 gap-border">
      {children}
    </div>
  );
}
