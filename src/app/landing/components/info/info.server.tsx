import { ReactNode } from 'react';
import LandingInfoTitle from '@/app/landing/components/info/title.server';
import LandingInfoProject from '@/app/landing/components/info/project/project.server';

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
    <div className="absolute bottom-[50px] grid w-screen grid-cols-[1fr_8fr_1fr] px-[calc(var(--border)+25px)]">
      {children}
    </div>
  );
}
