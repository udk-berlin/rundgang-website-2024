import { ReactNodeProps } from '@/types/types';
import { Item } from '@/types/item';
import ProjectDetailName from '@/components/project/detail/name.server';
import ProjectDetailAuthors from '@/components/project/detail/authors.server';
import ProjectDetailDescriptions from '@/components/project/detail/descriptions/descriptions.server';
import ProjectDetailContent from '@/components/project/detail/content/content.server';
import ProjectDetailContextGroups from '@/components/project/detail/contextGroups/contextGroups.server';
import ProjectDetailImage from '@/components/project/detail/image/image';

export type SelectedProjectProps = {
  item: Item;
};

export default function SelectedProject({ item }: SelectedProjectProps) {
  return (
    <SelectedProjectContainer>
      <ProjectDetailImage item={item} withCloseOption />
      <ProjectDetailName className="pt-gutter-md" item={item} />
      <ProjectDetailAuthors item={item} />
      <ProjectDetailContextGroups item={item} />
      <ProjectDetailDescriptions item={item} />
      <ProjectDetailContent item={item} />
    </SelectedProjectContainer>
  );
}

function SelectedProjectContainer({ children }: ReactNodeProps) {
  return (
    <div className="min-h-full w-full rounded-md border-r-border border-r-primary bg-secondary p-gutter-xs">
      {children}
    </div>
  );
}
