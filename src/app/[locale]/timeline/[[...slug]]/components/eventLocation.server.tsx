import { Context } from '@/types/graphql';
import { getEventList } from '@/api/rest/events';
import EventContainer from './container';
import EventBar from './eventBar.server';

type EventLocationProps = {
  location: Context;
};

export const revalidate = 0;
export default async function EventLocation({ location }: EventLocationProps) {
  const events = await getEventList(location.id);
  if (events?.length == 0) return;
  return (
    <EventContainer location={location}>
      <div className="border-t-1 w-timeline relative z-30 scale-y-100">
        <div className="py-10">
          {events.map((event) => (
            <EventBar key={event.id} event={event} />
          ))}
        </div>
      </div>
    </EventContainer>
  );
}
