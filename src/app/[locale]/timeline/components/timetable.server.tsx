import { getEventLocations } from '@/api/rest/events';
import EventLocation from './eventLocation.server';

export const revalidate = 5000;
export default async function TimeTable() {
  const items = await getEventLocations();

  return (
    <div className="w-full px-[2px]">
      {items.map((eventLocation) => (
        <EventLocation key={eventLocation.id} location={eventLocation} />
      ))}
    </div>
  );
}
