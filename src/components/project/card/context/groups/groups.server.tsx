import { Item } from '@/types/item';
import { ContextTagType } from '@/components/contextTag/contextTag.server';
import ProjectCardContextGroup from '@/components/project/card/context/groups/group.server';
import { ReactNodeProps } from '@/types/types';

export type ProjectCardProps = {
  contextTagType: ContextTagType;
  item: Item;
};

const fetchers: {
  translationKey: 'format' | 'faculty' | 'language';
  contextsKey: 'formats' | 'faculties' | 'languages';
}[] = [
  { translationKey: 'format', contextsKey: 'formats' },
  { translationKey: 'faculty', contextsKey: 'faculties' },
  { translationKey: 'language', contextsKey: 'languages' },
];

export default function ProjectCardContextGroups({
  contextTagType = 'plain',
  item,
}: ProjectCardProps) {
  return (
    <ProjectCardContextGroupsContainer>
      {fetchers.map((fetcher) => (
        <ProjectCardContextGroup
          key={fetcher.translationKey}
          tagType={contextTagType}
          translationKey={fetcher.translationKey}
          contexts={item[fetcher.contextsKey].filter((f) => f.name)}
        />
      ))}
    </ProjectCardContextGroupsContainer>
  );
}

function ProjectCardContextGroupsContainer({ children }: ReactNodeProps) {
  return (
    <div className="flex w-full max-w-full flex-wrap gap-gutter-sm">
      {children}
    </div>
  );
}
