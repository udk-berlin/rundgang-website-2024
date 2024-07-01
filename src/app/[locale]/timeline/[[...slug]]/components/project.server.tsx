import { getGraphQLItem } from '@/api/graphql/item';
import { getParsedItem } from '@/api/rest/item';
import Project from '@/app/project/[id]/components/project.server';
import { Suspense } from 'react';

export type ProjectPageProps = {
  projectId: string;
};

export default async function ProjectPage({ projectId }: ProjectPageProps) {
  const id = decodeURIComponent(projectId);
  const item = await getParsedItem(id);
  const graphQlItem = await getGraphQLItem({ id });
  item.descriptions = graphQlItem.descriptions;
  item.languages = graphQlItem.languages;
  return (
    <div className="fixed right-0 top-[130px] z-50 h-timeline w-full overflow-y-scroll rounded-md border-l-2 border-primary sm:w-2/5">
      <Suspense fallback={'Loading'}>
        <Project item={item} withCloseOption />
      </Suspense>
    </div>
  );
}
