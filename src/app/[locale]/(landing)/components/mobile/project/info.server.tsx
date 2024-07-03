import { ReactNode } from 'react';
import projects from '@/projects';
import { LandingInfoProps } from '@/app/(landing)/components/desktop/info/info.server';
import AudioPlayer from '@/app/(landing)/components/audioPlayer';

export default function LandingProjectInfo({ language }: LandingInfoProps) {
  const project = projects[language];
  return (
    <LandingProjectInfoContainer>
      <div className="pb-gutter-sm text-xs">
        <p>{project.artist}</p>
        <p>{project.language.name}</p>
        <p>{project.subject}</p>
        <p>{project.faculty}</p>
      </div>
      <AudioPlayer language={language} />
    </LandingProjectInfoContainer>
  );
}

function LandingProjectInfoContainer({ children }: { children: ReactNode }) {
  return <div className="p-gutter-md">{children}</div>;
}
