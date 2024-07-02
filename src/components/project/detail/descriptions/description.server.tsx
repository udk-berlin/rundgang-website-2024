import { ReactNodeProps } from '@/types/types';
import { ItemDescription } from '@/types/item';

export type ProjectDescriptionProps = {
  description: ItemDescription;
};

export default function ProjectDetailDescription({
  description,
}: ProjectDescriptionProps) {
  return (
    <ProjectDetailDescriptionContainer>
      <div className="pb-gutter-xs text-sm font-bold">
        {description.language.name}
      </div>
      <div className="text-sm">{description.content}</div>
    </ProjectDetailDescriptionContainer>
  );
}

function ProjectDetailDescriptionContainer({ children }: ReactNodeProps) {
  return <div>{children}</div>;
}
