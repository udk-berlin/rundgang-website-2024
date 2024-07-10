import { Item } from '@/types/item';

export type ProjectDetailAuthorsProps = {
  item: Item;
};

export default function ProjectDetailAuthors({
  item,
}: ProjectDetailAuthorsProps) {
  if (item.authors.length === 0) {
    return <></>;
  }

  return (
    <div className="flex w-full justify-end pt-gutter-md">
      {item.authors.join(', ')}
    </div>
  );
}
