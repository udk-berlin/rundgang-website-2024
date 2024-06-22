'use client';
import cx from 'classnames';
import { useCallback, useEffect } from 'react';
import { ReactSVG } from 'react-svg';

export default function Rooms({ location }: any) {
  console.log(
    cx(
      'absolute left-0 top-0 h-fit w-full fill-highlight',
      location.margin,
      ...location.rooms.map(
        (room) => `[&_[data-name="${room.name}"]]:fill-white`,
      ),
    ),
  );

  useEffect(() => {
    let roomRect = document.querySelectorAll(`[data-id="${location.room}"]`)[0];
    if (roomRect) {
      roomRect.style.fill = '#fff';
    }
  }, [location.room]);

  const handleSelectRoom = useCallback(
    (e) => {
      console.log(e.target);
    },
    [location.room, location.rooms],
  );
  return (
    location.floorplan && (
      <ReactSVG
        src={location.floorplan}
        className={cx(
          'absolute left-0 top-0 h-fit w-full fill-highlight',
          location.margin,
          location.rooms
            .map((room) => `[&_[data-name="${room.name}"]]:fill-white`)
            .join(' '),
          `[&_[data-name="${location.room.name}"]]:fill-black`,
        )}
        onClick={handleSelectRoom}
      />
    )
  );
}
