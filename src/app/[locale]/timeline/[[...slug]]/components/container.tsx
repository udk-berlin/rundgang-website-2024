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
    <div className="animate-height w-timeline relative mb-border flex flex-wrap justify-start">
      <div
        className="sticky left-0 top-0 z-30 mx-[1px] flex w-screen cursor-pointer rounded-md bg-secondary p-border text-lg ring-2 ring-primary hover:font-bold"
        onClick={handleClick}
      >
        {location.name}
        <div
          className={cx(
            'absolute right-2 h-8 w-8 fill-primary text-md font-bold transition-transform duration-500',
            isOpen ? '-rotate-90' : 'rotate-90',
          )}
        >
          <ArrowRight />
        </div>
      </div>
      {isOpen && <Suspense fallback={''}>{children}</Suspense>}
    </div>
  );
}
