'use server';
import { ItemContext } from '@/types/item';

export type ContextTagProps = {
  context: ItemContext;
};

export default async function ContextTag({ context }: ContextTagProps) {
  return (
    <div className="w-fit max-w-full">
      <div className="relative w-fit max-w-full truncate rounded-md border-white bg-secondary px-[13px] py-[8px] text-xxs text-primary ring-2 ring-primary hover:bg-highlight hover:text-black">
        {context.name}
      </div>
    </div>
  );
}
