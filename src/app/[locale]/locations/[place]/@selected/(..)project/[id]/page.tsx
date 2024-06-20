import Project from '@/app/project/[id]/components/project.server';
import { getParsedItem } from '@/api/rest/item';

export type ProjectsPageProps = {
  params: { id: string };
};

export default async function ProjectSide({ params }: ProjectsPageProps) {
  const item = await getParsedItem(params.id);
  return (
    <div className="h-locations absolute right-0 top-[var(--header-height)] w-2/5 overflow-y-scroll bg-secondary text-primary">
      <Project item={item} />
    </div>
  );
}
