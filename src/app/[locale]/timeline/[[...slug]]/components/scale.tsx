import { TIMES } from '@/api/constants';

export default function TimeScale() {
  return (
    <div className="sticky top-10 z-40 flex h-gridcell w-timeline bg-primary">
      {TIMES.map((tick) => (
        <TimeTick key={tick[0]} tick={tick} />
      ))}
    </div>
  );
}

function TimeTick({ tick }: { tick: (typeof TIMES)[number] }) {
  return (
    <div
      className="pointer-events-none absolute top-0 flex h-gridcell w-[100px] items-center justify-center rounded-border border-x-xs border-b-border bg-secondary text-xs first:border-l-border last:border-r-border"
      style={{
        left: tick[0],
      }}
    >
      {tick[1]}
    </div>
  );
}
