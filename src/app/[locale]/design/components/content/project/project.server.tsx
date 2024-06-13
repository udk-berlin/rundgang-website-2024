import { HtmlProps } from '@/components/html/html';
import DesignContentProjectWriting from '@/app/design/components/content/project/writing.server';
import DesignContentProjectName from '@/app/design/components/content/project/name.server';
import DesignContentProjectFilters from '@/app/design/components/content/project/filters/filters.server';
import DesignContentProjectAudio from '@/app/design/components/content/project/audio.server';

export default function DesignContentProject({ language, project }) {
  return (
    <DesignContentProjectContainer>
      <DesignContentProjectWriting
        key="writing"
        language={language}
        project={project}
      />
      <DesignContentProjectAudio key="audio" />
      <DesignContentProjectName
        key="name"
        language={language}
        project={project}
      />
      <DesignContentProjectFilters key="filters" project={project} />
    </DesignContentProjectContainer>
  );
}

function DesignContentProjectContainer({ children }: HtmlProps) {
  return (
    <div className="rounded-border flex w-full flex-col gap-[0.5rem] bg-secondary px-[1rem] py-[1.5rem]">
      {children}
    </div>
  );
}
