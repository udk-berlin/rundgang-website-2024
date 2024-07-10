import { useLocale } from 'next-intl';
import { ReactNodeProps } from '@/types/types';
import { Item } from '@/types/item';
import ProjectDetailContentElement from '@/components/project/detail/content/element.server';

export type ProjectContentProps = {
  item: Item;
};

export default function ProjectDetailContent({ item }: ProjectContentProps) {
  const locale = useLocale();
  const currLoc =
    item.content && item.content[locale.toUpperCase()]?.length > 0
      ? locale.toUpperCase()
      : item.content && item.content['EN']?.length > 0
        ? 'EN'
        : 'DE';

  const content = item.content ? item.content[currLoc] : null;

  if (!content) {
    return <></>;
  }

  return (
    <ProjectDetailContentContainer>
      {content.map((element, i) => (
        <ProjectDetailContentElement key={i} element={element} />
      ))}
    </ProjectDetailContentContainer>
  );
}

function ProjectDetailContentContainer({ children }: ReactNodeProps) {
  return <div className="pt-gutter-l">{children}</div>;
}
