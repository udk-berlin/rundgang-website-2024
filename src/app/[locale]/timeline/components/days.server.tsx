'use client';

import { useTranslations } from 'use-intl';
import { DAYS } from '@/api/constants';
import { useRef } from 'react';

export default function Days() {
  const t = useTranslations('Timeline');

  return (
    <div className="sticky left-0 top-0 z-40 h-10 pb-10">
      <div className="flex h-10 w-full justify-stretch bg-primary px-[1px]">
        {Object.entries(DAYS).map(([name, date]) => (
          <Day key={`button-day-${name}`} name={t(name)} date={date} />
        ))}
      </div>
    </div>
  );
}

function Day({ name, date }: { name: string; date: number }) {
  const scrollToDate = () => {
    const container = document?.getElementById('timetable-container');
    if (container) {
      container.scrollTo({ left: date, behavior: 'smooth' });
    }
  };

  return (
    <button
      className="h-10 grow rounded-md border-border border-x-[1px] border-t-0 border-primary bg-secondary px-4 hover:bg-highlight hover:text-black"
      onClick={scrollToDate}
    >
      {name}
    </button>
  );
}
