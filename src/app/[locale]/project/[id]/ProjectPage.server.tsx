import { Item } from '@/types/graphql';
import ImageWrapper from '@/components/image';

export type ProjectPageProps = {
  project: Item;
};

export default function ProjectPageComponent({ project }: ProjectPageProps) {
  return (
    <div>
      ({project.id})<div>{project.name}</div>
      <div>
        <ImageWrapper src={project.thumbnail_full_size} />
      </div>
      <div>{project.description.default}</div>
    </div>
  );
}
