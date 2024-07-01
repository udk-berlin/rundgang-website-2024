'use server';
import { ReactNodeProps } from '@/types/types';
import JumpToTop from '@/components/jumpToTop';
import { Item } from '@/types/item';
import ProgramProjects from '@/app/program/components/projects/projects.server';
import SidebarToggle from '@/app/program/components/sidebarToggle.client';
import ProgramProjectsContainer from '@/app/program/components/projects/container.server';
import ProgramLayoutMovableContentContainer from '@/app/program/components/container.client';

export type ProgramProps = {
  items: Item[];
};

export default async function Program({ items }: ProgramProps) {
  return (
    <ProgramContainer>
      <SidebarToggle />
      <div className="h-content-body max-h-content-body min-h-content-body w-full overflow-y-auto border-r-border border-r-primary">
        <ProgramProjectsContainer>
          <ProgramProjects projects={items} />
        </ProgramProjectsContainer>
        <JumpToTop />
      </div>
    </ProgramContainer>
  );
}

function ProgramContainer({ children }: ReactNodeProps) {
  return (
    <ProgramLayoutMovableContentContainer>
      <div className="h-content-header max-h-content-header min-h-content-header" />
      {children}
    </ProgramLayoutMovableContentContainer>
  );
}
