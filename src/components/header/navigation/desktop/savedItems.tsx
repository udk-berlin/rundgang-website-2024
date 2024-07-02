'use client';
import NavigationLink from '@/components/navigationLink';
import { useUIStore } from '@/lib/uiStore';
import { useStore } from 'zustand';

export type SavedItemsProps = {};

export default function SavedItems({}: SavedItemsProps) {
  const numberSaved = useStore(useUIStore, (state) => state.savedItems.length);
  return <NavigationLink href="/saved">{numberSaved}</NavigationLink>;
}
