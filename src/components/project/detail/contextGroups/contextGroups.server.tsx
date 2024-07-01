import { Item, ItemContext } from '@/types/item';
import { useLocale } from 'next-intl';
import { ReactNodeProps } from '@/types/types';
import ProjectDetailContextGroup from '@/components/project/detail/contextGroups/contextGroup.server';

export type ProjectDetailContextGroupsProps = {
  item: Item;
};

// todo: auslagern
const projectDetailContextGroupsFetchers: {
  contextGroupKey: 'format' | 'faculty' | 'language' | 'location' | 'time';
  contextGroupDataKey:
    | 'formats'
    | 'faculties'
    | 'languages'
    | 'locations'
    | 'times';
}[] = [
  { contextGroupKey: 'format', contextGroupDataKey: 'formats' },
  { contextGroupKey: 'language', contextGroupDataKey: 'languages' },
  { contextGroupKey: 'faculty', contextGroupDataKey: 'faculties' },
  { contextGroupKey: 'location', contextGroupDataKey: 'locations' },
  { contextGroupKey: 'time', contextGroupDataKey: 'times' },
];

export default function ProjectDetailContextGroups({
  item,
}: ProjectDetailContextGroupsProps) {
  const locale = useLocale();

  // todo: auslagern und cachen
  const timeContextGroup: ItemContext[] = item.temporals.map((time) => {
    const startDate = time.start.toLocaleDateString(locale, {
      weekday: 'short',
      month: 'long',
      day: 'numeric',
    });

    const startTime = time.start.toLocaleTimeString(locale, {
      hour: '2-digit',
      minute: '2-digit',
    });

    const endDate = time.end.toLocaleDateString(locale, {
      weekday: 'short',
      month: 'long',
      day: 'numeric',
    });

    const endTime = time.end.toLocaleTimeString(locale, {
      hour: '2-digit',
      minute: '2-digit',
    });

    const dateTime =
      startDate === endDate
        ? `${startDate}, ${startTime} - ${endTime}`
        : `${startDate}, ${startTime} - ${endDate}, ${endTime}`;

    return {
      id: dateTime,
      name: dateTime,
    };
  });

  item.times = timeContextGroup;

  return (
    <ProjectDetailContextGroupsContainer>
      {projectDetailContextGroupsFetchers.map((fetcher) => (
        <ProjectDetailContextGroup
          key={fetcher.contextGroupKey}
          contextGroupKey={fetcher.contextGroupKey}
          contextGroup={item[fetcher.contextGroupDataKey]}
        />
      ))}
    </ProjectDetailContextGroupsContainer>
  );
}

function ProjectDetailContextGroupsContainer({ children }: ReactNodeProps) {
  return (
    <div className="wrap grid grid-cols-2 gap-gutter-md pt-gutter-md">
      {children}
    </div>
  );
}
