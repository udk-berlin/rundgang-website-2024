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
      className="fixed bottom-[50%] right-0 z-40 pr-2 md:z-50"
      onClick={() => scrollForward()}
    >
      <div className="flex aspect-square h-gridcell cursor-pointer items-center justify-center rounded-border bg-primary fill-secondary motion-safe:animate-bounceRight">
        <ArrowRight width={11} height={18} />
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
      className="fixed bottom-[50%] left-0 z-40 pl-2"
      onClick={() => scrollBackward()}
    >
      <div className="flex aspect-square h-gridcell cursor-pointer items-center justify-center rounded-border bg-primary fill-secondary motion-safe:animate-bounceLeft">
        <ArrowRight width={11} height={18} />
      </div>
    </div>
  );
}
