'use client';

import { useTranslations } from 'use-intl';
import { DAYS } from '@/api/constants';
import { RefObject, useEffect, useRef, useState } from 'react';
import TimelineDay from '@/app/timeline/[[...slug]]/components/days/day';

export default function TimelineDays() {
  const t = useTranslations('Timeline');
  const scrollRef = useRef<HTMLDivElement>(null);
  const selectedDay = useIsScrolled(scrollRef);

  const scrollToDate = (date: number) => {
    if (scrollRef?.current) {
      const parent = scrollRef?.current?.parentElement;
      if (parent) {
        parent.scrollTo({ left: date, behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      ref={scrollRef}
      className="sticky left-0 top-0 z-30 h-gridcell w-screen"
    >
      <div className="grid h-full w-full grid-cols-3 border-b-border bg-primary">
        {Object.entries(DAYS).map(([name, date]) => (
          <TimelineDay
            key={name}
            name={t(name)}
            date={date}
            isSelected={selectedDay == name}
            scrollToDate={scrollToDate}
          />
        ))}
      </div>
    </div>
  );
}

const useIsScrolled = (scrollRef: RefObject<HTMLDivElement>) => {
  const [scrolled, setScrolled] = useState<string>('friday');

  useEffect(() => {
    const parent = scrollRef?.current?.parentElement;
    if (parent) {
      parent.addEventListener('scroll', getScrolled);
    }

    return () => {
      if (parent) {
        parent.removeEventListener('scroll', getScrolled);
      }
    };
  }, [scrollRef?.current]);

  const getScrolled = () => {
    const parent = scrollRef?.current?.parentElement;
    if (parent) {
      if (parent.scrollLeft < DAYS['saturday']) {
        setScrolled('friday');
      } else if (parent.scrollLeft < DAYS['sunday'] - 1000) {
        setScrolled('saturday');
      } else {
        setScrolled('sunday');
      }
    }
  };

  return scrolled;
};
