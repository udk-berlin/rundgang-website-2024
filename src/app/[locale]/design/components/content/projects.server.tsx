import { HtmlProps } from '@/components/html/html';
import projects from '@/projects';
import DesignContentProject from '@/app/design/components/content/project/project.server';

export default function DesignContentProjects() {
  return (
    <DesignContentProjectsContainer>
      {Object.values(projects).map((project) => (
        <DesignContentProject key={project.artist} project={project} />
      ))}
      <div className="col-span-2 hidden h-full w-full rounded-t-border rounded-bl-border bg-secondary md:inline-block" />
    </DesignContentProjectsContainer>
  );
}

function DesignContentProjectsContainer({ children }: HtmlProps) {
  return (
    <div>
      <div className="hidden h-content-header max-h-content-header min-h-content-header md:block" />
      <div className="scrollable md:border-r-xs md:border-t-xs col-span-4 grid h-content max-h-content min-h-content grid-cols-1 gap-border overflow-y-auto border-border  border-y-0 bg-primary md:h-content-body md:max-h-content-body md:min-h-content-body md:grid-cols-4">
        {children}
      </div>
    </div>
  );
}
