import { cache } from 'react';
import { getRestApiQuery } from '@/api/rest/api';
import { Item } from '@/types/item';
import { Context } from '@/types/graphql';
import { LOCATION_ROOT, FLOORPLANS } from '../constants';

export const getContextTree = cache(async (id: string) => {
  const res = await fetch(getRestApiQuery(`${id}/tree`));
  return res.json();
});

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
  return {
    id: item.id,
    name: item.name,
    template: item.template,
    room: item.template == 'location-room' ? path[4] : null,
    level: item.template != 'location-building' ? path[3] : null,
    building: building,
  };
});