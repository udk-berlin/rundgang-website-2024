import { GraphQlItem } from '@/types/graphql';

type EventBarProps = {
  event: GraphQlItem;
};

export default async function EventBar({ event }: EventBarProps) {
  return <div>{event.name}</div>;
}
