import { ProjectCardProps } from '@/components/project/card.server';
import { Link } from '@/navigation';

export default function ProjectCardAuthors({
  item,
  linkPathname = '/project',
}: ProjectCardProps) {
  if (item.authors.length === 0) {
    return <></>;
  }

  return (
    <Link href={`${linkPathname}/${item.id}`} className="w-full max-w-full">
      <div className="pb-gutter-md text-right text-xs">
        {item.authors?.join(' ')}
      </div>
    </Link>
  );
}
