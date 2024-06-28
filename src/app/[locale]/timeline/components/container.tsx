'use client';

import { ReactNode, Suspense } from 'react';
import cx from 'classnames';
import { Context } from '@/types/graphql';
import { useCallback, useState } from 'react';

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
    <div className="relative mb-border flex w-[6000px] flex-wrap justify-start">
      <div
        className="sticky left-0 top-0 z-30 mx-[1px] flex w-screen cursor-pointer rounded-md bg-secondary p-border text-lg ring-2 ring-primary hover:font-bold"
        onClick={handleClick}
      >
        {location.name}
        <div
          className={cx(
            'absolute right-2 text-md font-bold transition-transform',
            isOpen ? 'rotate-0' : 'rotate-180',
          )}
        >
          {'^'}
        </div>
      </div>
      {isOpen && <Suspense fallback={''}>{children}</Suspense>}
    </div>
  );
}
