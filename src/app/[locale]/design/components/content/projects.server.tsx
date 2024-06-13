import { HtmlProps } from '@/components/html/html';
import projects from '@/projects';
import DesignContentProject from '@/app/design/components/content/project/project.server';

export default function DesignContentProjects() {
  return (
    <DesignContentProjectsContainer>
      {Object.entries(projects).map(([key, project]) => (
        <DesignContentProject key={key} language={key} project={project} />
      ))}
      <div className="rounded-border col-span-2 hidden h-full w-full bg-secondary md:inline-block" />
    </DesignContentProjectsContainer>
  );
}

function DesignContentProjectsContainer({ children }: HtmlProps) {
  return (
    <div>
      <div className="h-content-header max-h-content-header min-h-content-header hidden md:block" />
      <div className="border-border h-design-projects max-h-design-projects min-h-design-projects col-span-4 grid grid-cols-1 gap-border overflow-y-auto border-y-[1px] border-r-[1px] bg-primary md:grid-cols-4">
        {children}
      </div>
    </div>
  );
}
