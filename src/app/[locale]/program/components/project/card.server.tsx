import { Item } from '@/types/item';
import ProjectCardImage from '@/app/program/components/project/image.server';
import ProjectCardAuthors from '@/app/program/components/project/authors.server';
import ProjectCardName from '@/app/program/components/project/name.server';
import ProjectCardFilters from '@/app/program/components/project/filters/filters.server';
import ProjectCardContainer from './container.client';

export type ProjectCardProps = {
  item: Item;
};

export default function ProjectCard({ item }: ProjectCardProps) {
  return (
    <ProjectCardContainer itemId={item.id}>
      <ProjectCardImage item={item} />
      <ProjectCardName item={item} />
      <ProjectCardAuthors item={item} />
      <ProjectCardFilters item={item} />
    </ProjectCardContainer>
  );
}
