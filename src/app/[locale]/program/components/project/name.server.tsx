import { ReactNodeProps } from '@/types/types';
import { ProjectCardProps } from '@/app/program/components/project/card.server';
import { Link } from '@/navigation';

export default function ProjectCardName({ item }: ProjectCardProps) {
  return (
    <Link
      href={{
        pathname: `/project/[id]`,
        params: { id: item.id },
      }}
    >
      <ProjectCardNameContainer>{item.name}</ProjectCardNameContainer>
    </Link>
  );
}

function ProjectCardNameContainer({ children }: ReactNodeProps) {
  return <div className="p-gutter-md text-sm leading-[2]">{children}</div>;
}
