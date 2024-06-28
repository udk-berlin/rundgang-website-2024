import { ReactNodeProps } from '@/types/types';
import { Item } from '@/types/item';
import ProjectContent from './content.server';
import Image from '@/components/image';
import CloseButton from '@/app/project/[id]/components/closeButton';
import SaveButton from '@/components/saveButton.client';
import ProjectDescriptions from '@/app/project/[id]/components/descriptions/descriptions.server';

export type ProjectProps = {
  item: Item;
  withCloseOption?: boolean;
};

export default function Project({
  item,
  withCloseOption = false,
}: ProjectProps) {
  return (
    <ProjectContainer>
      <div className="relative w-full md:max-w-[800px]">
        <Image src={item.thumbnail_full_size} />
        {withCloseOption && <CloseButton />}
        <SaveButton itemId={item.id} />
      </div>
      <div className="pt-gutter-sm text-lg font-bold">{item.name}</div>
      <div>{item.authors.join(' ')}</div>
      <ProjectDescriptions item={item} />
      <ProjectContent item={item} />
    </ProjectContainer>
  );
}

function ProjectContainer({ children }: ReactNodeProps) {
  return (
    <div className="min-h-full w-full rounded-md border-r-border border-r-primary bg-secondary p-gutter-xs">
      {children}
    </div>
  );
}
