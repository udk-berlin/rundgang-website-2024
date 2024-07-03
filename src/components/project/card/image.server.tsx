import Image from '@/components/image';
import SaveButton from '@/components/saveButton.client';
import { ProjectCardProps } from '@/components/project/card/card.server';
import ProjectLink from '@/components/project/link';

export default function ProjectCardImage({
  item,
  linkPathname = '/project',
}: ProjectCardProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <ProjectLink href={`${linkPathname}/${item.id}`}>
        <Image
          className="rounded-md bg-highlight"
          src={
            item.thumbnail != '' ? item.thumbnail : '/assets/placeholder.png'
          }
          alt="thumbnail"
        />
      </ProjectLink>
      <SaveButton itemId={item.id} />
    </div>
  );
}
