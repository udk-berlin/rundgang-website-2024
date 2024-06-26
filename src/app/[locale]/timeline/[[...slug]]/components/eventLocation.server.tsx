import { Context } from '@/types/graphql';
import { getEventList } from '@/api/rest/events';
import EventBar from './eventBar.server';

type EventLocationProps = {
  location: Context;
};

export const revalidate = 100;
export default async function EventLocation({ location }: EventLocationProps) {
  const events = await getEventList(location.id);
  if (events?.length == 0) return;
  return (
    <div className="border-t-1 relative z-30 w-timeline scale-y-100">
      <div className="py-10">
        {events.map((event) => (
          <EventBar key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
