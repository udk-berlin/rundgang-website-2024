export default function TimeTick({ tick }) {
  return (
    <div
      className="pointer-events-none absolute bottom-0 h-full border-l-[1px] border-highlight pl-7"
      key={`timeline-${tick[0]}-${tick[1]}`}
      style={{
        left: tick[0],
      }}
    >
      {tick[1]}
    </div>
  );
}
