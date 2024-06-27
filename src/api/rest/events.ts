import { cache } from 'react';
import { getRestApiQuery } from '@/api/rest/api';
import { LOCATION_ROOT, TIME_PADDING, TIME_WIDTH } from '../constants';
import { Context } from '@/types/graphql';
import { scaleTime } from 'd3-scale';
import { EventItem } from '@/types/types';

const toPixel = (stamp, s) => s(new Date(parseInt(stamp * 1000)));
const toDate = (stamp) => new Date(parseInt(stamp * 1000));

export const getEventList = cache(async (id: string): Promise<EventItem[]> => {
  const res = await fetch(
    getRestApiQuery(`${id}/list/filter/allocation/temporal`),
  );
  const scaleX = scaleTime()
    .domain([new Date(2024, 6, 19, 12), new Date(2024, 6, 22, 0)])
    .range([TIME_PADDING, TIME_WIDTH]);

  return res.json().then((r) =>
    r.map((ev, i) => {
      const start =
        ev.allocation.temporal?.length > 0
          ? ev.allocation.temporal[0].start
          : new Date(2024, 6, 19, 12);
      const end =
        ev.allocation.temporal?.length > 0
          ? ev.allocation.temporal[0].end
          : new Date(2024, 6, 19, 16);

      return {
        ...ev,
        start: toDate(start),
        end: toDate(end),
        left: toPixel(start, scaleX),
        width: toPixel(end, scaleX) - toPixel(start, scaleX),
      };
    }),
  );
});

export const getEventLocations = cache(async (): Promise<Context[]> => {
  const res = await fetch(getRestApiQuery(`${LOCATION_ROOT}/tree`));
  return res.json().then((r) => Object.values(r.children));
});
