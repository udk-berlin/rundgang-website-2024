import ProjectLink from '@/components/project/link';
import { ProjectCardProps } from '@/components/project/card/card.server';

export default function ProjectCardName({
  item,
  linkPathname = '/project',
}: ProjectCardProps) {
  return (
    <ProjectLink
      href={`${linkPathname}/${item.id}`}
      className="w-full max-w-full py-gutter-md text-sm"
    >
      <div className="py-gutter-md text-sm">{item.name}</div>
    </ProjectLink>
  );
}
