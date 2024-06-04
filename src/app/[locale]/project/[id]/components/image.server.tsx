import ImageWrapper from '@/components/image';
import { Item } from '@/types/item';
import CloseButton from './closebutton';
import SaveButton from '@/components/savebutton.client';

export type ProjectProps = {
  item: Item;
};

export default function ProjectImage({ item }: ProjectProps) {
  if (!item.thumbnail_full_size) {
    return <></>;
  }
  return (
    <div className="relative w-full max-w-[400px] overflow-hidden md:max-w-[800px]">
      <ImageWrapper className="rounded-md" src={item.thumbnail_full_size} />
      <CloseButton />
      <SaveButton itemId={item.id} />
    </div>
  );
}
