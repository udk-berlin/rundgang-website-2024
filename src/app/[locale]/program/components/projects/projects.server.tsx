'use server';
import ProjectCard from '@/components/project/card.server';
import { ReactNodeProps } from '@/types/types';
import { Item } from '@/types/item';

export type ProgramProjectsProps = {
  projects: Item[];
};

export default async function ProgramProjects({
  projects,
}: ProgramProjectsProps) {
  return (
    <ProgramProjectsContainer>
      {projects.map((item) => (
        <ProjectCard key={item.id} item={item} />
      ))}
    </ProgramProjectsContainer>
  );
}

function ProgramProjectsContainer({ children }: ReactNodeProps) {
  return <>{children}</>;
}
