import { ReactNode } from 'react';
import LandingInfo from '@/app/(landing)/components/desktop/info/info.server';
import projects, { ProjectLanguages } from '@/projects';
import LandingFiltersGroupsHeaders from '@/app/(landing)/components/desktop/filters/groups/headers/headers.server';
import LandingProjectHandWriting from '@/app/(landing)/components/desktop/projectHandWriting.server';
import LandingFiltersGroups from '@/app/(landing)/components/desktop/filters/groups/groups.server';

export type LandingProps = {
  searchParams?: {
    lang: ProjectLanguages;
  };
};

export default function Landing({ searchParams }: LandingProps) {
  const language = extractProjectLanguageSearchParam(searchParams);
  return (
    <LandingContainer>
      <div
        key="top"
        className="relative min-h-fit grow rounded-tr-border border-x-border bg-secondary"
      >
        <LandingProjectHandWriting
          key="project-writing-desktop"
          language={language}
        />
        <LandingInfo key="info" language={language} />
      </div>
      <LandingFiltersGroupsHeaders key="filters-groups-headers" />
      <LandingFiltersGroups key="bottom" />
    </LandingContainer>
  );
}

function LandingContainer({ children }: { children: ReactNode }) {
  return (
    <main className="hidden h-content max-h-content min-h-content flex-col overflow-y-auto bg-primary md:flex">
      {children}
    </main>
  );
}

export function extractProjectLanguageSearchParam(
  searchParams: LandingProps['searchParams'],
) {
  const languages = Object.keys(projects);
  if (searchParams?.lang) {
    return searchParams.lang;
  }
  const number = Math.floor(Math.random() * languages.length);
  return languages[number] as ProjectLanguages;
}
