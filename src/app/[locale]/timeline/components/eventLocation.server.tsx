import { Context } from '@/types/graphql';
import { getEventList } from '@/api/rest/events';
import EventContainer from './container';
type EventLocationProps = {
  location: Context;
};

export const revalidate = 5000;
export default async function EventLocation({ location }: EventLocationProps) {
  const events = await getEventList(location.id);
  if (events?.length == 0) return;

  return <EventContainer events={events} location={location} />;
}
