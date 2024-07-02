import { ReactNode } from 'react';
import projects from '@/projects';
import LandingInfoProjectAudioPlayer from '@/app/(landing)/components/desktop/info/project/audioPlayer.client';
import { LandingInfoProps } from '@/app/(landing)/components/desktop/info/info.server';

export default function LandingInfoProject({ language }: LandingInfoProps) {
  const project = projects[language];
  return (
    <LandingInfoProjectContainer>
      <LandingInfoProjectAudioPlayer language={language} />
      <div className="text-right text-xs text-primary">
        <p>{project.artist}</p>
        <p>{project.language.name}</p>
        <p>{project.subject}</p>
        <p>{project.faculty}</p>
      </div>
    </LandingInfoProjectContainer>
  );
}

function LandingInfoProjectContainer({ children }: { children: ReactNode }) {
  return (
    <div className="ml-auto mt-auto">
      <div className="flex flex-col items-end gap-gutter-sm">{children}</div>
    </div>
  );
}
