import { getExistingGraphQLFilters } from '@/api/graphql/filters';
import { ReactNodeProps } from '@/types/types';
import { Item } from '@/types/item';
import ProgramFiltersGroups from '@/app/program/components/filters/groups/groups';

export type FilterSideBarProps = {
  searchParams: { [key: string]: string | string[] | undefined };
  items: Item[];
};

export const revalidate = 0;

export default async function ProgramFilters({
  searchParams,
  items,
}: FilterSideBarProps) {
  const filters = await getExistingGraphQLFilters(items, searchParams);

  return (
    <ProgramFiltersContainer>
      <ProgramFiltersGroups filters={filters} />
    </ProgramFiltersContainer>
  );
}

function ProgramFiltersContainer({ children }: ReactNodeProps) {
  return (
    <div className="order-3 col-span-2 md:order-1 md:col-span-1">
      <div className="fixed h-content max-h-content min-h-content w-[66.666vw] overflow-y-auto bg-primary md:w-[20vw]">
        <div className="h-content-header max-h-content-header min-h-content-header" />
        {children}
      </div>
    </div>
  );
}
