import { getParsedItem } from '@/api/rest/item';
import { Suspense } from 'react';
import SelectedProject from '@/components/project/detail/selectedProject';

export type ProjectPageProps = {
  projectId: string;
};

export default async function ProjectPage({ projectId }: ProjectPageProps) {
  const item = await getParsedItem(decodeURIComponent(projectId));

  return (
    <div className="h-timeline fixed right-0 top-[130px] z-50 w-full overflow-y-scroll rounded-md border-l-2 border-primary sm:w-2/5">
      <Suspense fallback={'Loading'}>
        <SelectedProject item={item} />
      </Suspense>
    </div>
  );
}
