import { HtmlProps } from '@/components/html/html';
import DesignContentProjectWriting from '@/app/design/components/content/project/writing.server';
import DesignContentProjectName from '@/app/design/components/content/project/name.server';
import DesignContentProjectFilters from '@/app/design/components/content/project/filters/filters.server';
import DesignContentProjectAudioPlayer from '@/app/design/components/content/project/audioPlayer.server';

export default function DesignContentProject({ project }) {
  return (
    <DesignContentProjectContainer>
      <DesignContentProjectWriting
        key="writing"
        languageSearchParam={project.language.searchParam}
        project={project}
      />
      <DesignContentProjectAudioPlayer
        key="audio"
        languageSearchParam={project.language.searchParam}
      />
      <DesignContentProjectName
        key="name"
        languageSearchParam={project.language.searchParam}
        project={project}
      />
      <DesignContentProjectFilters key="filters" project={project} />
    </DesignContentProjectContainer>
  );
}

function DesignContentProjectContainer({ children }: HtmlProps) {
  return (
    <div className="flex w-full flex-col gap-[0.5rem] rounded-border bg-secondary px-[1rem] py-[1.5rem]">
      {children}
    </div>
  );
}
