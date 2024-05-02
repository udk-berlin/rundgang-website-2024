import { cache } from 'react';
import TimelinePageComponent from './TimelinePage.server';

export const getTimelines = cache(async (id: string) => {
  const res = await fetch(
    `https://2023.api.rundgang.udk-berlin.de/api/v2/${id}/list/filter/allocation/temporal`,
  );
  return res.json();
});

export default async function TimelinesPage(props: any) {
  const events = await getTimelines(
    '!BTcywpcJQUsfkBptcB:content.udk-berlin.de',
  );

  console.log(events);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <TimelinePageComponent {...props} events={events} />
      </div>
    </main>
  );
}
