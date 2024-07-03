import { TIMES } from '@/api/constants';

export default function TimeGrid() {
  return (
    <div className="absolute top-0 z-10 flex h-full w-timeline border-b-border border-primary px-border">
      {TIMES.map((tick: (typeof TIMES)[number]) => (
        <TimeGridLine key={tick[0]} tick={tick} />
      ))}
    </div>
  );
}

function TimeGridLine({ tick }: { tick: (typeof TIMES)[number] }) {
  return (
    <div
      className="pointer-events-none absolute top-10 h-full border-l-border border-primary"
      key={`scale-line-${tick[0]}`}
      style={{
        left: tick[0],
      }}
    />
  );
}
