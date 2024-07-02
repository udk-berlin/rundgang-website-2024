import { ReactNode } from 'react';
import LandingInfoTitle from '@/app/(landing)/components/desktop/info/title.client';
import LandingInfoProject from '@/app/(landing)/components/desktop/info/project/project.server';
import { ProjectLanguages } from '@/projects';

export type LandingInfoProps = {
  language: ProjectLanguages;
};

export default function LandingInfo({ language }: LandingInfoProps) {
  return (
    <LandingInfoContainer>
      <div />
      <LandingInfoTitle />
      <LandingInfoProject language={language} />
    </LandingInfoContainer>
  );
}

function LandingInfoContainer({ children }: { children: ReactNode }) {
  return (
    <div className="absolute bottom-gutter-m grid w-full grid-cols-[1fr_8fr_1fr] px-gutter-m">
      {children}
    </div>
  );
}
