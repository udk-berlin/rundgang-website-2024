import { HtmlProps } from '@/components/html/html';
import projects from '@/projects';
import DesignContentProject from '@/app/design/components/content/project/project.server';

export default function DesignContentProjects() {
  return (
    <DesignContentProjectsContainer>
      {Object.values(projects).map((project) => (
        <DesignContentProject key={project.artist} project={project} />
      ))}
      <div className="col-span-2 hidden h-full w-full rounded-border bg-secondary md:inline-block" />
    </DesignContentProjectsContainer>
  );
}

function DesignContentProjectsContainer({ children }: HtmlProps) {
  return (
    <div>
      <div className="max-h-content-header min-h-content-header hidden h-content-header md:block" />
      <div className="max-h-content md:max-h-content-body min-h-content md:min-h-content-body col-span-4 grid h-content md:h-content-body grid-cols-1 gap-border overflow-y-auto border-border border-y-0 md:border-t-[1px] md:border-r-[1px] bg-primary md:grid-cols-4">
        {children}
      </div>
    </div>
  );
}
