import { ReactNodeProps } from '@/types/types';
import { Item } from '@/types/item';
import ProjectCard from '@/app/program/components/project/card.server';

export type ProgramProps = {
  items: Item[];
};

export default function Program({ items }: ProgramProps) {
  return (
    <ProgramContainer>
      {items.map((item) => (
        <ProjectCard key={item.id} item={item} />
      ))}
    </ProgramContainer>
  );
}

function ProgramContainer({ children }: ReactNodeProps) {
  return (
    <div className="h-full columns-1 gap-0 bg-primary xs:columns-2 md:columns-4 lg:col-span-4">
      {children}
    </div>
  );
}
