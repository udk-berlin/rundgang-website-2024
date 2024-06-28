'use client';

import ArrowRight from '@/components/icons/arrowRight';
import { useRef } from 'react';

export function ScrollForwardButton() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollForward = () => {
    if (scrollRef?.current) {
      const parent = scrollRef?.current?.parentElement;
      if (parent) {
        parent.scrollTo({ left: parent?.scrollLeft + 400, behavior: 'smooth' });
      }
    }
  };
  return (
    <div
      ref={scrollRef}
      className="fixed bottom-[50%] right-0 z-50 pr-2"
      onClick={() => scrollForward()}
    >
      <div className="h-10 w-10 cursor-pointer rounded-md bg-primary p-2 text-lg text-secondary">
        <ArrowRight />
      </div>
    </div>
  );
}

export function ScrollBackwardButton() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBackward = () => {
    if (scrollRef?.current) {
      const parent = scrollRef?.current?.parentElement;
      if (parent) {
        parent.scrollTo({ left: parent?.scrollLeft - 400, behavior: 'smooth' });
      }
    }
  };
  return (
    <div
      ref={scrollRef}
      className="fixed bottom-[50%] left-0 z-50 pl-2"
      onClick={() => scrollBackward()}
    >
      <div className="h-10 w-10 rotate-180 cursor-pointer rounded-md bg-primary p-2 text-lg text-secondary">
        <ArrowRight />
      </div>
    </div>
  );
}
