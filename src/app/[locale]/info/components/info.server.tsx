import InfoHeaders from '@/app/info/components/headers/headers.server';
import InfoContent from '@/app/info/components/content/content.server';
import { ReactNodeProps } from '@/types/types';

export default function Info() {
  return (
    <InfoContainer>
      <InfoHeaders />
      <InfoContent />
    </InfoContainer>
  );
}

function InfoContainer({ children }: ReactNodeProps) {
  return (
    <main className="flex h-content max-h-content min-h-content flex-col overflow-hidden bg-primary">
      {children}
    </main>
  );
}
