import ProjectCard from '@/app/program/components/projectCard.server';

export type ProgramProps = {
  program: any[];
};

export default function Program({ program }: ProgramProps) {
  return (
    <div className="xs:columns-1 w-screen gap-0 bg-primary md:columns-2 lg:columns-4">
      {program.map((item) => (
        <ProjectCard key={`project-card-${item.id}`} item={item} />
      ))}
    </div>
  );
}
