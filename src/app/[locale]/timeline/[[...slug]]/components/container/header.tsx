'use client';

import cx from 'classnames';
import { Context } from '@/types/graphql';
import ArrowRight from '@/components/icons/arrowRight';

type EventContainerHeaderProps = {
  location: Context;
  isOpen: boolean;
  onClick: () => void;
};

export default function EventContainerHeader({
  location,
  isOpen,
  onClick,
}: EventContainerHeaderProps) {
  return (
    <button
      className="sticky left-0 right-0 top-0 z-20 h-gridcell w-screen bg-primary"
      onClick={onClick}
    >
      <div
        className={cx(
          'flex h-full w-full items-center justify-between rounded-border border-x-border border-b-border bg-secondary pl-gutter-xs pr-gutter-sm text-lg md:hover:font-bold',
        )}
      >
        {location.name}
        <ArrowRight
          width={11}
          height={18}
          className={cx(
            'fill-primary transition-transform duration-700',
            isOpen ? '-rotate-90' : 'rotate-90',
          )}
        />
      </div>
    </button>
  );
}
