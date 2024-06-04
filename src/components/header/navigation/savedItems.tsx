'use client';
import { useAppStore } from '@/lib/useAppContext';
import NavigationLink from '@/components/navigationLink';

export type SavedItemsProps = {};

export default function SavedItems({}: SavedItemsProps) {
  const numberSaved = useAppStore((state) => state.savedItems.length);
  return <NavigationLink href="/saved">{numberSaved}</NavigationLink>;
}
