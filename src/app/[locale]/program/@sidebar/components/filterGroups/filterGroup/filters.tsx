'use server';
import FilterTag from '@/components/filterTag';
import {Filter, ReactNodeProps} from '@/types/types';

export type SidebarFilterGroupFiltersProps = {
  filters: Filter[];
};

export default async function SidebarFilterGroupFilters({ filters }: SidebarFilterGroupFiltersProps) {
  return (
      <SidebarFilterGroupFiltersContainer>
          {filters.map((item) => (
              <FilterTag
                  key={item.id}
                  filter={item}
                  disabled={!item.exists}
              />
          ))}
      </SidebarFilterGroupFiltersContainer>
  );
}

function SidebarFilterGroupFiltersContainer({ children }: ReactNodeProps) {
    return (
        <div className="w-full bg-primary border-l-[1px] border-r-[1px] border-t-border">
            <div className="flex flex-col gap-border w-full">
                {children}
            </div>
        </div>
    );
}