import { getFilteredGraphQLItems } from '@/api/graphql/items';
import { getExistingGraphQLFilters } from '@/api/graphql/filters';
import SidebarFilterGroups from "@/app/program/@sidebar/components/filterGroups/filterGroups";
import SidebarContainer from "@/app/program/@sidebar/components/container.client";

export type FilterSideBarProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const revalidate = 0;

export default async function Sidebar({
  searchParams,
}: FilterSideBarProps) {
  const items = await getFilteredGraphQLItems(searchParams);
  const filters = await getExistingGraphQLFilters(items, searchParams);
  return (
      <SidebarContainer>
        <SidebarFilterGroups filters={filters} />
      </SidebarContainer>
  );
}
