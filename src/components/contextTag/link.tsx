import { ItemFilterableContext } from '@/types/item';
import ContextTag from '@/components/contextTag/contextTag.server';
import { Link } from '@/navigation';

export type ContextTagLinkProps = {
  context: ItemFilterableContext;
};

export default function ContextTagLink({ context }: ContextTagLinkProps) {
  return (
    <Link href={`/program?${context.searchParam}=${encodeURI(context.id)}`}>
      <ContextTag context={context} />
    </Link>
  );
}
