import { useAppStore } from '@/lib/useAppContext';

export type SavedItemsProps = {};

export default function SavedItems({}: SavedItemsProps) {
  const numberSaved = useAppStore((state) => state.savedItems.length);
  return (
    <div className="h-full w-1/12 bg-primary md:w-full">
      <div className="h-full content-around rounded-md border border-primary bg-secondary text-center hover:bg-highlight hover:text-black">
        {numberSaved}
      </div>
    </div>
  );
}
