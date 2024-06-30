import { getParsedItem } from '@/api/rest/item';
import { getGraphQLItem } from '@/api/graphql/item';
import ProgramSelectedProject from '@/app/program/@selected/(..)project/[id]/components/project.server';
import ProgramSelectedProjectEffect from '@/app/program/@selected/(..)project/[id]/components/effect.client';

export type PageProps = {
  params: { id: string };
};

export default async function Page({ params }: PageProps) {
  const id = decodeURIComponent(params.id);
  const item = await getParsedItem(id);
  const graphQlItem = await getGraphQLItem({ id });
  item.descriptions = graphQlItem.descriptions;
  item.languages = graphQlItem.languages;

  return (
    <>
      <ProgramSelectedProjectEffect />
      <ProgramSelectedProject item={item} />
    </>
  );
}
