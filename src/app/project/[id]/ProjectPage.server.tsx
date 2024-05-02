import Image from 'next/image';
import { Item } from '@/types';

export type ProjectPageProps = {
  project: Item;
};

export default function ProjectPageComponent(props: ProjectPageProps) {
  return (
    <div>
      ({props.project.id})<div>{props.project.name}</div>
      <div>
        <Image
          className="rounded-md"
          src={props.project.thumbnail}
          width={500}
          height={500}
          alt="thumbnail of student project"
        />
      </div>
      <div>{props.project.description.default}</div>
    </div>
  );
}
