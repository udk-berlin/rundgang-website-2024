import { ProjectProps } from '@/app/project/[id]/components/project.server';
import { useLocale } from 'next-intl';
import ContentElement from '@/app/project/[id]/components/content/element';

// TODO: format content properly

export default function ProjectContent({ item }: Pick<ProjectProps, 'item'>) {
  const locale = useLocale();

  if (!item.content || !(locale.toUpperCase() in item.content)) {
    return <></>;
  }

  return (
    <div className="p-gutter-xs">
      {item.content[locale.toUpperCase()].map((contentItem, i) => (
        <div key={`content-item-${i}`}>
          <ContentElement item={contentItem} />
        </div>
      ))}
    </div>
  );
}
