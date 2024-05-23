import ImageWrapper from '@/components/image';
import { Item } from '@/types/item';

export type ProjectProps = {
  item: Item;
};

export default function ProjectImage({ item }: ProjectProps) {
  if (!item.thumbnail_full_size) {
    return <></>;
  }
  return <ImageWrapper src={item.thumbnail_full_size} />;
}
