'use server'
import {Filters, ReactNodeProps} from '@/types/types';
import SidebarFilterGroup from "@/app/program/@sidebar/components/filterGroups/filterGroup/filterGroup";


const filterGroupFetchers: {
    translation: 'format' | 'faculty' | 'language' ,
    data: 'formats' | 'faculties' | 'languages',
}[] = [
    {translation: 'format', data: 'formats'},
    {translation: 'faculty', data: 'faculties'},
    {translation: 'language', data: 'languages'}
]

export default async function SidebarFilterGroups({ filters }: { filters: Filters }) {
  return (
    <SidebarFilterGroupsContainer>
        {filterGroupFetchers.map((fetcher) => <SidebarFilterGroup translation={fetcher.translation} filters={filters[fetcher.data]} />)}
    </SidebarFilterGroupsContainer>
  );
}

function SidebarFilterGroupsContainer({ children }: ReactNodeProps) {
    return (
        <>
            <div className="max-h-content-header min-h-content-header h-content-header" />
            <div className="bg-primary min-h-content-body border-r-border border-l-0 md:border-l-border md:brder-r-[1px] w-full">
                {children}
            </div>
        </>
    );
}
