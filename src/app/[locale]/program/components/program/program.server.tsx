import { ReactNodeProps } from '@/types/types';
import JumpToTop from '@/components/jumpToTop';
import { Item } from '@/types/item';
import SidebarToggleButton from '@/app/program/components/sidebar/toggle/button.client';
import ProgramProjectsContainer from '@/app/program/components/program/projects/container.server';
import ProgramProjects from '@/app/program/components/program/projects/projects.server';
import ProgramMovableContentContainer from '@/app/program/components/program/container.client';

export type ProgramProps = {
  items: Item[];
};

export default function Program({ items }: ProgramProps) {
  return (
    <ProgramContainer>
      <SidebarToggleButton />
      <div className="h-content-body max-h-content-body min-h-content-body w-full overflow-y-auto overflow-x-hidden">
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
    <ProgramMovableContentContainer>
      <div className="h-content-header max-h-content-header min-h-content-header bg-secondary" />
      {children}
    </ProgramMovableContentContainer>
  );
}
