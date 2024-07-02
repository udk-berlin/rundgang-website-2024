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
import { LocationItem, LocationSummary } from '@/types/types';

export const getLocationList = cache(async (id: string) => {
  const res = await fetch(baseUrl({ query: `${id}/list/filter/type/item` }));
  return res.json();
});

export const getLocationItems = cache(async (id?: string) => {
  id = id ?? restApiLocationsRoot();
  const res = await getLocationList(id);
  return res.map((item: Item) => item.id);
});

export const getLocationSummary = cache(
  async (id: string): Promise<LocationSummary> => {
    const path = await getPathListById(id);
    if (path?.length < 3) {
      throw Error;
    }
    const item = path[path.length - 1];
    return {
      building: path[2],
      image:
        path[2] && path[2].id in FLOORPLANS ? FLOORPLANS[path[2].id] : 'simple',
      level: item.template !== 'location-building' ? path[3].name : '',
      room: item.template == 'location-room' ? item.name : '',
      ...item,
    };
  },
);

export const getLocation = cache(async (id: string): Promise<LocationItem> => {
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
    (l) =>
      l.template == 'location-level' &&
      Object.values(l.children).some((r) =>
        Object.values(r.children).some((item) => item.type == 'item'),
      ),
  );
  const rooms = levelWithChildren
    ? Object.values(levelWithChildren.children).filter(
        (r) =>
          r.template == 'location-room' && Object.keys(r.children).length !== 0,
      )
    : null;

  return {
    id: building.id,
    name: building.name,
    template: item.template,
    image: building.id in FLOORPLANS ? FLOORPLANS[building.id] : 'simple',
    room: item.template == 'location-room' ? path[4] : null,
    level: level,
    levels: levels,
    margin:
      level && level?.id in FLOORPLAN_MARGINS
        ? FLOORPLAN_MARGINS[level?.id]
        : 'm-0',
    rooms: rooms,
  };
});
