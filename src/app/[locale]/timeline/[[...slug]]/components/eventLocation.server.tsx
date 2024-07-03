import { Context } from '@/types/graphql';
import { getEventList } from '@/api/rest/events';
import EventBar from './eventBar.server';

type EventLocationProps = {
  location: Context;
};

export const revalidate = 360;
export default async function EventLocation({ location }: EventLocationProps) {
  const events = await getEventList(location.id);
  if (events?.length == 0) return;
  return (
    <div className="relative z-20 w-timeline ring-[1px] ring-inset ring-primary">
      <div className="py-10">
        {events.map((event) => (
          <EventBar key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
