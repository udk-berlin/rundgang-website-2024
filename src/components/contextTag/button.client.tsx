'use client';
import { useCallback } from 'react';
import cx from 'classnames';
import useQuery from '@/lib/useQuery';
import { ItemContext, ItemFilterableContext } from '@/types/item';
import ContextTagPlain from '@/components/contextTag/plain.server';
import { useSearchParams } from 'next/navigation';

export type FilterTagProps = {
  context: ItemContext | ItemFilterableContext;
  withBorder?: boolean;
};

export default function ContextTagButton({
  context,
  withBorder = false,
}: FilterTagProps) {
  const searchParams = useSearchParams();
  const selectedId =
    'searchParam' in context ? searchParams.get(context.searchParam) : null;
  const isSelected = selectedId == context.id;

  const { changeParameter } = useQuery(
    'searchParam' in context ? context.searchParam : '',
  );

  const onClick = useCallback(() => {
    changeParameter(context.id);
  }, [context.id, changeParameter]);

  return (
    <div
      onClick={onClick}
      className={cx(
        'w-fit max-w-full cursor-pointer',
        'exists' in context &&
          !context.exists &&
          'pointer-events-none opacity-35',
      )}
    >
      <ContextTagPlain
        className={
          isSelected
            ? '!bg-highlight !text-black'
            : 'md:hover:bg-highlight md:hover:text-black'
        }
        context={context}
        withBorder={withBorder}
      />
    </div>
  );
}
