import ImageWrapper from '@/components/image';
import { ProjectCardProps } from '@/app/program/components/project/card.server';
import SaveButton from './savebutton.client';
import { Link } from '@/navigation';

export default function ProjectCardImage({ item }: ProjectCardProps) {
  return (
    <Link
      href={{
        pathname: `/project/[id]`,
        params: { id: item.id },
      }}
    >
      <div className="relative w-full overflow-hidden p-gutter-xxs">
        <ImageWrapper
          className="rounded-md bg-highlight"
          src={item.thumbnail ?? ''}
        />
        <SaveButton itemId={item.id} />
      </div>
    </Link>
  );
}
