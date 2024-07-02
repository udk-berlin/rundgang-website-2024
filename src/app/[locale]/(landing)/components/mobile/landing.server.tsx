import { ReactNode } from 'react';
import { ProjectLanguages } from '@/projects';
import { extractProjectLanguageSearchParam } from '@/app/(landing)/components/desktop/landing.server';
import LandingTitle from '@/app/(landing)/components/mobile/title.server';
import SidebarToggle from '@/app/(landing)/components/mobile/sidebar/toggle.client';
import SidebarContainer from '@/app/(landing)/components/mobile/sidebar/container.client';
import LandingProjectInfo from '@/app/(landing)/components/mobile/project/info.server';
import LandingProjectHandwriting from '@/app/(landing)/components/mobile/project/handwriting.server';
import LandingSidebar from '@/app/(landing)/components/mobile/sidebar/sidebar.server';

export type LandingProps = {
  searchParams?: {
    lang: ProjectLanguages;
  };
};

export default function Landing({ searchParams }: LandingProps) {
  const language = extractProjectLanguageSearchParam(searchParams);

  return (
    <LandingContainer>
      <div className="relative col-span-3">
        <SidebarToggle />
        <div className="relative flex h-content max-h-content min-h-content w-full flex-col justify-between overflow-y-auto rounded-b-border rounded-tr-border border-x-border bg-secondary">
          <LandingProjectInfo language={language} />
          <LandingProjectHandwriting language={language} />
          <LandingTitle />
        </div>
      </div>
      <LandingSidebar />
    </LandingContainer>
  );
}

function LandingContainer({ children }: { children: ReactNode }) {
  return (
    <main className="relative bg-primary md:hidden">
      <SidebarContainer>{children}</SidebarContainer>
    </main>
  );
}
