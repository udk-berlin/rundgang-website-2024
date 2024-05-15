import { Link } from '@/navigation';
import { ProgramItem } from '@/types/graphql';
import ImageWrapper from '@/components/image';
import FilterTag from '@/components/filterTag';
export type ProjectCardProps = {
  item: ProgramItem;
};

export default function ProjectCard({ item }: ProjectCardProps) {
  return (
    <Link
      href={{
        pathname: `/project/[id]`,
        params: { id: item.id },
      }}
      className="inline-block"
    >
      <div className="inline-block max-h-fit w-full border border-primary bg-primary">
        <div className="h-full min-h-fit w-full rounded-md bg-secondary p-2 hover:bg-highlight hover:text-black">
          <div className="relative w-full overflow-hidden bg-highlight">
            <ImageWrapper src={item.thumbnail ?? ''} />
          </div>
          <div className="pt-2 text-md font-bold">{item.name}</div>
          <div className="pt-2 text-right">
            {item.origin.authors
              .map((a) => a.name)
              .slice(0, 5)
              .join(', ')}
          </div>
          <div>
            <FilterTag filter={item.format} />
          </div>
        </div>
      </div>
    </Link>
  );
}
