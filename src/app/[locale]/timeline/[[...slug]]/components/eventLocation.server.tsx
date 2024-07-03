import { Context } from '@/types/graphql';
import { getEventList } from '@/api/rest/events';
import EventBar from './eventBar.server';

type EventLocationProps = {
  location: Context;
};

export const revalidate = 0;
export default async function EventLocation({ location }: EventLocationProps) {
  const events = await getEventList(location.id);
  if (events?.length == 0) return;
  return (
    <div className="relative z-20 w-timeline border-x-border border-b-border">
      <div className="py-10">
        {events.map((event) => (
          <EventBar key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
