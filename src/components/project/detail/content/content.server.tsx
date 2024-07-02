import { useLocale } from 'next-intl';
import { ReactNodeProps } from '@/types/types';
import { Item } from '@/types/item';
import ProjectDetailContentElement from '@/components/project/detail/content/element.server';

// TODO: format content properly

export type ProjectContentProps = {
  item: Item;
};

export default function ProjectDetailContent({ item }: ProjectContentProps) {
  const locale = useLocale();
  const content = item.content ? item.content[locale.toUpperCase()] : null;

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
