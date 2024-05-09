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
    <main className="flex h-[calc(100vh-2*var(--height-md)-2*var(--border))] max-h-[calc(100vh-2*var(--height-md)-2*var(--border))] min-h-[calc(100vh-2*var(--height-md)-2*var(--border))] flex-col overflow-hidden bg-black">
      {children}
    </main>
  );
}
