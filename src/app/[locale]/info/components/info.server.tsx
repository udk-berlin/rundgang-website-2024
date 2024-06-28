import InfoHeaders from '@/app/info/components/headers/headers.server';
import InfoContent from '@/app/info/components/content/content.server';
import { HtmlProps } from '@/components/html/html';

export default function Info() {
  return (
    <InfoContainer>
      <InfoHeaders />
      <InfoContent />
    </InfoContainer>
  );
}

function InfoContainer({ children }: HtmlProps) {
  return (
    <main className="flex h-content max-h-content min-h-content flex-col overflow-hidden bg-primary">
      {children}
    </main>
  );
}
