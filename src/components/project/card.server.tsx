import { Item } from '@/types/item';
import ProjectCardImage from '@/components/project/image.server';
import ProjectCardAuthors from '@/components/project/authors.server';
import ProjectCardName from '@/components/project/name.server';
import ProjectCardFilters from '@/components/project/filters/filters.server';
import ProjectCardContainer from '@/components/project/container.client';

export type ProjectCardProps = {
  item: Item;
};

export default function ProjectCard({ item }: ProjectCardProps) {
  return (
    <ProjectCardContainer item={item}>
        <div>
            <ProjectCardImage item={item} />
            <ProjectCardName item={item} />
        </div>
        <div className="grow flex flex-col">
            <ProjectCardAuthors item={item} />
            <ProjectCardFilters item={item} />
        </div>
    </ProjectCardContainer>
  );
}
