import { getParsedItem } from '@/api/rest/item';
import Project from '@/app/program/@selected/(..)project/[id]/components/project.client';
import { getGraphQLItem } from '@/api/graphql/item';

export type PageProps = {
  params: { id: string };
};

export default async function Page({ params }: PageProps) {
  const id = decodeURIComponent(params.id);
  const item = await getParsedItem(id);
  const graphQlItem = await getGraphQLItem({ id });
  item.descriptions = graphQlItem.descriptions;

  return <Project item={item} />;
}
