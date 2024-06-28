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
    <div className="h-content md:h-content-body max-h-content md:max-h-content-body min-h-content md:min-h-content-body border-x-border grid grid-cols-1 wrap md:grid-cols-5 gap-border overflow-y-scroll md:overflow-hidden">
      {children}
    </div>
  );
}
