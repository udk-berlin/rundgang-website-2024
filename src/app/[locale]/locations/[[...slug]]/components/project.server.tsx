import { getParsedItem } from '@/api/rest/item';
import SelectedProject from '@/components/project/detail/selectedProject';

export type ProjectPageProps = {
  projectId: string;
};

export default async function ProjectPage({ projectId }: ProjectPageProps) {
  const item = await getParsedItem(decodeURIComponent(projectId));

  return (
    <div className="fixed left-0 top-header z-40 col-span-2 h-content max-h-content min-h-content w-full overflow-y-scroll border-l-border sm:relative sm:top-0">
      <SelectedProject item={item} />
    </div>
  );
}
