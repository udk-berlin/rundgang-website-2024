'use client';
import { useRouter } from '@/navigation';
import { EventItem } from '@/types/types';
import Image from '@/components/image';
import { useCallback, useMemo } from 'react';
import cx from 'classnames';
import { useTimelineStore } from '@/lib/stores/timeline';
import { useShallow } from 'zustand/react/shallow';
import { usePathname } from '@/navigation';

type EventBarProps = {
  event: EventItem;
};

export default function EventBar({ event }: EventBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [showThumbnail, setShowThumbnail] = useTimelineStore(
    useShallow((state) => [state.showThumbnail, state.setShowThumbnail]),
  );

  const isOpen = useMemo(
    () => showThumbnail == `${event.id}-${event.start}-${event.end}`,
    [showThumbnail, event],
  );

  const openProject = useCallback(
    (e: any) => {
      if (e.pointerType !== 'touch' || isOpen) {
        if (pathname.endsWith(']')) {
          router.replace(`/timeline/${event.id}`, { scroll: false });
        } else {
          router.push(`/timeline/${event.id}`, { scroll: false });
        }
      } else if (e.pointerType === 'touch' && !isOpen) {
        const scrollContainer = document.getElementById('timetable-container');
        scrollContainer?.scrollTo({ left: event.start, behavior: 'smooth' });
        setShowThumbnail(`${event.id}-${event.start}-${event.end}`);
      }
    },
    [router, event, isOpen, pathname, setShowThumbnail],
  );

  return (
    <div className="relative">
      <div
        onMouseEnter={() =>
          setShowThumbnail(`${event.id}-${event.start}-${event.end}`)
        }
        onMouseLeave={() => setShowThumbnail(false)}
        onPointerUp={openProject}
        onTouchCancel={() => setShowThumbnail(false)}
        id={`event-clickable-${event.id}-${event.start}-${event.end}`}
        className={cx(
          'relative -mt-[2px] h-gridcell cursor-pointer truncate rounded-md border-2 border-primary px-1 leading-10',
          isOpen
            ? 'overflow-x-visible text-clip bg-highlight text-black'
            : 'truncate  bg-secondary',
        )}
        style={{
          marginLeft: event.left,
          width: isOpen ? 'max-content' : event.width + 2,
          minWidth: event.width + 2,
        }}
      >
        {event.name}
      </div>
      <div
        className={cx(
          'absolute bottom-10 left-0 mb-[5px] w-40',
          isOpen ? 'inline' : 'hidden',
        )}
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
