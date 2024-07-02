'use client';

import { useState, useEffect, useRef, RefObject } from 'react';
import ArrowRight from '@/components/icons/arrowRight';

const useIsScrolled = (scrollRef: RefObject<HTMLButtonElement>) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const parent = scrollRef?.current?.parentElement;
    if (parent) {
      parent.addEventListener('scroll', checkIfScrolled);
    }

    return () => {
      if (parent) {
        parent.removeEventListener('scroll', checkIfScrolled);
      }
    };
  }, [scrollRef?.current]);

  const checkIfScrolled = () => {
    const parent = scrollRef?.current?.parentElement;
    if (parent) {
      let windowHeight = parent.scrollTop;
      windowHeight > 20 ? setScrolled(true) : setScrolled(false);
    }
  };

  return scrolled;
};

export default function JumpToTop() {
  const scrollRef = useRef<HTMLButtonElement>(null);
  const isScrolled = useIsScrolled(scrollRef);

  const handleClick = () => {
    if (scrollRef?.current) {
      const parent = scrollRef?.current?.parentElement;
      if (parent) {
        parent.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <button
      ref={scrollRef}
      className="fixed bottom-[calc(var(--height-footer)+12px)] right-[20px] z-40 fill-secondary hover:fill-highlight"
      onClick={() => handleClick()}
    >
      {isScrolled && (
        <div className="flex aspect-square h-content-header cursor-pointer items-center justify-center rounded-border bg-primary">
          <div className="h-fit w-fit rotate-[-90deg] ">
            <ArrowRight width={11} height={18} />
          </div>
        </div>
      )}
    </button>
  );
}
