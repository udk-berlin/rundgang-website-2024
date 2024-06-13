import { ReactNode } from 'react';
import LandingInfoProjectSound from '@/app/(landing)/components/info/project/sound.client';
import { ResponsiveDiv } from '@/components/html/div';
import projects, { ProjectLanguages } from '@/projects';

export default function LandingInfoProject({
  lang,
}: {
  lang: ProjectLanguages;
}) {
  const project = projects[lang];
  return (
    <LandingInfoProjectContainer>
      <LandingInfoProjectSound lang={lang} />
      <ResponsiveDiv className="text-right text-grey" textSize="xs">
        <p>{project.artist}</p>
        <p>{project.language}</p>
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
