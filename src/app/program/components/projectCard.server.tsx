import Link from 'next/link';
import Image from 'next/image';
import { Item } from '@/types';
export type ProjectCardProps = {
  item: Item;
};

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <Link
      href={`/project/${props.item.id}`}
      className="h-full w-full border border-black bg-black"
    >
      <div className="hover:bg-secondary h-full w-full rounded-md bg-white p-2 text-black">
        <div>
          <Image
            className="rounded-md"
            src={props.item.thumbnail}
            width={500}
            height={500}
            alt="thumbnail of student project"
          />
        </div>
        <div className="">{props.item.name}</div>
        <div>
          {props.item.origin.authors
            .map((a) => a.name)
            .slice(0, 5)
            .join(', ')}
        </div>
        <div className="bg-black text-white">{props.item.context}</div>
      </div>
    </Link>
  );
}
