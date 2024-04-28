export type TimelinePageProps = {
  x?: any;
};

export default function TimelinePageComponent(
  props: TimelinePageProps,
  events: Temporal[]
) {
  console.log(events);

  // {events.map((event) => event.id).join("")}
  return (
    <div>
      <div>Timeline</div>
    </div>
  );
}
