'use client';
import NavigationLink from '@/components/navigationLink';
import { useUIStore } from '@/lib/uiStore';
import { useEffect, useRef, useState } from 'react';
import { useStore } from 'zustand';
import cx from 'classnames';

export type SavedItemsProps = { isLast?: boolean };

export default function SavedItems({ isLast }: SavedItemsProps) {
  const numberSaved = useStore(useUIStore, (state) => state.savedItems.length);
  const [ping, setPing] = useState(0);
  const timer = useRef<number | NodeJS.Timeout>();

  useEffect(() => {
    if (numberSaved - 1 > ping) {
      setPing(numberSaved);
      timer.current = setTimeout(() => setPing(numberSaved - 1), 3000);
    } else {
      setPing(numberSaved - 1);
    }
    return () => clearTimeout(timer.current);
  }, [numberSaved]);

  return (
    <NavigationLink
      isLast={isLast}
      href="/saved"
      className={cx(ping == numberSaved ? 'animate-saved' : '')}
    >
      {numberSaved}
    </NavigationLink>
  );
}
