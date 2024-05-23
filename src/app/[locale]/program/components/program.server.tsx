import ProjectCard from './projectCard.server';

export type ProgramProps = {
  program: any[];
};

export default function Program({ program }: ProgramProps) {
  return (
    <div className="lg: col-span-4 h-full columns-1 gap-0 bg-primary xs:columns-2 md:columns-4">
      {program.map((item) => (
        <ProjectCard key={`project-card-${item.id}`} item={item} />
      ))}
    </div>
  );
}
