import { getExistingFilters } from '@/api/rest/filters';
import { ReactNodeProps } from '@/types/types';
import { Item } from '@/types/item';
import ProgramSidebarContextGroups from '@/app/program/components/sidebar/contextGroups/groups';

export type ProgramSidebarProps = {
  searchParams: { [key: string]: string | string[] | undefined };
  items: Item[];
};

export const revalidate = 3600;

export default async function ProgramSidebar({
  searchParams,
  items,
}: ProgramSidebarProps) {
  const contextGroups = await getExistingFilters(items, searchParams);
  return (
    <ProgramSidebarContainer>
      <ProgramSidebarContextGroups contextGroups={contextGroups} />
    </ProgramSidebarContainer>
  );
}

function ProgramSidebarContainer({ children }: ReactNodeProps) {
  return (
    <div className="order-3 col-span-2 md:order-1 md:col-span-1">
      <div className="fixed h-content max-h-content min-h-content w-[66.666vw] overflow-y-auto bg-primary md:w-[20vw]">
        <div className="h-content-header max-h-content-header min-h-content-header" />
        {children}
      </div>
    </div>
  );
}
