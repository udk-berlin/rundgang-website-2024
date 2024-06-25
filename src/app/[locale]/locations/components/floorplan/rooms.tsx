'use client';
import { useRouter } from '@/navigation';
import cx from 'classnames';
import { useCallback, useEffect } from 'react';
import { ReactSVG } from 'react-svg';

export default function Rooms({ location }: any) {
  const router = useRouter();
  const handleSelectRoom = useCallback(
    (e: MouseEvent<HTMLWrapperType, MouseEvent>) => {
      let room = location.rooms.find((r) => r.name == e?.target?.dataset?.name);
      router.push(`/locations/${room?.id}`);
    },
    [location.rooms],
  );
  return (
    location.level && (
      <ReactSVG
        src={location.level?.thumbnail_full_size}
        className={cx('absolute left-0 top-0 h-fit w-full', location.margin)}
        onClick={handleSelectRoom}
        afterInjection={(svg) => {
          location.level.context.map((room) => {
            let roomRect = svg.querySelectorAll(
              `[data-name="${room.name}"]`,
            )[0];
            if (roomRect) {
              console.log('here');
              if (room?.id == location.room?.id) {
                roomRect.classList.add('fill-white');
              } else if (location.rooms?.find((r) => r.id == room.id)) {
                roomRect.classList.add(
                  'fill-black',
                  'cursor-pointer',
                  'hover:fill-white',
                  'stroke-white',
                  'stroke-[10px]',
                );
                roomRect.title = room.name;
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
