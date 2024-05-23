import ImageWrapper from '@/components/image';
import { ProjectCardProps } from '@/app/program/components/project/card.server';
import { Link } from '@/navigation';

export default function ProjectCardImage({ item }: ProjectCardProps) {
  return (
    <Link
      href={{
        pathname: `/project/[id]`,
        params: { id: item.id },
      }}
    >
      <div className="w-full p-gutter-xxs">
        <ImageWrapper
          className="rounded-md bg-highlight"
          src={item.thumbnail ?? ''}
        />
      </div>
    </Link>
  );
}
