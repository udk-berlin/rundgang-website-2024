'use client';
import { ReactNodeProps } from '@/types/types';
import { Item } from '@/types/item';
import ProjectCard from '@/app/program/components/project/card.server';
import { useAppStore } from '@/lib/useAppContext';

export type SavedProps = {
  items: Item[];
};

export default function Saved({ items }: SavedProps) {
  const savedItems = useAppStore((state) => state.savedItems);
  return (
    <SavedContainer>
      {items
        .filter((item) => savedItems.includes(item.id))
        .map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
    </SavedContainer>
  );
}

function SavedContainer({ children }: ReactNodeProps) {
  return (
    <div className="col-span-1 h-full columns-1 gap-0 bg-secondary xs:col-span-2 xs:columns-2 md:col-span-5 md:columns-5">
      {children}
    </div>
  );
}