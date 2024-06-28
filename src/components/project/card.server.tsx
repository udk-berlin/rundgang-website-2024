import { Item } from '@/types/item';
import ProjectCardImage from '@/components/project/image.server';
import ProjectCardAuthors from '@/components/project/authors.server';
import ProjectCardName from '@/components/project/name.server';
import ProjectCardFilters from '@/components/project/filters/filters.server';
import ProjectCardContainer from '@/components/project/container.client';

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
