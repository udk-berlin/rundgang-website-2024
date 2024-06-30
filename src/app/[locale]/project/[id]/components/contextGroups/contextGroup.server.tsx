import { useTranslations } from 'next-intl';
import { ItemContext, ItemFilterableContext } from '@/types/item';
import ContextTag from '@/components/contextTag/contextTag.server';
import FilterableContextTag from '@/components/contextTag/filterableContextTag.client';

export type ProjectContextGroupProps = {
  contextGroupKey: 'language' | 'format' | 'faculty' | 'location';
  contextGroup: ItemContext[] | ItemFilterableContext[];
};

export default function ProjectContextGroup({
  contextGroupKey,
  contextGroup,
}: ProjectContextGroupProps) {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-gutter-xs">
      <div className="text-xs text-grey">
        {t(contextGroupKey, { count: 2 })}
      </div>
      <div className="flex flex-col gap-gutter-xs">
        {contextGroup.map((context) => {
          if ('searchParam' in context) {
            return <FilterableContextTag key={context.id} context={context} />;
          } else {
            return <ContextTag key={context.id} context={context} />;
          }
        })}
      </div>
    </div>
  );
}
