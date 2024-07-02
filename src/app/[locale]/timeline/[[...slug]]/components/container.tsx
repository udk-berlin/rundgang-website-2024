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
    <div className="animate-height relative flex  w-timeline flex-wrap justify-start">
      <div className="bg-primary">
        <div
          className="sticky left-0 top-0 z-20 mx-xs flex h-gridcell w-screen cursor-pointer items-center justify-start rounded-md border-x-border border-b-border border-primary bg-secondary text-lg hover:font-bold"
          onClick={handleClick}
        >
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
      </div>
      {isOpen && <Suspense fallback={''}>{children}</Suspense>}
    </div>
  );
}
