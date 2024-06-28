import { ProjectCardProps } from '@/components/project/card.server';
import {Link} from "@/navigation";

export default function ProjectCardAuthors({ item }: ProjectCardProps) {
  if (item.authors.length === 0) {
    return <></>;
  }

  return (
      <Link
          href={{
            pathname: `/project/[id]`,
            params: { id: item.id },
          }}
          className="w-full max-w-full"
      >
        <div className="pb-gutter-md text-right text-xs">
          {item.authors?.join(' ')}
        </div>
      </Link>
  );
}
