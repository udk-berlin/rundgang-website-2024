import { ReactNode } from 'react';
import LandingFilters from '@/app/(landing)/components/filters/filters.server';
import LandingInfo from '@/app/(landing)/components/info/info.server';
import projects, { ProjectLanguages } from '@/projects';
import LandingProjectWriting from '@/app/(landing)/components/project/writing';

export type LandingProps = {
  searchParams?: {
    lang: ProjectLanguages;
  };
};

export default function Landing({ searchParams }: LandingProps) {
  const projectLanguageSearchParam =
    extractProjectLanguageSearchParam(searchParams);
  return (
    <LandingContainer>
      <div className="relative grow-[1]">
        <LandingProjectWriting
          languageSearchParam={projectLanguageSearchParam}
        />
        <LandingInfo projectLanguageSearchParam={projectLanguageSearchParam} />
      </div>
      <LandingFilters />
    </LandingContainer>
  );
}

function LandingContainer({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-[calc(100vh-var(--height-footer)-var(--height-footer))] max-h-[calc(100vh-var(--footer-height)-var(--footer-height))] min-h-[calc(100vh-var(--footer-height)-var(--footer-height))] flex-col">
      {children}
    </main>
  );
}

const extractProjectLanguageSearchParam = (
  searchParams: LandingProps['searchParams'],
) => {
  const languages = Object.keys(projects);
  if (searchParams?.lang) {
    return searchParams.lang;
  }
  const number = Math.floor(Math.random() * languages.length);
  return languages[number] as ProjectLanguages;
};
