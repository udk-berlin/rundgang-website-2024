import { ProjectCardProps } from '@/components/project/card.server';
import { ReactNodeProps } from '@/types/types';
import { Link } from '@/navigation';

export default function ProjectCardAuthors({ item }: ProjectCardProps) {
  if (item.authors.length === 0) {
    return <></>;
  }

  return (
    <div className="px-gutter-md pb-gutter-md text-right text-xs">
      {item.authors.join(' ')}
    </div>
  );
}
