import Project from '@/app/project/[id]/components/project.server';
import { Item } from '@/types/item';
import { ReactNodeProps } from '@/types/types';

export type ProjectsPageProps = {
  item: Item;
};

export default function ProgramSelectedProject({ item }: ProjectsPageProps) {
  return (
    <ProgramSelectedProjectContainer>
      <Project item={item} withCloseOption />
    </ProgramSelectedProjectContainer>
  );
}

function ProgramSelectedProjectContainer({ children }: ReactNodeProps) {
  return (
    <div className="order-3 col-span-2 w-full md:col-span-1">
      <div className="fixed mt-content-header h-content-body max-h-content-body min-h-content-body w-[40vw] overflow-y-scroll bg-primary md:w-[40vw]">
        {children}
      </div>
    </div>
  );
}
