import { HtmlProps } from '@/components/html/html';
import { ResponsiveMultiLineText } from '@/components/texts/multiLine';
import { infoAbout } from '@/data';

export default function InfoContentAbout() {
  return (
    <InfoContentAboutContainer>
      <ResponsiveMultiLineText text={infoAbout.en} textSize="lg" />
    </InfoContentAboutContainer>
  );
}

function InfoContentAboutContainer({ children }: HtmlProps) {
  return (
    <div className="p-gutter-md desktop:p-desktop-gutter-md col-span-3 h-[calc(100vh-3*var(--height-md)-3*var(--border))] max-h-[calc(100vh-3*var(--height-md)-3*var(--border))] min-h-[calc(100vh-3*var(--height-md)-3*var(--border))] overflow-y-scroll rounded-md bg-white">
      {children}
    </div>
  );
}
