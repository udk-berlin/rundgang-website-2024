'use client';

import { useState, useEffect, useRef, RefObject } from 'react';
import ArrowRight from "@/components/icons/arrowRight";

const useIsScrolled = (scrollRef: RefObject<HTMLDivElement>) => {
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
  const scrollRef = useRef<HTMLDivElement>(null);
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
    <div
      ref={scrollRef}
      className="fixed right-[12px] bottom-[calc(var(--height-footer)+12px)] z-50"
      onClick={() => handleClick()}
    >
      {isScrolled && (
        <div className="cursor-pointer bg-primary h-content-header aspect-square rounded-border flex justify-center items-center">
          <div className="rotate-[-90deg] w-fit h-fit">
            <ArrowRight width={11} height={18} />
          </div>
        </div>
      )}
    </div>
  );
}
