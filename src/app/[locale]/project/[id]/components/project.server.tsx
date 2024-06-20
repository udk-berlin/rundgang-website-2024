import { ReactNodeProps } from '@/types/types';
import cx from 'classnames';
import { Item } from '@/types/item';
import ProjectDescription from '@/app/project/[id]/components/description.server';
import ProjectImage from '@/app/project/[id]/components/image.server';
import ProjectContent from './content.server';

export type ProjectProps = {
  item: Item;
};

export default function Project({ item }: ProjectProps) {
  return (
    <ProjectContainer>
      <ProjectImage item={item} />
      <div className="h-fit pl-gutter-md text-[40px] font-bold">
        {item.name}
      </div>
      <ProjectDescription item={item} />
      <ProjectContent item={item} />
    </ProjectContainer>
  );
}

function ProjectContainer({ children }: ReactNodeProps) {
  return (
    <div className="inline-block h-fit min-h-full w-full">
      <div className="flex w-full flex-wrap rounded-md border border-primary bg-secondary p-gutter-xs">
        {children}
      </div>
    </div>
  );
}
