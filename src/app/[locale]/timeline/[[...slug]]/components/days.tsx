'use client';

import { useTranslations } from 'use-intl';
import { DAYS } from '@/api/constants';
import { RefObject, useEffect, useRef, useState } from 'react';
import cx from 'classnames';

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

export default function Days() {
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
    <div ref={scrollRef} className="sticky left-0 top-0 z-30 h-gridcell pb-10">
      <div className="flex w-full justify-stretch bg-primary px-xs">
        {Object.entries(DAYS).map(([name, date]) => (
          <Day
            key={`button-day-${name}`}
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

function Day({
  name,
  date,
  isSelected,
  scrollToDate,
}: {
  name: string;
  date: number;
  isSelected: boolean;
  scrollToDate: (date: number) => void;
}) {
  return (
    <button
      className={cx(
        'h-gridcell grow rounded-md border-border border-x-xs border-t-0 border-primary px-4 hover:bg-highlight hover:text-black',
        isSelected ? 'bg-highlight text-black' : 'bg-secondary',
      )}
      onClick={() => scrollToDate(date)}
    >
      {name}
    </button>
  );
}
