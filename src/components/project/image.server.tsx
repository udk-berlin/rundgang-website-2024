import ImageWrapper from '@/components/image';
import { ProjectCardProps } from '@/components/project/card.server';
import SaveButton from '@/components/savebutton.client';

export default function ProjectCardImage({ item }: ProjectCardProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <ImageWrapper
        className="rounded-md bg-primary text-primary hover:text-primary"
        src={item.thumbnail != '' ? item.thumbnail : '/assets/placeholder.png'}
      />
      <SaveButton itemId={item.id} />
    </div>
  );
}
