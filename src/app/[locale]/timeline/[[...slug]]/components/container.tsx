'use client';

import { ReactNode, Suspense } from 'react';
import cx from 'classnames';
import { Context } from '@/types/graphql';
import { useCallback, useState } from 'react';
import ArrowRight from '@/components/icons/arrowRight';

type EventContainerProps = {
  location: Context;
  children: ReactNode;
};

export default function EventContainer({
  location,
  children,
}: EventContainerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div className="relative flex w-timeline flex-wrap justify-start rounded-md ring-2 ring-inset ring-primary">
      <button
        className="sticky left-0 right-0 top-0 z-20 -my-xs h-gridcell w-max overflow-x-visible rounded-md bg-primary"
        onClick={handleClick}
      >
        <div className="flex h-full w-lvw items-center justify-start rounded-md bg-secondary pl-2 text-lg ring-2 ring-inset ring-primary hover:font-bold">
          {location.name}
          <div
            className={cx(
              'w-gridcell absolute right-2 h-gridcell fill-primary p-2 text-md font-bold transition-transform duration-500',
              isOpen ? '-rotate-90' : 'rotate-90',
            )}
          >
            <ArrowRight />
          </div>
        </div>
      </button>
      {isOpen && <Suspense fallback={''}>{children}</Suspense>}
    </div>
  );
}
