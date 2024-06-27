import { Context } from '@/types/graphql';
import { getEventList } from '@/api/rest/events';
import EventContainer from './container';
import EventBar from './eventBar.server';
import { TIMES } from '@/api/constants';

import TimeScale from './scale';

type EventLocationProps = {
  location: Context;
};

export const revalidate = 0;
export default async function EventLocation({ location }: EventLocationProps) {
  const events = await getEventList(location.id);
  if (events?.length == 0) return;

  return (
    <EventContainer location={location}>
      <>
        <TimeScale ticks={TIMES} />
        <div className="border-t-1 h-full w-[4000px] scale-y-100 transition-transform ">
          {events.map((event) => (
            <EventBar key={event.id} event={event} />
          ))}
        </div>
      </>
    </EventContainer>
  );
}
