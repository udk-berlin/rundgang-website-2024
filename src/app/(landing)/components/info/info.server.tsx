import { ReactNode } from 'react';
import LandingInfoTitle from '@/app/(landing)/components/info/title.server';
import LandingInfoProject from '@/app/(landing)/components/info/project/project.server';

export default function LandingInfo() {
  return (
    <LandingInfoContainer>
      <div />
      <LandingInfoTitle />
      <LandingInfoProject />
    </LandingInfoContainer>
  );
}

function LandingInfoContainer({ children }: { children: ReactNode }) {
  return (
    <div className="bottom-gutter-lg desktop:bottom-dektop-gutter-lg absolute grid w-screen grid-cols-[1fr_8fr_1fr] px-[calc(var(--border)+0.5*var(--gutter-lg))]">
      {children}
    </div>
  );
}
