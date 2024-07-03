import { ItemContext, ItemFilterableContext } from '@/types/item';
import { Link } from '@/navigation';
import ContextTagPlain from '@/components/contextTag/plain.server';
import cx from 'classnames';

export type ContextTagLinkProps = {
  context: ItemContext | ItemFilterableContext;
  withBorder?: boolean;
};

export default function ContextTagLink({
  context,
  withBorder = false,
}: ContextTagLinkProps) {
  const searchQuery =
    'searchParam' in context
      ? `?${context.searchParam}=${encodeURI(context.id)}`
      : '';

  return (
    <Link href={`/program${searchQuery}`}>
      <ContextTagPlain
        className="md:hover:bg-highlight md:hover:text-black"
        context={context}
        withBorder={withBorder}
      />
    </Link>
  );
}
