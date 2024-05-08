import { ReactNode } from 'react';
import LandingInfoTitle from '@/app/landing/components/info/title.server';
import LandingInfoProject from '@/app/landing/components/info/project.server';

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
    <div className="mb-[50px] mt-auto grid grid-cols-[auto_max-content_auto] px-[20px]">
      {children}
    </div>
  );
}
