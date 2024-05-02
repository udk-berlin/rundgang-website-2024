import { Temporal } from '@/types/graphql';

export type TimelinePageProps = {
  events: Temporal[];
};

export default function TimelinePageComponent(props: TimelinePageProps) {
  console.log(props.events);

  // {events.map((event) => event.id).join("")}
  return (
    <div>
      <div>Timeline</div>
    </div>
  );
}
