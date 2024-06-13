import ImageWrapper from '@/components/image';
import { ProjectCardProps } from '@/app/program/components/project/card.server';
import SaveButton from '../../../../../components/savebutton.client';

export default function ProjectCardImage({ item }: ProjectCardProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <ImageWrapper
        className="rounded-md bg-highlight"
        src={item.thumbnail ?? ''}
      />
      <SaveButton itemId={item.id} />
    </div>
  );
}
