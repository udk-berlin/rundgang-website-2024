import { Context } from '@/types/graphql';
import { getEventList } from '@/api/rest/events';
import EventContainer from './container';
import EventBar from './eventBar.server';
import { TIMES } from '@/api/constants';
import ScrollTo from './scrollTo';

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
      <div className="border-t-1 relative w-[4000px] scale-y-100 transition-transform">
        {TIMES.map((tick) => (
          <TimeScale key={tick[0]} tick={tick} />
        ))}
        <div className="pt-10">
          {events.map((event) => (
            <EventBar key={event.id} event={event} />
          ))}
        </div>
      </div>
      <ScrollTo />
    </EventContainer>
  );
}
