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
    <div className="col-span-4 h-full gap-0 bg-primary xs:columns-1 md:columns-2 lg:columns-4">
      {children}
    </div>
  );
}
