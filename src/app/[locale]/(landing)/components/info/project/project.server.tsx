import { ReactNode } from 'react';
import { ResponsiveDiv } from '@/components/html/div';
import projects, { ProjectLanguages } from '@/projects';
import LandingInfoProjectAudioPlayer from '@/app/(landing)/components/info/project/audioPlayer.client';

export default function LandingInfoProject({
  languageSearchParam,
}: {
  languageSearchParam: ProjectLanguages;
}) {
  const project = projects[languageSearchParam];
  return (
    <LandingInfoProjectContainer>
      <LandingInfoProjectAudioPlayer
        languageSearchParam={languageSearchParam}
      />
      <ResponsiveDiv className="text-right text-grey" textSize="xs">
        <p>{project.artist}</p>
        <p>{project.language.name}</p>
        <p>{project.subject}</p>
        <p>{project.faculty}</p>
      </ResponsiveDiv>
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
