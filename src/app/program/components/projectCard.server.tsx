import Link from 'next/link';
import { Item } from '@/types/graphql';
import Image from 'next/image';

export type ProjectCardProps = {
  item: Item;
};

export default function ProjectCard({ item }: ProjectCardProps) {
  return (
    <Link
      href={`/project/${item.id}`}
      className="h-full w-full border border-black bg-black"
    >
      <div className="h-full w-full rounded-md bg-white p-2 text-black hover:bg-secondary">
        <div>
          {item.thumbnail && (
            <Image
              className="rounded-md"
              src={item.thumbnail}
              width={500}
              height={500}
              alt="thumbnail of student project"
            />
          )}
        </div>
        <div className="">{item.name}</div>
        <div>
          {item.origin?.authors
            ?.map((a) => a.name)
            .slice(0, 5)
            .join(', ')}
        </div>
        <div className="bg-black text-white">{item.context}</div>
      </div>
    </Link>
  );
}
