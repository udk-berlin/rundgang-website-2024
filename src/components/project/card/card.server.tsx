import { Item } from '@/types/item';
import ProjectCardAuthors from '@/components/project/card/authors.server';
import ProjectCardName from '@/components/project/card/name.server';
import ProjectCardContainer from '@/components/project/card/container.client';
import ProjectCardImage from '@/components/project/card/image.server';
import { ContextTagType } from '@/components/contextTag/contextTag.server';
import ProjectCardContextGroups from '@/components/project/card/context/groups/groups.server';

export type ProjectCardProps = {
  item: Item;
  contextTagType?: ContextTagType;
  linkPathname?: string;
};

export default function ProjectCard({
  item,
  contextTagType = 'plain',
  linkPathname,
}: ProjectCardProps) {
  return (
    <ProjectCardContainer item={item}>
      <div>
        <ProjectCardImage item={item} linkPathname={linkPathname} />
        <ProjectCardName item={item} linkPathname={linkPathname} />
      </div>
      <div className="flex grow flex-col">
        <ProjectCardAuthors item={item} linkPathname={linkPathname} />
        <ProjectCardContextGroups contextTagType={contextTagType} item={item} />
      </div>
    </ProjectCardContainer>
  );
}
