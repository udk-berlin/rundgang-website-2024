import { ProjectCardProps } from '@/components/project/card.server';
import { ReactNodeProps } from '@/types/types';
import { Link } from '@/navigation';

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
    >
      <ProjectCardAuthorsContainer>
        {item.authors.join(' ')}
      </ProjectCardAuthorsContainer>
    </Link>
  );
}

function ProjectCardAuthorsContainer({ children }: ReactNodeProps) {
  return (
    <div className="px-gutter-md pb-gutter-md text-right text-xs">
      {children}
    </div>
  );
}
