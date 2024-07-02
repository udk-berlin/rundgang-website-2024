import { getGraphQLItems } from '@/api/graphql/items';
import Saved from '@/app/saved/components/saved.server';

export const revalidate = 0; // revalidate the data at most every hour

export default async function SavedPage() {
  const items = await getGraphQLItems();
  return <Saved items={items} />;
}
