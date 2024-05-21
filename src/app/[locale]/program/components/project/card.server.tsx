import { ReactNodeProps } from '@/types/types';
import { Item } from '@/types/item';
import ProjectCardImage from '@/app/program/components/project/image.server';
import ProjectCardAuthors from '@/app/program/components/project/authors.server';
import ProjectCardName from '@/app/program/components/project/name.server';
import ProjectCardFilters from '@/app/program/components/project/filters/filters.server';

export type ProjectCardProps = {
  item: Item;
};

export default function ProjectCard({ item }: ProjectCardProps) {
  return (
    <ProjectCardContainer>
      <ProjectCardImage item={item} />
      <ProjectCardName item={item} />
      <ProjectCardAuthors item={item} />
      <ProjectCardFilters item={item} />
    </ProjectCardContainer>
  );
}

function ProjectCardContainer({ children }: ReactNodeProps) {
  return (
    <div className="inline-block w-full border border-primary">
      <div className="w-full rounded-md bg-secondary hover:bg-highlight">
        {children}
      </div>
    </div>
  );
}
