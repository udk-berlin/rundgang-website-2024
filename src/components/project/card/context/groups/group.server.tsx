import { useTranslations } from 'next-intl';
import { ItemFilterableContext } from '@/types/item';
import ContextTag, {
  ContextTagType,
} from '@/components/contextTag/contextTag.server';

export type ProjectCardContextGroupProps = {
  tagType?: ContextTagType;
  translationKey: 'format' | 'faculty' | 'language';
  contexts: ItemFilterableContext[];
};

export default function ProjectCardContextGroup({
  tagType = 'plain',
  translationKey,
  contexts,
}: ProjectCardContextGroupProps) {
  const t = useTranslations();

  if (contexts.length === 0) {
    return <></>;
  }

  return (
    <div>
      <div className="pb-gutter-xs text-xxxs text-grey">
        {t(translationKey, { count: 2 })}
      </div>
      <div className="wrap flex gap-gutter-sm">
        {contexts.map((context) => (
          <ContextTag
            key={context.id}
            type={tagType}
            context={context}
            withBorder
          />
        ))}
      </div>
    </div>
  );
}
