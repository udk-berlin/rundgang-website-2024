'use client';
import NavigationLink from '@/components/navigationLink';
import usePersistedUIStore from '@/lib/uiStore';

export type SavedItemsProps = {};

export default function SavedItems({}: SavedItemsProps) {
  const numberSaved = usePersistedUIStore((state) => state.savedItems.length);
  return <NavigationLink href="/saved">{numberSaved}</NavigationLink>;
}
