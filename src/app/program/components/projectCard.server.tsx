import Link from 'next/link';
import { Item } from '@/types/graphql';
import ImageWrapper from '@/components/image';
import FormatTag from '@/components/formatTag';
export type ProjectCardProps = {
  item: Item & {
    format: Item;
    authors: string[];
  };
};

export default function ProjectCard({ item }: ProjectCardProps) {
  return (
    <Link href={`/project/${item.id}`}>
      <div className="w-full border-2 border-primary bg-primary">
        <div className="w-full rounded-md bg-primarybg p-2 hover:bg-secondary hover:text-black">
          <div className="relative w-full overflow-hidden bg-secondary">
            <ImageWrapper src={item.thumbnail} />
          </div>
          <div className="text-md pt-2 font-bold">{item.name}</div>
          <div className="pt-2 text-right">
            {item.origin.authors
              .map((a) => a.name)
              .slice(0, 5)
              .join(', ')}
          </div>
          <div>
            <FormatTag format={item.format} />
          </div>
        </div>
      </div>
    </Link>
  );
}
