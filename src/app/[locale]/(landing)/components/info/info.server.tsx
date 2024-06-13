import { ReactNode } from 'react';
import LandingInfoTitle from '@/app/(landing)/components/info/title.server';
import LandingInfoProject from '@/app/(landing)/components/info/project/project.server';
import { ProjectLanguages } from '@/projects';

export default function LandingInfo({ lang }: { lang: ProjectLanguages }) {
  return (
    <LandingInfoContainer>
      <div />
      <LandingInfoTitle />
      <LandingInfoProject lang={lang} />
    </LandingInfoContainer>
  );
}

function LandingInfoContainer({ children }: { children: ReactNode }) {
  return (
    <div className="absolute bottom-gutter-lg grid w-screen grid-cols-[1fr_8fr_1fr] px-[calc(var(--border)+0.5*var(--gutter-lg))]">
      {children}
    </div>
  );
}
