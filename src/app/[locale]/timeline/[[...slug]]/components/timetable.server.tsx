import { getEventLocations } from '@/api/rest/events';
import TimeScale from './scale';
import { ScrollBackwardButton, ScrollForwardButton } from './scrollTo';
import TimeGrid from './grid';
import EventLocation from './eventLocation.server';
import EventContainer from '@/app/timeline/[[...slug]]/components/container/container';
import TimelineDays from '@/app/timeline/[[...slug]]/components/days/days';

export const revalidate = 0;
export default async function TimeTable() {
  const items = await getEventLocations();

  return (
    <div className="relative h-content w-full overflow-x-clip overflow-y-scroll">
      <div
        className="relative h-fit w-screen overflow-y-clip overflow-x-scroll"
        id="timetable-container"
      >
        <TimelineDays />
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
    </div>
  );
}
