import { getEventLocations } from '@/api/rest/events';
import TimeScale from './scale';
import { ScrollBackwardButton, ScrollForwardButton } from './scrollTo';
import Days from './days';
import TimeGrid from './grid';
import EventLocation from './eventLocation.server';
import EventContainer from './container';

export const revalidate = 0;
export default async function TimeTable() {
  const items = await getEventLocations();

  return (
    <div
      className="relative h-fit w-screen overflow-x-scroll "
      id="timetable-container"
    >
      <Days />
      <TimeScale />
      <TimeGrid />
      {items.map((eventLocation) => (
        <EventContainer key={eventLocation.id} location={eventLocation}>
          <EventLocation location={eventLocation} />
        </EventContainer>
      ))}
      <ScrollForwardButton />
      <ScrollBackwardButton />
    </div>
  );
}
