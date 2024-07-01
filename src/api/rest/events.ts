import { cache } from 'react';
import { baseUrl } from '@/api/rest/api';
import { restApiLocationsRoot, TIME_PADDING, TIME_WIDTH } from '../constants';
import { Context } from '@/types/graphql';
import { scaleTime } from 'd3-scale';
import { ContextTree, EventItem } from '@/types/types';
import { Item } from '@/types/item';
import { getTreeById } from '@/api/rest/tree';

const toPixel = (stamp: number, s: (d: Date) => number) =>
  s(new Date(stamp * 1000));
export const toDate = (stamp: number) => new Date(stamp * 1000);

export const getEventList = cache(async (id: string): Promise<EventItem[]> => {
  const building = await getTreeById(id);

  let events: {
    [key: string]: Partial<EventItem>;
  } = {};
  Object.values(building.children).map((level: ContextTree) =>
    Object.values(level.children).map((room: ContextTree) =>
      Object.values(room.children).map((item) => {
        if (item.template == 'event') {
          events[item.id] = {
            building: building.id,
            room: room.id,
            level: level.id,
          };
        }
      }),
    ),
  );

  const thumbnailList = await fetch(
    baseUrl({ query: `${id}/fullList/filter/type/item` }),
  )
    .then((r) => r.json())
    .then((r) =>
      r.reduce(
        (
          obj: { [key: Item['id']]: Item['thumbnail'] },
          item: Pick<Item, 'id' | 'thumbnail'>,
        ) => ({
          ...obj,
          [item.id]: item.thumbnail,
        }),
        {},
      ),
    );

  const eventList = await fetch(
    baseUrl({ query: `${id}/list/filter/allocation/temporal` }),
  );
  const scaleX = scaleTime()
    .domain([new Date(2024, 6, 19, 12), new Date(2024, 6, 22, 0)])
    .range([TIME_PADDING, TIME_WIDTH]);

  return eventList.json().then((r) =>
    r
      .map((ev: Pick<EventItem, 'id' | 'allocation'>) => {
        const start =
          ev.allocation?.temporal?.length != 0
            ? ev.allocation?.temporal[0].start
            : 1721419218;
        const end =
          ev.allocation?.temporal?.length != 0
            ? ev.allocation?.temporal[0].end
            : 1721419218;
        console.log(ev);

        return {
          ...ev,
          ...events[ev.id],
          thumbnail: thumbnailList[ev.id],
          start: toDate(start),
          end: toDate(end),
          left: Math.max(0, toPixel(start, scaleX)),
          width: Math.max(0, toPixel(end, scaleX) - toPixel(start, scaleX)),
        };
      })
      .sort((a: EventItem, b: EventItem) => {
        if (a.start < b.start) {
          return -1;
        } else if (a.start > b.start) {
          return 1;
        }
        return a.room.localeCompare(b.room);
      }),
  );
});

export const getEventLocations = cache(async (): Promise<Context[]> => {
  return getTreeById(restApiLocationsRoot()).then((res) =>
    Object.values(res.children),
  );
});
