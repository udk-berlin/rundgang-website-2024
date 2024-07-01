import { ReactNodeProps } from '@/types/types';
import { Item } from '@/types/item';
import ProjectDetailDescription from '@/components/project/detail/descriptions/description.server';

export type ProjectDescriptionsProps = {
  item: Item;
};

export default function ProjectDetailDescriptions({
  item,
}: ProjectDescriptionsProps) {
  if (!item.descriptions) {
    return <></>;
  }

  return (
    <ProjectDetailDescriptionsContainer>
      {item.descriptions.map((description) => (
        <ProjectDetailDescription
          key={description.language.iso}
          description={description}
        />
      ))}
    </ProjectDetailDescriptionsContainer>
  );
}

function ProjectDetailDescriptionsContainer({ children }: ReactNodeProps) {
  return (
    <div className="flex w-full flex-col gap-gutter-sm pt-gutter-l">
      {children}
    </div>
  );
}
