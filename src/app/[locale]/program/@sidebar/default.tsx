import Filters from '@/components/filters';
import { getFilteredGraphQLItems } from '@/api/graphql/items';
import { getExistingGraphQLFilters } from '@/api/graphql/filters';

export type FilterSideBarProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const revalidate = 0;

export default async function FilterSideBar({
  searchParams,
}: FilterSideBarProps) {
  const items = await getFilteredGraphQLItems(searchParams);
  const filters = await getExistingGraphQLFilters(items, searchParams);

  return <Filters filters={filters} />;
}
