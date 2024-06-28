import { ProjectCardProps } from '@/components/project/card.server';
import { Link } from '@/navigation';

export default function ProjectCardName({
  item,
  linkPathname = '/project',
}: ProjectCardProps) {
  return (
    <Link href={`${linkPathname}/${item.id}`} className="w-full max-w-full">
      <div className="py-gutter-md text-sm">{item.name}</div>
    </Link>
  );
}
