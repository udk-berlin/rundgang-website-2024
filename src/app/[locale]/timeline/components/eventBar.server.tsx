'use client';
import { EventItem } from '@/types/types';

type EventBarProps = {
  event: EventItem;
};

export default function EventBar({ event }: EventBarProps) {
  return (
    <div className="relative flex h-fit flex-wrap justify-start">
      <div
        className="h-10 cursor-pointer truncate text-ellipsis rounded-md border-2 bg-secondary leading-10"
        title={event.name}
        style={{
          width: event.width,
          marginLeft: event.left,
        }}
      >
        {event.name}
      </div>
    </div>
  );
}
