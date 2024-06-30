import { getParsedItem } from '@/api/rest/item';
import Project from '@/app/project/[id]/components/project.server';

export type ProjectPageProps = {
  projectId: string;
};

export default async function ProjectPage({ projectId }: ProjectPageProps) {
  const item = await getParsedItem(projectId);
  return (
    <div className="z-50 col-span-2 h-content overflow-y-scroll">
      <Project item={item} withCloseOption />
    </div>
  );
}
