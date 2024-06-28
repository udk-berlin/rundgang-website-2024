import FilterBar from '@/components/filterBar';
import {ReactNode} from "react";
import {ReactNodeProps} from "@/types/types";

export type ProgramLayoutProps = {
    children: ReactNode;
    selected: ReactNode;
    sidebar: ReactNode;
}

export default function Layout({
  children,
  selected,
  sidebar,
}: ProgramLayoutProps) {
  return (
    <LayoutContainer>
        <FilterBar />
        <div id="movable-content"
             className="fixed left-[0vw] max-h-content min-h-content h-content w-screen overflow-hidden transition-[left] duration-700 md:left-0">
            <div className="grid w-[166.666vw] grid-cols-5 md:grid-cols-7 md:w-[140vw]">
                {children}
                {sidebar}
                {selected}
            </div>
        </div>
    </LayoutContainer>
  );
}

function LayoutContainer({ children }: ReactNodeProps) {
    return (
        <main className="relative h-content max-h-content min-h-content flex flex-col">
            {children}
        </main>
    );
}
