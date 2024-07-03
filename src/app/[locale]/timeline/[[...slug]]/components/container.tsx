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
        key={`location-open-button-${location.id}`}
      >
        <div className="flex h-gridcell w-lvw items-center justify-start rounded-md bg-secondary pl-gutter-xxs text-lg ring-[1px] ring-inset ring-primary sm:hover:font-bold">
          {location.name}
          <div
            className={cx(
              'w-gridcell absolute right-gutter-xs h-gridcell fill-primary p-gutter-xs text-md font-bold transition-transform duration-500',
              isOpen ? '-rotate-90' : 'rotate-90',
            )}
          >
            <ArrowRight />
          </div>
        </div>
      </button>
      <div
        className={cx(
          isOpen ? 'animate-openDetail' : close ? 'animate-closeDetail' : '',
        )}
      >
        {isOpen && <Suspense>{children}</Suspense>}
      </div>
    </div>
  );
}
