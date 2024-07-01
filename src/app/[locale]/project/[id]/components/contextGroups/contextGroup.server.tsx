import { useTranslations } from 'next-intl';
import { ItemContext, ItemFilterableContext } from '@/types/item';
import ContextTag from '@/components/contextTag/contextTag.server';

export type ProjectContextGroupProps = {
  contextGroupKey: 'language' | 'format' | 'faculty' | 'location';
  contextGroup: ItemContext[] | ItemFilterableContext[];
};

export default function ProjectContextGroup({
  contextGroupKey,
  contextGroup,
}: ProjectContextGroupProps) {
  const t = useTranslations();

  if (contextGroup.length === 0) {
    return <></>;
  }

  return (
    <div className="flex flex-col gap-gutter-xs">
      <div className="text-xs text-grey">
        {t(contextGroupKey, { count: 2 })}
      </div>
      <div className="flex flex-col gap-gutter-xs">
        {contextGroup.map((context) => (
          <ContextTag key={context.id} context={context} />
        ))}
      </div>
    </div>
  );
}
