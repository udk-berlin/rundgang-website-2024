'use client';
import NavigationLink from '@/components/navigationLink';
import { useUIStore } from '@/lib/uiStore';
import { useStore } from 'zustand';

export type SavedItemsProps = { isLast?: boolean };

export default function SavedItems({ isLast }: SavedItemsProps) {
  const numberSaved = useStore(useUIStore, (state) => state.savedItems.length);
  return (
    <NavigationLink isLast={isLast} href="/saved">
      {numberSaved}
    </NavigationLink>
  );
}
