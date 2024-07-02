import { ReactNodeProps } from '@/types/types';
import { Item } from '@/types/item';
import ProjectDetailName from '@/components/project/detail/name.server';
import ProjectDetailAuthors from '@/components/project/detail/authors.server';
import ProjectDetailDescriptions from '@/components/project/detail/descriptions/descriptions.server';
import ProjectDetailContent from '@/components/project/detail/content/content.server';
import ProjectDetailContextGroups from '@/components/project/detail/contextGroups/contextGroups.server';
import ProjectDetailImage from '@/components/project/detail/image/image';

export type ProjectProps = {
  item: Item;
  withCloseOption?: boolean;
};

export default function Project({
  item,
  withCloseOption = false,
}: ProjectProps) {
  return (
    <ProjectContainer>
      <div className="relative w-full">
        <div className="p-gutter-md md:fixed md:h-content md:max-h-content md:min-h-content md:w-[50vw] md:overflow-y-auto">
          <ProjectDetailImage item={item} withCloseOption={withCloseOption} />
        </div>
      </div>
      <div className="relative w-full">
        <div className="p-gutter-md md:fixed md:h-content md:max-h-content md:min-h-content md:w-[50vw] md:overflow-y-auto">
          <ProjectDetailName item={item} />
          <ProjectDetailAuthors item={item} />
          <ProjectDetailContextGroups item={item} />
          <ProjectDetailDescriptions item={item} />
          <ProjectDetailContent item={item} />
        </div>
      </div>
    </ProjectContainer>
  );
}

function ProjectContainer({ children }: ReactNodeProps) {
  return (
    <main className="bg-primary">
      <div className="grid h-content max-h-content min-h-content w-screen grid-cols-1 overflow-y-auto rounded-border border-x-border bg-secondary md:grid-cols-2">
        {children}
      </div>
    </main>
  );
}
