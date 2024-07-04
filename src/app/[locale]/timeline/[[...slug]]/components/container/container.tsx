'use client';

import { MouseEventHandler, ReactNode, useMemo } from 'react';
import { Context } from '@/types/graphql';
import { useCallback, useState } from 'react';
import EventContainerHeader from '@/app/timeline/[[...slug]]/components/container/header';
import EventContainerContent from '@/app/timeline/[[...slug]]/components/container/content';
import { useTimelineStore } from '@/lib/stores/timeline';
import { useShallow } from 'zustand/react/shallow';

type EventContainerProps = {
  location: Context;
  children: ReactNode;
};

export default function EventContainer({
  location,
  children,
}: EventContainerProps) {
  const [isLocationOpen, setIsOpen, setShowThumbnail] = useTimelineStore(
    useShallow((state) => [
      state.isOpen,
      state.setIsOpen,
      state.setShowThumbnail,
    ]),
  );
  const isOpen = useMemo(
    () => isLocationOpen == location.id,
    [isLocationOpen, location.id],
  );

  const [isClose, setIsClose] = useState(false);

  const onClick = useCallback(() => {
    if (isOpen) {
      setIsClose(true);
      setIsOpen(false);
    } else {
      setIsOpen(location.id);
    }
  }, [isOpen, setIsOpen, location.id]);

  const onOutsideClick = useCallback(
    (e: any) => {
      if (!e.target.id.startsWith('event')) {
        setShowThumbnail(false);
      }
    },
    [setShowThumbnail],
  );

  return (
    <div
      className="relative flex w-timeline flex-wrap justify-start"
      onClick={onOutsideClick}
    >
      <EventContainerHeader
        key="header"
        location={location}
        isOpen={isOpen}
        onClick={onClick}
      />
      <EventContainerContent key="content" isOpen={isOpen} isClose={isClose}>
        {children}
      </EventContainerContent>
    </div>
  );
}
