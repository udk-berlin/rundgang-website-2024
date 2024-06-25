import { cache } from 'react';
import { getRestApiQuery } from '@/api/rest/api';
import { Item } from '@/types/item';
import { Context } from '@/types/graphql';
import { LOCATION_ROOT, FLOORPLANS, FLOORPLAN_MARGINS } from '../constants';
import { ContextTree } from '@/types/types';

export const getContextTree = cache(
  async (id: string): Promise<ContextTree> => {
    const res = await fetch(getRestApiQuery(`${id}/tree`));
    return res.json();
  },
);

export const getLocationList = cache(async (id: string) => {
  const res = await fetch(getRestApiQuery(`${id}/list/filter/type/item`));
  return res.json();
});

export const getLocationItems = cache(async (id?: string) => {
  id = id ?? LOCATION_ROOT;
  const res = await getLocationList(id);
  return res.map((item: Item) => item.id);
});

export const getLocationPathList = cache(
  async (id: string): Promise<Context[]> => {
    const res = await fetch(getRestApiQuery(`${id}/pathlist`));
    return res.json();
  },
);

export const getLocationContext = cache(
  async (id: string): Promise<Context> => {
    const res = await fetch(getRestApiQuery(id));
    return res.json();
  },
);

export const getLocation = cache(async (id: string): Promise<any> => {
  const path = await getLocationPathList(id);
  const item = await getLocationContext(id);
  const building = await getContextTree(path[2].id);
  let level = null;
  if (item.template == 'location-room') {
    level = await getLocationContext(path[3].id);
  } else if (item.template == 'location-level') {
    level = item;
  }
  const levelWithChildren =
    item.template != 'location-building'
      ? Object.values(building.children).find((item) => item.id == path[3].id)
      : null;
  const levels = Object.values(building.children).filter(
    (item) =>
      item.template == 'location-level' &&
      Object.values(item.children).some(
        (r) => Object.keys(r.children).length !== 0,
      ),
  );
  const rooms = levelWithChildren
    ? Object.values(levelWithChildren.children).filter(
        (item) =>
          item.template == 'location-room' &&
          Object.keys(item.children).length !== 0,
      )
    : null;

  return {
    id: building.id,
    name: building.name,
    image: FLOORPLANS[building.id],
    room: item.template == 'location-room' ? path[4] : null,
    level: level,
    levels: levels,
    margin: level?.id in FLOORPLAN_MARGINS ? FLOORPLAN_MARGINS[level?.id] : '0',
    rooms: rooms,
  };
});
