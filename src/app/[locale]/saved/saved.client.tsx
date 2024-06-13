'use client';
import { useTranslations } from 'next-intl';
import { ReactNodeProps } from '@/types/types';
import { Item } from '@/types/item';
import ProjectCard from '@/app/program/components/project/card.server';
import usePersistedUIStore from '@/lib/uiStore';

export type SavedProps = {
  items: Item[];
};

export default function Saved({ items }: SavedProps) {
  const savedItems = usePersistedUIStore((state) => state.savedItems);
  const t = useTranslations('Saved');

  return (
    <div className="w-full">
      <div className="w-full p-gutter-sm text-left text-lg">
        {t('saved_items')}
      </div>
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
    <div className="col-span-1 h-full columns-1 gap-0 bg-secondary xs:col-span-2 xs:columns-2 md:col-span-5 md:columns-5">
      {children}
    </div>
  );
}
