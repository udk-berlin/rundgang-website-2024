'use client';

import { ReactNode } from 'react';
import { Context } from '@/types/graphql';
import { useCallback, useState } from 'react';
import EventContainerHeader from '@/app/timeline/[[...slug]]/components/container/header';
import EventContainerContent from '@/app/timeline/[[...slug]]/components/container/content';

type EventContainerProps = {
  location: Context;
  children: ReactNode;
};

export default function EventContainer({
  location,
  children,
}: EventContainerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);

  const onClick = useCallback(() => {
    if (isOpen) {
      setIsClose(true);
    }
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div className="relative flex w-timeline flex-wrap justify-start">
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
