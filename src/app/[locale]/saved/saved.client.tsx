'use client';
import { useTranslations } from 'next-intl';
import { ReactNodeProps } from '@/types/types';
import { Item } from '@/types/item';
import ProjectCard from '@/components/project/card.server';
import { useUIStore } from '@/lib/uiStore';
import { useStore } from 'zustand';
import JumpToTop from '@/components/jumpToTop';
import SavedHeader from './savedheader';

export type SavedProps = {
  items: Item[];
};

export default function Saved({ items }: SavedProps) {
  const savedItems = useStore(useUIStore, (state) => state.savedItems);
  const t = useTranslations('Saved');
  return (
    <div className="w-full">
      <SavedContainer>
        {items
          .filter((item) => savedItems.includes(item.id))
          .map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
      </SavedContainer>
    </div>
  );
}

function SavedContainer({ children }: ReactNodeProps) {
  return (
    <div className="z-50 -ml-xs h-content max-h-content min-h-content overflow-y-scroll bg-primary">
      <SavedHeader />
      <div className="grid max-h-fit min-h-content w-full columns-5 items-start justify-start gap-border bg-primary px-border md:grid-cols-4">
        {children}
      </div>
      <JumpToTop />
    </div>
  );
}
