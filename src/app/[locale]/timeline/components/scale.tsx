import cx from 'classnames';

export default function TimeScale({ ticks }) {
  return (
    <div className="relative left-0 top-10 h-full w-screen">
      {ticks.map(([pos, str]) => (
        <div
          className={cx(
            'absolute bottom-0 z-50 h-full border-l-[1px] border-highlight',
            pos,
          )}
          key={`timeline-${pos}-${str}`}
        >
          {str}
        </div>
      ))}
    </div>
  );
}
