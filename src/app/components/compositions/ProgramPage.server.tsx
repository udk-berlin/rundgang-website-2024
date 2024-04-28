import { Entry } from "@/types";
import ProjectCard from "@/components/project/ProjectCard";
export type ProgramPageProps = {
  program: any[];
};

export default function ProgramPageComponent(props: ProgramPageProps) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {props.program.map((item) => (
          <ProjectCard key={`project-card-${item.id}`} item={item} />
        ))}
      </div>
    </div>
  );
}
