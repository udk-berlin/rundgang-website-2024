import Image from '@/components/image';
import { ProjectCardProps } from '@/components/project/card.server';
import SaveButton from '@/components/saveButton.client';
import { Link } from '@/navigation';

export default function ProjectCardImage({
  item,
  linkPathname = '/project',
}: ProjectCardProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <Link href={`${linkPathname}/${item.id}`}>
        <Image
          className="rounded-md bg-primary"
          src={
            item.thumbnail != '' ? item.thumbnail : '/assets/placeholder.png'
          }
          alt="thumbnail"
        />
      </Link>
      <SaveButton itemId={item.id} />
    </div>
  );
}
