'use client';
import { Link } from '@/navigation';
import { EventItem } from '@/types/types';
import Image from '@/components/image';

type EventBarProps = {
  event: EventItem;
};

export default function EventBar({ event }: EventBarProps) {
  return (
    <div className="relative flex h-fit flex-wrap justify-start overflow-visible">
      <Link
        href={`timeline/${event.id}`}
        className="peer -mt-[2px] h-gridcell cursor-pointer truncate rounded-md border-2 bg-secondary px-1 leading-10"
        title={event.name}
        style={{
          width: event.width + 2,
          marginLeft: event.left,
        }}
      >
        {event.name}
      </Link>
      <div
        className="pointer-events-none absolute bottom-0 left-0 hidden h-gridcell cursor-pointer rounded-md border-2 bg-secondary px-1 leading-10 peer-hover:block peer-hover:bg-highlight peer-hover:text-black"
        style={{
          marginLeft: event.left,
          minWidth: event.width + 2,
        }}
      >
        {event.name}
      </div>
      <div
        className="absolute bottom-10 left-0 hidden w-40 peer-hover:inline"
        style={{
          marginLeft: event.left,
        }}
      >
        <Image
          src={event.thumbnail}
          className="rounded-md border-2 border-b-0 border-primary"
          alt="thumbnail"
        />
      </div>
    </div>
  );
}
