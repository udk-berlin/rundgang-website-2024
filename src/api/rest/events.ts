import { cache } from 'react';
import { baseUrl } from '@/api/rest/api';
import {
  restApiLocationsRoot,
  TIME_PADDING,
  TIME_WIDTH,
  TIME_INTERVAL,
} from '../constants';
import { Context } from '@/types/graphql';
import { scaleTime } from 'd3-scale';
import { ContextTree, EventItem } from '@/types/types';
import { Item } from '@/types/item';
import { getTreeById } from '@/api/rest/tree';

const toPixel = (stamp: number, s: (d: Date) => number) =>
  s(new Date(stamp * 1000));
export const toDate = (stamp: number) => new Date(stamp * 1000);

const getThumbnails = cache(
  async (id: string): Promise<{ [key: string]: Item['thumbnail'] }> => {
    return fetch(baseUrl({ query: `${id}/fullList/filter/type/item` }))
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
  },
);

const getEvents = cache(async (id: string): Promise<EventItem[]> => {
  return fetch(
    baseUrl({ query: `${id}/list/filter/allocation/temporal` }),
  ).then((r) => r.json());
});

export const getEventList = cache(async (id: string): Promise<EventItem[]> => {
  const building = await getTreeById(id);
  if (!building.children) {
    return [];
  }

  let events: {
    [key: string]: Pick<EventItem, 'building' | 'level' | 'room'>;
  } = buildingEvents(building);

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
  const thumbnailList = await getThumbnails(id);
  const eventList = await getEvents(id);

  const scaleX = scaleTime()
    .domain(TIME_INTERVAL)
    .range([TIME_PADDING, TIME_WIDTH]);

  return eventList
    .map((ev: Pick<EventItem, 'id' | 'allocation'>) => {
      const start =
        ev.allocation?.temporal?.length != 0
          ? ev.allocation?.temporal[0].start
          : 1721419218;
      const end =
        ev.allocation?.temporal?.length != 0
          ? ev.allocation?.temporal[0].end
          : 1721419218;

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
    });
});

const buildingEvents = (building: ContextTree) => {
  let events: {
    [key: string]: Pick<EventItem, 'building' | 'level' | 'room'>;
  } = {};
  Object.values(building.children).map((level: ContextTree) => {
    if (level.template == 'event') {
      events[level.id] = {
        building: building.id,
        room: 'none',
        level: 'none',
      };
    }
    Object.values(level.children).map((room: ContextTree) => {
      if (room.template == 'event') {
        events[room.id] = {
          building: building.id,
          room: 'none',
          level: level.id,
        };
      }
      Object.values(room.children).map((item) => {
        if (item.template == 'event') {
          events[item.id] = {
            building: building.id,
            room: room.id,
            level: level.id,
          };
        }
      });
    });
  });
  return events;
};
type EventLocation = Context & { events: number };

export const getEventLocations = cache(async (): Promise<EventLocation[]> => {
  return getTreeById(restApiLocationsRoot()).then((res) =>
    Object.values(res.children)
      .map((b: ContextTree) => {
        const events = buildingEvents(b);
        if (Object.values(events).length > 0) {
          return { ...b, events: Object.values(events).length };
        }
        return null;
      })
      .filter((b) => b)
      .sort((a, b) => a?.events - b?.events),
  );
});
