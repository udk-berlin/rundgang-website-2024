import Project from '@/app/project/[id]/components/project.server';
import { getParsedItem } from '@/api/rest/item';
import { Link } from '@/navigation';

export type ProjectsPageProps = {
  params: { id: string };
};

export default async function ProjectSide({ params }: ProjectsPageProps) {
  const item = await getParsedItem(params.id);
  return (
    <div className="absolute right-0 top-[calc(var(--height-header)+var(--height-header))]  w-2/5 scroll-auto bg-secondary text-primary">
      <Project item={item} />
    </div>
  );
}
