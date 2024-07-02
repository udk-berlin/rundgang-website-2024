import { Item } from '@/types/item';
import ProjectCardAuthors from '@/components/project/card/authors.server';
import ProjectCardName from '@/components/project/card/name.server';
import ProjectCardContainer from '@/components/project/card/container.client';
import ProjectCardFilters from '@/components/project/card/filters.server';
import ProjectCardImage from '@/components/project/card/image.server';

export type ProjectCardProps = {
  item: Item;
  linkPathname?: string;
};

export default function ProjectCard({ item, linkPathname }: ProjectCardProps) {
  return (
    <ProjectCardContainer item={item}>
      <div>
        <ProjectCardImage item={item} linkPathname={linkPathname} />
        <ProjectCardName item={item} linkPathname={linkPathname} />
      </div>
      <div className="flex grow flex-col">
        <ProjectCardAuthors item={item} linkPathname={linkPathname} />
        <ProjectCardFilters item={item} />
      </div>
    </ProjectCardContainer>
  );
}
