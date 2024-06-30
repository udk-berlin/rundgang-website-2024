import { ProjectProps } from '@/app/project/[id]/components/project.server';
import { ReactNodeProps } from '@/types/types';
import ProjectDescription from '@/app/project/[id]/components/descriptions/description.server';

export default function ProjectDescriptions({
  item,
}: Pick<ProjectProps, 'item'>) {
  if (!item.descriptions) {
    return <></>;
  }

  return (
    <ProjectDescriptionsContainer>
      {item.descriptions.map((description) => (
        <ProjectDescription
          key={description.language.iso}
          description={description}
        />
      ))}
    </ProjectDescriptionsContainer>
  );
}

function ProjectDescriptionsContainer({ children }: ReactNodeProps) {
  return <div className="w-full pt-gutter-sm flex flex-col gap-gutter-sm">{children}</div>;
}
