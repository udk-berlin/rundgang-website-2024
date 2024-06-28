import { ProjectCardProps } from '@/components/project/card.server';
import {Link} from "@/navigation";

export default function ProjectCardName({ item }: ProjectCardProps) {
  return (
      <Link
          href={{
            pathname: `/project/[id]`,
            params: { id: item.id },
          }}
          className="w-full max-w-full"
      >
        <div className="py-gutter-md text-sm">{item.name}</div>
      </Link>
  );
}
