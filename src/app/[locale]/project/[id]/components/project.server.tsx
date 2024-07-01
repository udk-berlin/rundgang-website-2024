'use server';

import { ReactNodeProps } from '@/types/types';
import { Item } from '@/types/item';
import Image from '@/components/image';
import CloseButton from '@/app/project/[id]/components/closeButton';
import SaveButton from '@/components/saveButton.client';
import ProjectDescriptions from '@/app/project/[id]/components/descriptions/descriptions.server';
import ProjectContent from '@/app/project/[id]/components/content/content.server';
import ProjectContextGroups from '@/app/project/[id]/components/contextGroups/contextGroups.server';

export type ProjectProps = {
  item: Item;
  withCloseOption?: boolean;
};

export default async function Project({
  item,
  withCloseOption = false,
}: ProjectProps) {
  return (
    <ProjectContainer>
      <div className="relative w-full">
        <Image src={item.thumbnail_full_size} alt="thumbnail" />
        {withCloseOption && <CloseButton />}
        <SaveButton itemId={item.id} />
      </div>
      <div className="pt-gutter-md text-lg font-bold">{item.name}</div>
      <div className="flex w-full justify-end pt-gutter-md">
        {item.authors.join(' ')}
      </div>
      <ProjectContextGroups item={item} />
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
