import { ReactNode, Suspense } from 'react';
import cx from 'classnames';

type EventContainerContentProps = {
  children: ReactNode;
  isOpen: boolean;
  isClose: boolean;
};

export default function EventContainerContent({
  children,
  isOpen,
  isClose,
}: EventContainerContentProps) {
  return (
    <div className="relative flex w-timeline flex-wrap justify-start">
      <div
        className={cx(
          isOpen ? 'animate-openDetail' : isClose ? 'animate-closeDetail' : '',
        )}
      >
        {isOpen && <Suspense>{children}</Suspense>}
      </div>
    </div>
  );
}
