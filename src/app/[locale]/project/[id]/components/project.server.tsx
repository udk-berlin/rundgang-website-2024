import { ReactNodeProps } from '@/types/types';
import { Item } from '@/types/item';
import ProjectDescription from '@/app/project/[id]/components/description.server';
import ProjectImage from '@/app/project/[id]/components/image.server';

export type ProjectProps = {
  item: Item;
};

export default function Project({ item }: ProjectProps) {
  return (
    <ProjectContainer>
      ({item.id})<div>{item.name}</div>
      <ProjectImage item={item} />
      <ProjectDescription item={item} />
    </ProjectContainer>
  );
}

function ProjectContainer({ children }: ReactNodeProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {children}
    </main>
  );
}
