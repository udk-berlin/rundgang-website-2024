'use client';

import { Suspense } from 'react';
import cx from 'classnames';
import { Context, GraphQlItem } from '@/types/graphql';
import EventBar from './eventBar.server';
import { useCallback, useState } from 'react';

type EventContainerProps = {
  events: GraphQlItem[];
  location: Context;
};

export default function EventContainer({
  location,
  events,
}: EventContainerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div
      onClick={handleClick}
      className="relative mb-border flex w-full flex-wrap justify-start rounded-md ring-2 ring-primary hover:font-bold"
    >
      <div className="w-full cursor-pointer p-border text-lg">
        {location.name}
      </div>

      {isOpen && (
        <Suspense fallback={''}>
          <div
            className={cx(
              'scale-y-0 transition-transform',
              isOpen ? 'border-t-1 w-full scale-y-100' : '',
            )}
          >
            {events.map((event) => (
              <EventBar key={event.id} event={event} />
            ))}
          </div>
        </Suspense>
      )}

      <div
        className={cx(
          'absolute right-2 text-md font-bold transition-transform',
          isOpen ? 'rotate-0' : 'rotate-180',
        )}
      >
        {'^'}
      </div>
    </div>
  );
}
