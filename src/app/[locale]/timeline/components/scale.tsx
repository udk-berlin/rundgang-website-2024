import { TIMES } from '@/api/constants';

export default function TimeScale() {
  return (
    <div className="sticky top-10 z-50 flex h-10 w-full px-border">
      {TIMES.map((tick) => (
        <TimeTick key={tick[0]} tick={tick} />
      ))}
    </div>
  );
}

function TimeTick({ tick }) {
  return (
    <div
      className="pointer-events-none absolute top-0 flex h-10 w-[100px] items-center justify-center rounded-md border-x-[1px] border-b-border border-t-0 border-primary bg-secondary"
      key={`scale-hour-${tick[0]}-${tick[1]}`}
      style={{
        left: tick[0],
      }}
    >
      {tick[1]}
    </div>
  );
}
