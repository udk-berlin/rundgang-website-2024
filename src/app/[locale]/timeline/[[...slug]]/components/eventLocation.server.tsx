import { Context } from '@/types/graphql';
import { getEventList } from '@/api/rest/events';
import EventLine from './eventLine';

type EventLocationProps = {
  location: Context;
};

export const revalidate = 600;
export default async function EventLocation({ location }: EventLocationProps) {
  const events = await getEventList(location.id);

  if (Object.values(events)?.length == 0) return <></>;
  return (
    <div className="relative z-20 w-timeline border-x-border border-b-border">
      <div className="py-10">
        {Object.entries(events).map(([key, subevents]) => (
          <EventLine key={key} k={key} events={subevents} />
        ))}
      </div>
    </div>
  );
}
