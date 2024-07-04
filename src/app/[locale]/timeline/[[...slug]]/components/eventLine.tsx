'use client';
import { EventItem } from '@/types/types';
import EventBar from './eventBar';

type EventLineProps = {
  events: EventItem[];
  k: any;
};

export default function EventLine({ events, k }: EventLineProps) {
  return (
    <div className="relative flex h-fit justify-start overflow-visible">
      {events.map((ev) => (
        <EventBar key={`${ev.id}-${ev.start}-${ev.end}`} event={ev} />
      ))}
    </div>
  );
}
