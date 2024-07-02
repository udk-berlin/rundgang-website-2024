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
  const [close, setClose] = useState(false);

  const handleClick = useCallback(() => {
    if (isOpen) {
      setClose(true);
    }
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div className={cx('relative flex w-timeline flex-wrap justify-start')}>
      <button
        className="sticky left-0 right-0 top-0 z-20 h-full w-max overflow-x-visible bg-primary"
        onClick={handleClick}
      >
        <div className="flex h-gridcell w-lvw items-center justify-start rounded-md bg-secondary pl-2 text-lg ring-[1px] ring-inset ring-primary hover:font-bold">
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
      <div
        className={cx(
          isOpen
            ? 'animate-openTimeline'
            : close
              ? 'animate-closeTimeline'
              : '',
        )}
      >
        {isOpen && <Suspense fallback={''}>{children}</Suspense>}
      </div>
    </div>
  );
}
