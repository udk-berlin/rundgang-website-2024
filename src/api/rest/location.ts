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
import { LocationItem } from '@/types/types';

export const getLocationList = cache(async (id: string) => {
  const res = await fetch(baseUrl({ query: `${id}/list/filter/type/item` }));
  return res.json();
});

export const getLocationItems = cache(async (id?: string) => {
  id = id ?? restApiLocationsRoot();
  const res = await getLocationList(id);
  return res.map((item: Item) => item.id);
});

export const getLocation = cache(
  async (id: string | null): Promise<LocationItem | null> => {
    if (!id) return null;
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
            r.template == 'location-room' &&
            Object.keys(r.children).length !== 0,
        )
      : null;

    return {
      id: building.id,
      name: building.name,
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
  },
);
