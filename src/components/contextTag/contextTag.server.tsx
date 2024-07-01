'use server';
import { ItemContext } from '@/types/item';
import { useTranslations } from 'next-intl';

export type ContextTagProps = {
  context: ItemContext;
};

export default async function ContextTag({ context }: ContextTagProps) {
  const t = useTranslations();
  let nameDescription;

  if (context.template === 'location-level') {
    nameDescription = t('level');
  } else if (context.template === 'location-room') {
    nameDescription = t('room');
  }

  return (
    <div className="w-fit max-w-full">
      <div className="relative w-fit max-w-full truncate rounded-md border-white bg-secondary px-[13px] py-[8px] text-xxs text-primary ring-2 ring-primary">
        {nameDescription ? `${nameDescription}: ` : ''} {context.name}
      </div>
    </div>
  );
}
