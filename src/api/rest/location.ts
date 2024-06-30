import { cache } from 'react';
import { baseUrl, getById } from '@/api/rest/api';
import { Item } from '@/types/item';
import {
  restApiLocationsRoot,
  FLOORPLANS,
  FLOORPLAN_MARGINS,
} from '../constants';
import { getTreeById } from '@/api/rest/tree';
import { getPathListById } from '@/api/rest/pathlist';

export const getLocationList = cache(async (id: string) => {
  const res = await fetch(baseUrl({ query: `${id}/list/filter/type/item` }));
  return res.json();
});

export const getLocationItems = cache(async (id?: string) => {
  id = id ?? restApiLocationsRoot();
  const res = await getLocationList(id);
  return res.map((item: Item) => item.id);
});

export const getLocation = cache(async (id: string): Promise<any> => {
  const path = await getPathListById(id);
  const item = await getById(id);
  const building = await getTreeById(path[2].id);
  let level = null;
  if (item.template == 'location-room') {
    level = await getById(path[3].id);
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
    margin:
      level?.id in FLOORPLAN_MARGINS ? FLOORPLAN_MARGINS[level?.id] : 'm-0',
    //level?.id in FLOORPLAN_MARGINS ? FLOORPLAN_MARGINS[level?.id] :
    rooms: rooms,
  };
});
