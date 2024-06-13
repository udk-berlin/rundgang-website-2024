import { ReactNode } from 'react';
import LandingFilters from '@/app/(landing)/components/filters/filters.server';
import { LandingPageProps } from '@/app/page';
import LandingWriting from '@/app/(landing)/components/writing';
import LandingInfo from '@/app/(landing)/components/info/info.server';
import projects, { ProjectLanguages } from '@/projects';

export type LandingProps = {
  searchParams?: {
    lang: ProjectLanguages;
    [key: string]: string | string[] | undefined;
  };
};

const getLanguage = (searchParams: LandingProps['searchParams']) => {
  const languages = Object.keys(projects);
  if (searchParams?.lang) {
    return searchParams.lang;
  }
  const number = Math.floor(Math.random() * languages.length);
  return languages[number] as ProjectLanguages;
};

export default function Landing({ searchParams }: LandingProps) {
  const lang = getLanguage(searchParams);
  return (
    <LandingContainer>
      <div className="relative grow-[1]">
        <LandingWriting lang={lang} />
        <LandingInfo lang={lang} />
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
