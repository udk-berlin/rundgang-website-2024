import ProjectCard from './projectCard.server';

export type ProgramProps = {
  program: any[];
};

export default function Program({ program }: ProgramProps) {
  return (
    <div className="w-screen gap-0 bg-primary lg:columns-4 md:columns-2 xs:columns-1">
      {program.map((item) => (
        <ProjectCard key={`project-card-${item.id}`} item={item} />
      ))}
    </div>
  );
}
