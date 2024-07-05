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
import { defaultFetchCacheOptions } from '@/api/rest/caching';
const toPixel = (stamp: number, s: (d: Date) => number) =>
  s(new Date(Math.max(1721376000000, Math.min(stamp * 1000, 1721598631000))));
export const toDate = (stamp: number) => new Date(stamp * 1000);

const toEnd = (end?: string) => parseInt(end ?? '0');
const toStart = (start?: string) => parseInt(start ?? '0');
const getThumbnails = cache(
  async (id: string): Promise<{ [key: string]: Item['thumbnail'] }> => {
    return fetch(
      baseUrl({ query: `${id}/fullList/filter/type/item` }),
      defaultFetchCacheOptions,
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
  },
);

const getEvents = cache(async (id: string): Promise<EventItem[]> => {
  return fetch(
    baseUrl({ query: `${id}/list/filter/allocation/temporal` }),
    defaultFetchCacheOptions,
  ).then((r) => r.json());
});

export const getEventList = cache(
  async (id: string): Promise<{ [key: string]: EventItem[] }> => {
    const building = await getTreeById(id);
    if (!building.children) {
      return { [building.id]: [] };
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
      .range([TIME_PADDING, TIME_WIDTH])
      .clamp(true);

    return eventList.reduce(
      (eventL, ev: Pick<EventItem, 'id' | 'allocation'>) => ({
        ...eventL,
        [ev.id]: ev.allocation?.temporal
          .sort(
            (a, b) =>
              toStart(a.start) - toStart(b.start) ||
              toEnd(b.end) - toEnd(a.end),
          )
          .reduce(
            (previousItems, temporal) => {
              const start = toStart(temporal.start);
              const end = toEnd(temporal.end);

              const prev = previousItems.pop();
              if (prev && prev.width !== 0 && prev.start != start) {
                previousItems.push(prev);
              }

              return [
                ...previousItems,
                {
                  ...ev,
                  ...events[ev.id],
                  thumbnail: thumbnailList[ev.id],
                  start: toPixel(start, scaleX),
                  end: toPixel(end, scaleX),
                  startDate: toDate(start),
                  endDate: toDate(end),
                  left: Math.max(
                    0,
                    Math.min(
                      toPixel(start, scaleX),
                      toPixel(start, scaleX) - (prev.left + prev.width),
                    ),
                  ),
                  width: Math.max(
                    0,
                    toPixel(end, scaleX) - toPixel(start, scaleX),
                  ),
                },
              ];
            },
            [{ start: 0, width: 0, left: 0 }],
          ),
      }),
      {},
    );
  },
);

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
      .sort((a, b) => a?.name.localeCompare(b.name)),
  );
});
