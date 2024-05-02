import ProjectCard from "@/app/program/components/projectCard.server";

export interface ProgramProps {
  program: any[];
}

export default function Program({program}: ProgramProps) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-0">
        {program.map((item) => (
          <ProjectCard key={`project-card-${item.id}`} item={item} />
        ))}
      </div>
    </div>
  );
}
