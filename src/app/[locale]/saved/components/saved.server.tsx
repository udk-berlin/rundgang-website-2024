import { ReactNodeProps } from '@/types/types';
import { Item } from '@/types/item';
import JumpToTop from '@/components/jumpToTop';
import SavedProjects from '@/app/saved/components/projects.client';
import SavedHeader from '@/app/saved/components/header/header.server';

export type SavedProps = {
  items: Item[];
};

export default function Saved({ items }: SavedProps) {
  return (
    <SavedContainer>
      <SavedHeader />
      <SavedProjects items={items} />
      <JumpToTop />
    </SavedContainer>
  );
}

function SavedContainer({ children }: ReactNodeProps) {
  return (
    <main className="h-content max-h-content min-h-content w-screen bg-primary">
      {children}
    </main>
  );
}
