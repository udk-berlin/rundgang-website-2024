import { getParsedItem } from '@/api/rest/item';
import { Suspense } from 'react';
import SelectedProject from '@/components/project/detail/selectedProject';

export type ProjectPageProps = {
  projectId: string;
};

export default async function ProjectPage({ projectId }: ProjectPageProps) {
  const item = await getParsedItem(decodeURIComponent(projectId));

  return (
    <div className="fixed right-0 top-header z-40 h-content w-full overflow-y-scroll border-l-2 border-primary sm:w-2/5">
      <Suspense fallback={'Loading'}>
        <SelectedProject item={item} />
      </Suspense>
    </div>
  );
}
