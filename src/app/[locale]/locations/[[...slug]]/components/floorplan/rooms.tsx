'use client';
import { useRouter } from '@/navigation';
import { useCallback, useEffect } from 'react';
import { ReactSVG } from 'react-svg';

export default function Rooms({ location }: any) {
  const router = useRouter();
  const handleSelectRoom = useCallback(
    (e: MouseEvent) => {
      let room = location.rooms.find((r) => r.name == e?.target?.dataset?.name);
      router.push(`/locations/${room?.id}`, { scroll: false });
    },
    [location.rooms, router],
  );
  return (
    location.level && (
      <ReactSVG
        src={location.level?.thumbnail_full_size}
        className="absolute left-0 top-0 aspect-square w-full object-contain"
        onClick={handleSelectRoom}
        afterInjection={(svg) => {
          svg.classList.add('w-full', 'aspect-square');
          location.level.context.map((room) => {
            let roomRect = svg.querySelectorAll(
              `[data-name="${room.name}"]`,
            )[0];
            if (roomRect) {
              if (room?.id == location.room?.id) {
                roomRect.classList.add(
                  'fill-white',
                  'stroke-black',
                  'stroke-[10px]',
                );
              } else if (location.rooms?.find((r) => r.id == room.id)) {
                roomRect.classList.add(
                  'fill-black',
                  'cursor-pointer',
                  'hover:fill-white',
                  'stroke-white',
                  'stroke-[10px]',
                );
              } else {
                roomRect.classList.add('fill-highlight', 'pointer-events-none');
              }
            }
          });
        }}
      />
    )
  );
}
