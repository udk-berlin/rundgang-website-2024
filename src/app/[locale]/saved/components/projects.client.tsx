'use client';

import { ReactNodeProps } from '@/types/types';
import { useUIStore } from '@/lib/uiStore';
import { useStore } from 'zustand';
import ProjectCard from '@/components/project/card/card.server';
import { SavedProps } from '@/app/saved/components/saved.server';

export default function SavedProjects({ items }: SavedProps) {
  const savedItems = useStore(useUIStore, (state) => state.savedItems);
  return (
    <SavedProjectsContainer>
      {items
        .filter((item) => savedItems.includes(item.id))
        .map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
    </SavedProjectsContainer>
  );
}

function SavedProjectsContainer({ children }: ReactNodeProps) {
  return (
    <div className="grid max-h-content-body w-full grid-cols-2 gap-border overflow-y-auto border-x-border bg-primary md:grid-cols-5">
      {children}
    </div>
  );
}
