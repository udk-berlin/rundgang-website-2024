import { getParsedItem } from '@/api/rest/item';
import SelectedProject from '@/components/project/detail/selectedProject';

export type ProjectPageProps = {
  projectId: string;
};

export default async function ProjectPage({ projectId }: ProjectPageProps) {
  const item = await getParsedItem(decodeURIComponent(projectId));

  return (
    <div className="z-50 col-span-2 h-content overflow-y-scroll">
      <SelectedProject item={item} />
    </div>
  );
}
