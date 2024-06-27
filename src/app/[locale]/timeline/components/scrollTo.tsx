'use client';

import { useRef } from 'react';

export default function ScrollTo() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollForward = () => {
    if (scrollRef?.current) {
      const parent = scrollRef?.current?.parentElement;
      if (parent) {
        parent.scrollTo({ left: parent?.scrollLeft + 400, behavior: 'smooth' });
      }
    }
  };
  const scrollBackward = () => {
    if (scrollRef?.current) {
      const parent = scrollRef?.current?.parentElement;
      if (parent) {
        parent.scrollTo({ left: parent?.scrollLeft - 400, behavior: 'smooth' });
      }
    }
  };
  return (
    <>
      <div
        ref={scrollRef}
        className="sticky bottom-[40%] left-[98vw]"
        onClick={() => scrollForward()}
      >
        <div className="w-full cursor-pointer bg-primary text-lg text-secondary">
          {'>'}
        </div>
      </div>
      <div
        ref={scrollRef}
        className="sticky bottom-[40%] left-[1vw]"
        onClick={() => scrollBackward()}
      >
        <div className="cursor-pointer bg-primary text-lg text-secondary">
          {'<'}
        </div>
      </div>
    </>
  );
}
