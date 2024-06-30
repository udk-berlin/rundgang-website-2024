import { ReactNodeProps } from '@/types/types';
import { ItemDescription } from '@/types/item';

export default function ProjectDescription({
  description,
}: {
  description: ItemDescription;
}) {
  return (
    <ProjectDescriptionContainer>
      <div className="pb-gutter-xs text-sm font-bold">
        {description.language.name}
      </div>
      <div className="text-sm">{description.content}</div>
    </ProjectDescriptionContainer>
  );
}

function ProjectDescriptionContainer({ children }: ReactNodeProps) {
  return <div>{children}</div>;
}
