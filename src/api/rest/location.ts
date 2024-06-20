import { cache } from 'react';
import { getRestApiQuery } from '@/api/rest/api';
import { Item } from '@/types/item';
import { Context } from '@/types/graphql';

const LOCATION_ROOT = '!ZEZxbNWFYYsDgpkhCL:content.udk-berlin.de';

export const FLOORPLANS = {
  '!PsyURUpKAbSPistHpQ:content.udk-berlin.de': 7,
  '!RuJBwEwOQcFrQabJnn:content.udk-berlin.de': 3,
  '!YIwQSiHDpoiNHDMWmC:content.udk-berlin.de': 4,
  '!XGSFQYZUnFtQNzOBnD:content.udk-berlin.de': 5,
  '!GFauydmVRlpqvDETXH:content.udk-berlin.de': 6,
  '!eVjUBtkIgDQkQSKVxm:content.udk-berlin.de': 8,
  '!OkEblSLtaWAObRcCHm:content.udk-berlin.de': 10,
  '!fPuAzLpetwUYPJZwCF:content.udk-berlin.de': 11,
  '!HXlOLrPXYbIQdkqryj:content.udk-berlin.de': 9,
  '!RpTarLRqYYIdDCBLyV:content.udk-berlin.de': 13,
  '!YOMEVNrNhhIBxSAhNQ:content.udk-berlin.de': 12,
  '!CmGOTOZlDoWMcJFHkZ:content.udk-berlin.de': 2,
  '!IKWVNtgTydTHMgpUwQ:content.udk-berlin.de': 1,
};

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
