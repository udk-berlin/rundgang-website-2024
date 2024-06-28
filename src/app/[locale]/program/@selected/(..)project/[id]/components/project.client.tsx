"use client"
import ProjectServer from '@/app/project/[id]/components/project.server';
import {useEffect} from "react";
import {Item} from "@/types/item";
import {ReactNodeProps} from "@/types/types";
import {useSelectedStore} from "@/lib/selectedStore";
import {useStore} from "zustand";

export type ProjectsPageProps = {
    item: Item;
};

export default async function Project({ item }: ProjectsPageProps) {
    const setIsSelected = useStore(useSelectedStore(), (state) => state.setIsSelected);

    useEffect(() => {
        const contentEl = window.document.getElementById('movable-content');
        if (contentEl) {
            contentEl.style.left = '-40vw';
        }
        setIsSelected(true)
    }, []);

  return (
      <ProjectContainer>
          <ProjectServer item={item} />
      </ProjectContainer>
  );
}

function ProjectContainer({ children }: ReactNodeProps) {
    return (
        <div className="col-span-2 md:col-span-1 order-3 w-full">
            <div className="fixed max-h-content min-h-content h-content overflow-y-scroll w-[40vw] md:w-[40vw]">
                {children}
            </div>
        </div>
    );
}