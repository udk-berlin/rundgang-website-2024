import { useTranslations } from 'next-intl';
import { ItemContext, ItemFilterableContext } from '@/types/item';
import ContextTag from '@/components/contextTag/contextTag.server';
import { ReactNodeProps } from '@/types/types';

export type ProjectDetailContextGroupProps = {
  contextGroupKey: 'language' | 'format' | 'faculty' | 'location' | 'time';
  contextGroup: ItemContext[] | ItemFilterableContext[];
};

export default function ProjectDetailContextGroup({
  contextGroupKey,
  contextGroup,
}: ProjectDetailContextGroupProps) {
  const t = useTranslations();

  if (contextGroup.length === 0) {
    return <></>;
  }

  return (
    <ProjectDetailContextGroupContainer>
      <div className="text-xs text-grey">
        {t(contextGroupKey, { count: 2 })}
      </div>
      <div className="flex flex-col gap-gutter-xs">
        {contextGroup.map((context) => (
          <ContextTag key={context.id} context={context} withBorder />
        ))}
      </div>
    </ProjectDetailContextGroupContainer>
  );
}

function ProjectDetailContextGroupContainer({ children }: ReactNodeProps) {
  return <div className="flex flex-col gap-gutter-xs">{children}</div>;
}
