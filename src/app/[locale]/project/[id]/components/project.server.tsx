import { ReactNodeProps } from '@/types/types';
import { Item } from '@/types/item';
import ProjectDescription from '@/app/project/[id]/components/description.server';
import ProjectContent from './content.server';
import Image from "@/components/image";
import CloseButton from "@/app/project/[id]/components/closeButton";
import SaveButton from "@/components/saveButton.client";

export type ProjectProps = {
  item: Item;
  withCloseOption?: boolean
};

export default function Project({ item, withCloseOption = false }: ProjectProps) {
  return (
    <ProjectContainer>
        <div className="relative w-full md:max-w-[800px]">
            <Image src={item.thumbnail_full_size} />
            {withCloseOption && <CloseButton/>}
            <SaveButton itemId={item.id} />
        </div>
      <div className="text-lg font-bold pt-gutter-sm">
        {item.name}
      </div>
      <ProjectDescription item={item} />
      <ProjectContent item={item} />
    </ProjectContainer>
  );
}

function ProjectContainer({ children }: ReactNodeProps) {
  return (
    <div className="min-h-full w-full bg-secondary rounded-md p-gutter-xs border-r-primary border-r-border">
        {children}
    </div>
  );
}
